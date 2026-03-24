import { allProblems } from "../data/problems";
import styles from "./Header.module.css";

export default function Header({ done, onMenuToggle }) {
  const all = allProblems();
  const totalDone = all.filter((p) => done.has(p.num)).length;
  const easyDone = all.filter((p) => p.diff === "Easy" && done.has(p.num)).length;
  const medDone = all.filter((p) => p.diff === "Medium" && done.has(p.num)).length;
  const hardDone = all.filter((p) => p.diff === "Hard" && done.has(p.num)).length;
  const pct = Math.round((totalDone / 100) * 100);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <button className={styles.hamburger} onClick={onMenuToggle} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
          <div className={styles.logo}>
            🌸 LC Top 100 <span className={styles.accent}>Hot</span>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.pill}>
            <span className={styles.pillLabel}>Done</span>
            <strong style={{ color: "var(--accent-green)" }}>{totalDone}</strong>
            <span className={styles.pillMuted}>/100</span>
          </div>
          <div className={`${styles.pill} ${styles.diffPill}`}>
            <span style={{ color: "var(--easy)" }}>🟢 {easyDone}</span>
            <span style={{ color: "var(--medium)" }}>🟠 {medDone}</span>
            <span style={{ color: "var(--hard)" }}>🔴 {hardDone}</span>
          </div>
        </div>
      </header>
      <div className={styles.barWrap}>
        <div className={styles.barFill} style={{ width: `${pct}%` }} />
        <span className={styles.barLabel}>{pct}%</span>
      </div>
    </>
  );
}
