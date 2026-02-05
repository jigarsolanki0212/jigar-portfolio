import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { motion } from 'framer-motion';

const TextReveal = ({ text, isMobile, isSmallMobile }) => {
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
        fontSize: isSmallMobile ? '1.5rem' : (isMobile ? '1.8rem' : '3rem'), // Even smaller for small mobiles
        fontWeight: '700',
        fontFamily: 'Outfit, sans-serif',
        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        textAlign: 'center',
        maxWidth: '100%',
        wordWrap: 'break-word',
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

export default function SectionWrapper({ children, title, id, footer }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isSmallMobile = width < 380;

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
       {title && <TextReveal text={title} isMobile={isMobile} isSmallMobile={isSmallMobile} />}

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
          flex: 1, // Allow content to fill space
          justifyContent: 'center', // Keep vertical centering
        }}
      >
        {/* Pass variants context to children if they use motion components, 
            or wrap children in a motion div if they are static */}
        <motion.div variants={itemVariants} style={{ width: '100%' }}>
            {children}
        </motion.div>
      </motion.div>
      
      {/* Footer rendered outside animation loop */}
      {footer && footer}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    width: '100%',
    minHeight: '80vh',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'relative', // Context for absolute footer
  },
});
