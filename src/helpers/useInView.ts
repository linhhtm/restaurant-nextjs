import { useRef } from "react";
import { useInView as useInViewFromFramer } from "framer-motion";

export default function useInView({ once = true } = {}) {
  const ref: any = useRef(null);
  const isInView = useInViewFromFramer(ref, {
    once: once,
  });

  return [ref, isInView];
}
