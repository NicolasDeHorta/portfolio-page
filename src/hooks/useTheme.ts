import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme");
  return stored === "light" ? "light" : "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
};
