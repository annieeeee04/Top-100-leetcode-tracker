import { CATEGORIES } from "../data/problems";
import styles from "./Sidebar.module.css";

export default function Sidebar({ activeCat, onSelect, done }) {
  return (
    <nav className={styles.sidebar}>
      <p className={styles.label}>Categories</p>

      <button
        className={`${styles.btn} ${activeCat === "all" ? styles.active : ""}`}
        onClick={() => onSelect("all")}
      >
        <span className={styles.dot} style={{ background: "#4f9eff" }} />
        All Problems
        <span className={styles.count}>100</span>
      </button>

      <div className={styles.divider} />

      {CATEGORIES.map((cat) => {
        const doneCount = cat.problems.filter((p) => done.has(p.num)).length;
        return (
          <button
            key={cat.id}
            className={`${styles.btn} ${activeCat === cat.id ? styles.active : ""}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className={styles.dot} style={{ background: cat.color }} />
            {cat.name}
            <span className={styles.count}>
              {doneCount}/{cat.problems.length}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
