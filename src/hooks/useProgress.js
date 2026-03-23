import { useState, useCallback } from "react";

const STORAGE_KEY = "lc100_done";

function loadDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch {
    return new Set();
  }
}

export function useProgress() {
  const [done, setDone] = useState(() => loadDone());

  const toggle = useCallback((num) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setDone(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return { done, toggle, reset };
}
