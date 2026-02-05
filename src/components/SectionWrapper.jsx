import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { motion } from 'framer-motion';

const { width } = Dimensions.get('window');

const TextReveal = ({ text, isMobile }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0 0 20px 0',
        overflow: 'hidden',
        color: '#ffffff',
        fontSize: isMobile ? '2rem' : '3rem',
        fontWeight: '700',
        fontFamily: 'Outfit, sans-serif',
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default function SectionWrapper({ children, title, id }) {
  const isMobile = width < 768;

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    },
  };

  return (
    <View style={styles.sectionContainer} id={id}>
       {/* Section Title with Reveal Effect */}
       {title && <TextReveal text={title} isMobile={isMobile} />}

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        style={{
          width: '100%',
          maxWidth: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Pass variants context to children if they use motion components, 
            or wrap children in a motion div if they are static */}
        <motion.div variants={itemVariants} style={{ width: '100%' }}>
            {children}
        </motion.div>
      </motion.div>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 100, // Increased padding
    paddingHorizontal: 20,
    width: '100%',
    minHeight: '80vh', // Ensure it takes up significant space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    zIndex: 10,
  },
});
