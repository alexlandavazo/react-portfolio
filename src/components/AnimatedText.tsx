import React from 'react';
import { motion } from 'framer-motion';
import { container, item } from '../utils/framer-motion';

type AnimatedTextProps = {
  text: string;
  className: string;
};

const AnimatedCharacters: React.FC<AnimatedTextProps> = ({
  text,
  ...props
}) => {
  const splitWords = text.split(' ');

  const words: Array<Array<string>> = splitWords.map((word) =>
    Array.from(word)
  );

  (function addWhiteSpaceToWords() {
    words.map((word) => {
      return word.push('\u00A0');
    });
  })();

  return (
    <motion.div
      initial="hidden"
      animate={'visible'}
      variants={container}
      {...props}
    >
      {words.map((word, index) => {
        return (
          <span key={index}>
            {word.map((element: string, index: number) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                    whileHover={{ scale: 1.2 }}
                    className="m-2"
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedCharacters;
