import { TvShowListItem } from "../TvShowlistitem/MovieListItem";
import s from "./style.module.css";

export function TvshowList({ tvShowList, onCilckitem }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvshow) => {
          return (
            <span key={tvshow.id} className={s.movie_list_item}>
              <TvShowListItem onClick={onCilckitem} tvshow={tvshow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
