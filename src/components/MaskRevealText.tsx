import React from 'react';
import { motion } from 'motion/react';

export function MaskRevealText({ text, delayStart = 0 }: { text: string; delayStart?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
            verticalAlign: "bottom",
            paddingBottom: "0.15em",
            marginBottom: "-0.15em"
          }}
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              delay: delayStart + i * 0.04
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}
