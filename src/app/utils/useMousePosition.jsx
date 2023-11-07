import { useState, useEffect } from "react";

export default function useMousePosition(ref) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (e) => {
    const element = ref.current;
    const x = e.clientX - element.offsetLeft / 2;
    const y = e.clientY - element.offsetTop - element.offsetHeight / 2;
    setMousePosition({ x, y });
  };
  useEffect(() => {
    if (!ref.current) return;

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
}
