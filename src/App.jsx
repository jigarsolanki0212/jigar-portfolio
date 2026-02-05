import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AntigravityHero from './AntigravityHero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  // Simple scroll reset on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
        className="scroll-container" // Hook for navbar scroll detection
      >
          <View style={styles.heroWrapper} id="hero">
            <AntigravityHero />
          </View>
          
          <View style={styles.sections}>
            <View id="about"><Summary /></View>
            <View id="experience"><Experience /></View>
            <View id="skills"><Skills /></View>
            <View id="projects"><Projects /></View>
            <View id="education"><Education /></View>
            <View id="contact"><Contact /></View>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    height: '100vh', // Ensure full viewport height
  },
  scrollContent: {
      flexGrow: 1,
  },
  heroWrapper: {
      height: '100vh', // Hero takes full screen
      width: '100%',
  },
  sections: {
      paddingBottom: 40,
      backgroundColor: '#0f172a', // Continue background
  }
});

export default App;
