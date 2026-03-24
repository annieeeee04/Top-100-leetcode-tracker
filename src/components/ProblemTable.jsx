import { useState } from "react";
import { slugify } from "../data/problems";
import styles from "./ProblemTable.module.css";

import loafImg        from "../pics/loaf.png";
import mabelImg       from "../pics/Mabel.png";
import titusImg       from "../pics/Titus.png";
import beaverImg      from "../pics/beaver.png";
import lizardImg      from "../pics/lizard.png";
import collectionImg  from "../pics/collection.png";
import wholeFamilyImg from "../pics/whole_family.png";
import birdKingImg    from "../pics/Bird King.png";
import goldFishImg    from "../pics/goldFish.png";
import frogImg        from "../pics/frog.png";
import snakeImg       from "../pics/snake.png";
import beerImg        from "../pics/beer.png";
import sharkImg       from "../pics/shark.png";
import jerryImg       from "../pics/Jerry.png";

const MASCOT_IMGS = {
  "array-hashing":  loafImg,
  "two-pointers":   mabelImg,
  "sliding-window": titusImg,
  "stack":          beaverImg,
  "binary-search":  lizardImg,
  "linked-list":    collectionImg,
  "trees":          wholeFamilyImg,
  "tries":          birdKingImg,
  "heap":           goldFishImg,
  "backtracking":   frogImg,
  "graphs":         snakeImg,
  "dp-1d":          beerImg,
  "dp-2d":          sharkImg,
  "greedy":         jerryImg,
  "math":           null,
};

const DIFF_FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function ProblemTable({ category, done, onToggle }) {
  const [filter, setFilter] = useState("All");

  const doneCount = category.problems.filter((p) => done.has(p.num)).length;
  const pct = Math.round((doneCount / category.problems.length) * 100);

  const filtered =
    filter === "All"
      ? category.problems
      : category.problems.filter((p) => p.diff === filter);

  const mascotSrc = MASCOT_IMGS[category.id];

  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              {category.name}
              <span
                className={styles.badge}
                style={{ background: `${category.color}25`, color: category.color }}
              >
                {doneCount}/{category.problems.length}
              </span>
            </h1>
            <p className={styles.desc}>{category.desc}</p>
            <div className={styles.progressRow}>
              <div className={styles.progBar}>
                <div
                  className={styles.progFill}
                  style={{ width: `${pct}%`, background: category.color }}
                />
              </div>
              <span>{pct}% complete</span>
            </div>
          </div>

          {/* Character mascot in header */}
          <div className={styles.headerMascot}>
            {mascotSrc ? (
              <img src={mascotSrc} alt={category.name} className={styles.mascotImg} />
            ) : (
              <span className={styles.mascotEmoji}>{category.mascot}</span>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        {DIFF_FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles[`active${f}`] : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table wrapped for mobile scroll */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th />
              <th>#</th>
              <th>Problem</th>
              <th>Diff</th>
              <th className={styles.tagCell}>Key Concepts</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((problem) => {
              const isDone = done.has(problem.num);
              return (
                <tr
                  key={problem.num}
                  className={`${styles.row} ${isDone ? styles.doneRow : ""}`}
                  onClick={() => onToggle(problem.num)}
                >
                  <td className={styles.checkCell}>
                    <span className={`${styles.checkbox} ${isDone ? styles.checked : ""}`}>
                      ✓
                    </span>
                  </td>
                  <td className={styles.numCell}>#{problem.num}</td>
                  <td className={styles.nameCell}>
                    <a
                      href={`https://leetcode.com/problems/${slugify(problem.title)}/`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {problem.title}
                    </a>
                  </td>
                  <td className={styles.diffCell}>
                    <span className={`${styles.diffTag} ${styles[problem.diff.toLowerCase()]}`}>
                      {problem.diff}
                    </span>
                  </td>
                  <td className={styles.tagCell}>
                    {problem.tags.map((tag) => (
                      <span key={tag} className={styles.chip}>{tag}</span>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
