import { CATEGORIES } from "../data/problems";
import styles from "./CategoryGrid.module.css";

export default function CategoryGrid({ done, onSelect }) {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>All Categories</h1>
        <p className={styles.desc}>
          Pick a category and start grinding. Check off problems as you solve them — your progress saves automatically.
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
              style={{ "--cat-color": cat.color }}
            >
              <div className={styles.cardMascot}>{cat.mascot}</div>
              <div className={styles.cardBody}>
                <span className={styles.cardName}>{cat.name}</span>
                <p className={styles.cardCount}>
                  {doneCount}/{cat.problems.length} done · {pct}%
                </p>
                <div className={styles.cardBar}>
                  <div
                    className={styles.cardFill}
                    style={{ width: `${pct}%`, background: cat.color }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
