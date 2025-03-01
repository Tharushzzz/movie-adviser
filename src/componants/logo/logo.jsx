import s from "./style.module.css";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={s.containar}>
        <img className={s.img} src={img} alt="logo.img" />
        <div>
          <div className={s.title}>{title}</div>
          <div className={s.subtitle}>{subtitle}</div>
        </div>
      </div>
    </>
  );
}
