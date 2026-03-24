import { useState } from "react";
import { slugify } from "../data/problems";
import styles from "./ProblemTable.module.css";

const DIFF_FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function ProblemTable({ category, done, onToggle }) {
  const [filter, setFilter] = useState("All");

  const doneCount = category.problems.filter((p) => done.has(p.num)).length;
  const pct = Math.round((doneCount / category.problems.length) * 100);

  const filtered =
    filter === "All"
      ? category.problems
      : category.problems.filter((p) => p.diff === filter);

  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.mascot}>{category.mascot}</span>
          {category.name}
          <span
            className={styles.badge}
            style={{
              background: `${category.color}25`,
              color: category.color,
            }}
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
                      <span key={tag} className={styles.chip}>
                        {tag}
                      </span>
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
