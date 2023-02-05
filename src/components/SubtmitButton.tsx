import React from 'react';
import { motion } from 'framer-motion';

const SubmitButton: React.FC = () => {
  return (
    <motion.button
      className="bg-primary rounded-full text-white py-3 px-5 m-auto outline-none border-none cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: '-5px', y: '5px' }}
    >
      Subtmit
    </motion.button>
  );
};

export default SubmitButton;
