"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Types and deletes through `words` forever. Pass a stable (module-level) array. */
export function useTypewriter(words: string[]) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }
    const word = words[index];
    const delay = !deleting && text === word ? 1600 : deleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduce]);

  return text;
}
