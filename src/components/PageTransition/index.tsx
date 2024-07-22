import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

interface AnimatedPageProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  duration?: number;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({
  children,
  duration = 0.6,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, staggerChildren: 0.1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
AnimatedPage.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  duration: PropTypes.number,
};

export default AnimatedPage;
