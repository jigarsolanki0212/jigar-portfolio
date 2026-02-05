import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AntigravityHero from './AntigravityHero';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  // Simple scroll reset on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.heroWrapper}>
            <AntigravityHero />
          </View>
          
          <View style={styles.sections}>
            <Summary />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
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
