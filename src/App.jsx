import { useEffect, useState } from "react";
import { TvShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./confing";
import { TvShowDetails } from "./componants/TvShowdetals/TvShowDetails";
import { Logo } from "./componants/logo/logo";
import Logoimg from "./assent/image/logo.png";
import { TvshowList } from "./componants/tvShowlist/TvShowlist";
import { SearchBar } from "./componants/searchbar/searchBar";

export function App() {
  const [currentTvShow, setcurrentTvShow] = useState();
  const [recommendationList, setrecommendationList] = useState([]);

  async function fetchpopulars() {
    try {
      const popularTvShowList = await TvShowAPI.fethpopulars();
      if (popularTvShowList.length > 0) {
        setcurrentTvShow(popularTvShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong when feching the popular movie");
    }
  }

  async function fethRecommendations(movieShowId) {
    try {
      const recommendationListResp = await TvShowAPI.fethRecommendations(
        movieShowId
      );
      if (recommendationListResp.length > 0) {
        setrecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert("Something went wrong when feching the Recommendation movie");
    }
  }

  useEffect(() => {
    fetchpopulars();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fethRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  // console.log(recommendationList);

  function updateCurrentTvshow(tvshow) {
    setcurrentTvShow(tvshow);
  }

  async function fethByTitle(title) {
    try {
      const searchResponse = await TvShowAPI.fethByTitle(title);
      if (searchResponse.length > 0) {
        setcurrentTvShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Something went wrong when feching the search movie");
    }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={Logoimg}
              title="Watowatch"
              subtitle="Find a movie you may like"
            />
          </div>

          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fethByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_ditail}>
        {currentTvShow && <TvShowDetails tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && (
          <TvshowList
            tvShowList={recommendationList}
            onCilckitem={updateCurrentTvshow}
          />
        )}
      </div>
    </div>
  );
}
