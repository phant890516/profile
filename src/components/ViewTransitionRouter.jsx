// src/components/ViewTransitionRouter.jsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ViewTransitionRouter({ children }) {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (!document.startViewTransition) return;

    // 只對 PUSH / REPLACE 的導覽做轉場
    if (navType === "POP") return;

    document.startViewTransition(() => {
      // React 自己會更新 UI，不需要手動替換 DOM
    });
  }, [location, navType]);

  return children;
}
