import React from 'react';
import { motion } from 'framer-motion';
import photoUrl from '@/assets/profile-photo.jpg';

const AnimatedImage: React.FC = () => {
  return <motion.img src={photoUrl} alt="Alex Landavazo profile" />;
};

export default AnimatedImage;
