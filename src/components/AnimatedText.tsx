import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Wrapper = ({ children }: { children: JSX.Element }) => {
  return <span className="word-wrapper">{children}</span>;
};

type AnimatedTextProps = {
  text: string;
  className: string;
};

const AnimatedCharacters: React.FC<AnimatedTextProps> = ({
  text,
  ...props
}) => {
  const [replay, setReplay] = useState(true);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const item = {
    hidden: {
      y: '200%',
      color: '#0055FF',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: '#004466',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      onHover: {scale: 2}
    },
  };

  const splitWords = text.split(' ');

  const words: Array<any> = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  words.map((word) => {
    return word.push('\u00A0');
  });

  return (
    <motion.div
      initial="hidden"
      animate={replay ? 'visible' : 'hidden'}
      variants={container}
      {...props}
    >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].map((element: string, index: number) => {
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
                    whileHover={{scale: 1.2 }}
                    className="m-2"
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </motion.div>
  );
};

export default AnimatedCharacters;
