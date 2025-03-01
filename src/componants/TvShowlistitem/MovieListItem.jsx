import s from "./style.module.css";
import { SMAL_IMG_COVER_BASE_URL } from "../../confing";

const MAX_TITLE_CHAR = 20;

export function TvShowListItem({ tvshow, onClick }) {
  const onClick_ = () => {
    onClick(tvshow);
  };
  return (
    <div onClick={onClick_} className={s.containar}>
      <img
        alt={tvshow.title}
        src={SMAL_IMG_COVER_BASE_URL + tvshow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvshow.title.length > MAX_TITLE_CHAR
          ? tvshow.title.slice(0, MAX_TITLE_CHAR) + "..."
          : tvshow.title}
      </div>
    </div>
  );
}
