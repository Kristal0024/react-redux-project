import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setErrors,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid=()=> {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  useEffect(
    function () {
      if(!query) return
      const getData = async () => {
        try {
          dispatch(setLoading())
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_discription,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setErrors(err.message));
        }
      };
      getData();
    },
    [query, activeTab]
  );
  if(error)return <h1>Error</h1>
  if(loading)return <h1>Loading...</h1>
  return <div>
    {results.map((item,idx)=>{
      return <div key={idx}>{item.title}</div>
    })}
  </div>;
}

export default ResultGrid;
