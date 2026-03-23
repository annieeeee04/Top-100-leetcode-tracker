import { CATEGORIES } from "../data/problems";
import styles from "./CategoryGrid.module.css";

export default function CategoryGrid({ done, onSelect }) {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>📋 All Categories</h1>
        <p className={styles.desc}>
          Click a category to drill in and track progress. Check off problems as
          you solve them.
        </p>
      </div>

      <div className={styles.grid}>
        {CATEGORIES.map((cat) => {
          const doneCount = cat.problems.filter((p) => done.has(p.num)).length;
          const pct = Math.round((doneCount / cat.problems.length) * 100);
          return (
            <button
              key={cat.id}
              className={styles.card}
              onClick={() => onSelect(cat.id)}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <span className={styles.cardName}>{cat.name}</span>
              </div>
              <p className={styles.cardCount}>
                {doneCount}/{cat.problems.length} done · {pct}%
              </p>
              <div className={styles.cardBar}>
                <div
                  className={styles.cardFill}
                  style={{ width: `${pct}%`, background: cat.color }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
