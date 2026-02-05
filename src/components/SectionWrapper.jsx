import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { motion } from 'framer-motion';

const { width } = Dimensions.get('window');

export default function SectionWrapper({ children, title, id }) {
  const isMobile = width < 768;

  return (
    <View style={styles.sectionContainer} id={id}>
       {/* Section Title */}
       {title && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <h2 style={{
             color: '#ffffff',
             fontSize: isMobile ? '2rem' : '3rem',
             fontWeight: '700',
             marginBottom: '40px',
             textAlign: 'center',
             fontFamily: 'system-ui, -apple-system, sans-serif',
             textShadow: '0 4px 20px rgba(0,0,0,0.5)',
             margin: 0
           }}>
             {title}
           </h2>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: '100%',
          maxWidth: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </motion.div>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 80,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
});
