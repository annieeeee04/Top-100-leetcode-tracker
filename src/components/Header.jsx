import { allProblems } from "../data/problems";
import styles from "./Header.module.css";

export default function Header({ done }) {
  const all = allProblems();
  const totalDone = all.filter((p) => done.has(p.num)).length;
  const easyDone = all.filter((p) => p.diff === "Easy" && done.has(p.num)).length;
  const medDone = all.filter((p) => p.diff === "Medium" && done.has(p.num)).length;
  const hardDone = all.filter((p) => p.diff === "Hard" && done.has(p.num)).length;
  const pct = Math.round((totalDone / 100) * 100);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          LC Top 100 <span className={styles.accent}>Hot</span>
        </div>
        <div className={styles.stats}>
          <div className={styles.pill}>
            Done:{" "}
            <strong style={{ color: "var(--easy)" }}>{totalDone}</strong> / 100
          </div>
          <div className={styles.pill}>
            Easy:{" "}
            <strong style={{ color: "var(--easy)" }}>{easyDone}</strong>
            {" · "}Medium:{" "}
            <strong style={{ color: "var(--medium)" }}>{medDone}</strong>
            {" · "}Hard:{" "}
            <strong style={{ color: "var(--hard)" }}>{hardDone}</strong>
          </div>
        </div>
      </header>
      <div className={styles.barWrap}>
        <div className={styles.barFill} style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}
