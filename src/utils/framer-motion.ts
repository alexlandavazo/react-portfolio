export const containerWords = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export const wordAnimations = {
  hidden: {
    y: '200%',
    color: '#0055FF',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    color: '#004466',
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    onHover: { scale: 2 },
  },
};
