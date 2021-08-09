import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import youtube from "../APIs/youtube";
import VideoItem from "../components/Youtube/videoitem";

export const useHome = ({ user }) => {
  
  const [selectedVideo, setSelectedVideo] = useState([null]);
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const [myPostsT, setMyPostsT] = useState([]);
  const [myPostsB, setMyPostsB] = useState([]);
  const [myPostsF, setMyPostsF] = useState([]);
  const searchTerms = [
    "how to draw hands",
    "how to draw plam trees",
    "how to draw realistic faces",
    "how to draw 3D shapes",
    "how to add better shading to my drawings",
    "how to draw realistic human figures",
    "how to draw art",
    "how to sketch a boat",
    "how to draw concept art",
  ];
  useEffect(() => {
    const listAllPostsF = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPostsD();
        setMyPostsF(data.posts);
      } catch (err) {
        setError(err);
      }
    };
    listAllPostsF();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 639 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  // This gets a random element from the search terms array
  let myTerm = searchTerms[Math.floor(random(0, searchTerms.length - 1))];
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        const response = await youtube.get("/search", {
          params: {
            q: myTerm,
          },
        });
        if (response?.data?.items) setVideos(response.data.items);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchVideos();
  }, []);
  useEffect(() => {
    const listAllPostsT = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPostsT();
        setMyPostsT(data.posts);
      } catch (err) {
        setError(err);
      }
    };
    const listAllPostsB = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listAllPostsB();
        setMyPostsB(data.posts);
      } catch (err) {
        setError(err);
      }
    };

    listAllPostsT();
    listAllPostsB();
  }, []);

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const renderedVideos = videos.map((video, i) => {
    return (
      <div key={i}>
        <VideoItem video={video} handleVideoSelect={handleVideoSelect} />
      </div>
    );
  });
  return {
   renderedVideos, responsive, myPostsT, selectedVideo, handleCloseModal, myPostsF
  };
};
