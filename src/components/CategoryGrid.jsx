import { CATEGORIES } from "../data/problems";
import styles from "./CategoryGrid.module.css";

import loafImg         from "../pics/loaf.png";
import mabelImg        from "../pics/Mabel.png";
import titusImg        from "../pics/Titus.png";
import beaverImg       from "../pics/beaver.png";
import lizardImg       from "../pics/lizard.png";
import collectionImg   from "../pics/collection.png";
import wholeFamilyImg  from "../pics/whole_family.png";
import birdKingImg     from "../pics/Bird King.png";
import goldFishImg     from "../pics/goldFish.png";
import frogImg         from "../pics/frog.png";
import snakeImg        from "../pics/snake.png";
import beerImg         from "../pics/beer.png";
import sharkImg        from "../pics/shark.png";
import jerryImg        from "../pics/Jerry.png";
import insectQueenImg  from "../pics/Insect Queen .png";

const MASCOT_IMGS = {
  "array-hashing":  { src: loafImg,          pos: "center 30%" },
  "two-pointers":   { src: mabelImg,          pos: "center 20%" },
  "sliding-window": { src: titusImg,          pos: "center 40%" },
  "stack":          { src: beaverImg,         pos: "center 25%" },
  "binary-search":  { src: lizardImg,         pos: "center 30%" },
  "linked-list":    { src: collectionImg,     pos: "center 40%" },
  "trees":          { src: wholeFamilyImg,    pos: "20% center" },
  "tries":          { src: birdKingImg,       pos: "center 30%" },
  "heap":           { src: goldFishImg,       pos: "center 30%" },
  "backtracking":   { src: frogImg,           pos: "center 25%" },
  "graphs":         { src: snakeImg,          pos: "center 30%" },
  "dp-1d":          { src: beerImg,           pos: "center 20%" },
  "dp-2d":          { src: sharkImg,          pos: "center 30%" },
  "greedy":         { src: jerryImg,          pos: "center 15%" },
  "math":           { src: insectQueenImg,    pos: "center 25%" },
};

export default function CategoryGrid({ done, onSelect }) {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>All Categories</h1>
        <p className={styles.desc}>
          Pick a category and start grinding. Check off problems as you solve them — progress saves automatically.
        </p>
      </div>

      <div className={styles.grid}>
        {CATEGORIES.map((cat) => {
          const doneCount = cat.problems.filter((p) => done.has(p.num)).length;
          const pct = Math.round((doneCount / cat.problems.length) * 100);
          const mascot = MASCOT_IMGS[cat.id];

          return (
            <button
              key={cat.id}
              className={styles.card}
              onClick={() => onSelect(cat.id)}
              style={{ "--cat-color": cat.color }}
            >
              {/* Circular character portrait */}
              <div className={styles.circleWrap} style={{ "--cat-color": cat.color }}>
                {mascot ? (
                  <img
                    src={mascot.src}
                    alt={cat.name}
                    className={styles.charImg}
                    style={{ objectPosition: mascot.pos }}
                  />
                ) : (
                  <span className={styles.emojiFallback}>{cat.mascot}</span>
                )}
              </div>

              {/* Info */}
              <div className={styles.cardBody}>
                <span className={styles.cardName}>{cat.name}</span>
                <p className={styles.cardCount}>
                  {doneCount}/{cat.problems.length} · {pct}%
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
