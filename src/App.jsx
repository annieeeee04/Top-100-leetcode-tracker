import { useState } from "react";
import { CATEGORIES } from "./data/problems";
import { useProgress } from "./hooks/useProgress";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CategoryGrid from "./components/CategoryGrid";
import ProblemTable from "./components/ProblemTable";
import "./App.css";

export default function App() {
  const [activeCat, setActiveCat] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { done, toggle } = useProgress();

  const currentCat = CATEGORIES.find((c) => c.id === activeCat) ?? null;

  return (
    <div className="app">
      <Header done={done} onMenuToggle={() => setSidebarOpen((o) => !o)} />
      <div className="layout">
        {sidebarOpen && (
          <div className="sidebarOverlay" onClick={() => setSidebarOpen(false)} />
        )}
        <Sidebar
          activeCat={activeCat}
          onSelect={setActiveCat}
          done={done}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="main">
          {activeCat === "all" ? (
            <CategoryGrid done={done} onSelect={setActiveCat} />
          ) : currentCat ? (
            <ProblemTable
              category={currentCat}
              done={done}
              onToggle={toggle}
            />
          ) : null}
        </main>
      </div>
    </div>
  );
}
