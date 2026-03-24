import { CATEGORIES } from "../data/problems";
import styles from "./CategoryGrid.module.css";

// Character images — matched to each category by personality & difficulty
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
  "array-hashing":  { src: loafImg,        pos: "center 30%"  }, // cute baby beaver = starter energy
  "two-pointers":   { src: mabelImg,        pos: "center 20%"  }, // Mabel = friendly, two hands up
  "sliding-window": { src: titusImg,        pos: "center 40%"  }, // caterpillar slides along — perfect
  "stack":          { src: beaverImg,       pos: "center 25%"  }, // wide-eyed builder beaver
  "binary-search":  { src: lizardImg,       pos: "center 30%"  }, // alert lizard scanning
  "linked-list":    { src: collectionImg,   pos: "center 40%"  }, // chain of linked critters
  "trees":          { src: wholeFamilyImg,  pos: "20% center"  }, // beaver family around tree stump
  "tries":          { src: birdKingImg,     pos: "center 30%"  }, // Bird King = king of all prefixes
  "heap":           { src: goldFishImg,     pos: "center 30%"  }, // crowned fish = top priority
  "backtracking":   { src: frogImg,         pos: "center 25%"  }, // grumpy frog jumping back
  "graphs":         { src: snakeImg,        pos: "center 30%"  }, // tangled scary snakes = complex graph
  "dp-1d":          { src: beerImg,         pos: "center 20%"  }, // grumpy bear = tough but doable
  "dp-2d":          { src: sharkImg,        pos: "center 30%"  }, // terrifying shark = hardest DP
  "greedy":         { src: jerryImg,        pos: "center 15%"  }, // smug human = always gaming the system
  "math":           null,                                          // no character → use emoji fallback
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
              {/* Character image or emoji fallback */}
              <div className={styles.cardImage}>
                {mascot ? (
                  <img
                    src={mascot.src}
                    alt={cat.name}
                    className={styles.charImg}
                    style={{ objectPosition: mascot.pos }}
                  />
                ) : (
                  <div className={styles.emojiFallback}>{cat.mascot}</div>
                )}
              </div>

              {/* Info */}
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
