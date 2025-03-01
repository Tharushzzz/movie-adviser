import { FiveStarRating } from "../fiveStarRating/fiveStarRating";
import s from "./style.module.css";

export function TvShowDetails({ tvShow }) {
  const rating = tvShow.vote_average.toFixed(2) / 2;

  return (
    <div className={s.containar}>
      <div className={s.title}>{tvShow.title}</div>
      <div className={s.rating_containar}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}> {tvShow.vote_average.toFixed(1)}/10 </span>
      </div>
      <div className={s.overview}>{tvShow.overview} </div>
    </div>
  );
}
