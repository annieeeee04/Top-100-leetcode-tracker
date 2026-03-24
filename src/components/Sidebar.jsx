import { CATEGORIES } from "../data/problems";
import styles from "./Sidebar.module.css";

export default function Sidebar({ activeCat, onSelect, done, isOpen, onClose }) {
  const handleSelect = (id) => {
    onSelect(id);
    onClose?.();
  };

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarHeader}>
        <p className={styles.label}>Categories</p>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">✕</button>
      </div>

      <button
        className={`${styles.btn} ${activeCat === "all" ? styles.active : ""}`}
        onClick={() => handleSelect("all")}
      >
        <span className={styles.mascot}>🗂️</span>
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
            onClick={() => handleSelect(cat.id)}
            style={activeCat === cat.id ? { "--cat-color": cat.color } : {}}
          >
            <span className={styles.mascot}>{cat.mascot}</span>
            <span className={styles.btnName}>{cat.name}</span>
            <span className={styles.count}>
              {doneCount}/{cat.problems.length}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
