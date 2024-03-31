import { range } from "@/utils/range";
import styles from "./style.module.css";

interface IRolString {
  string: string;
}

export default function RolString({ string }: IRolString) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__content}>
        {range(1, 4).map((item, index) => {
          return (
            <li key={index} className={styles.marquee__item}>
              {" "}
              {string}
            </li>
          );
        })}
      </ul>
      <ul className={styles.marquee__content} aria-hidden="true">
        {range(1, 4).map((item, index) => {
          return (
            <li key={index} className={styles.marquee__item}>
              {" "}
              {string}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
