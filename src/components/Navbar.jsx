import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { motion } from 'framer-motion';

const Links = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  useEffect(() => {
    const handleScroll = () => {
      // Simple Scroll Spy
      const sections = Links.map(link => document.getElementById(link.id));
      const scrollY = window.scrollY || 0;
      const viewportHeight = window.innerHeight;
      
      // Find the current section
      let current = 'hero';
      
      for (const section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        // If the section top is near the top of the viewport (or we scrolled past it)
        // We use a threshold (e.g. 1/3 of screen) to determine "active"
        if (rect.top <= viewportHeight / 3 && rect.bottom >= viewportHeight / 3) {
           current = section.id;
        }
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id); // Immediate feedback
    }
  };

  const navContainerStyle = {
    position: 'fixed',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    paddingVertical: isMobile ? 6 : 8,
    paddingHorizontal: isMobile ? 12 : 8, // More horizontal padding for scroll container
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'rgba(15, 23, 42, 0.6)', // Glassmorphism
    backdropFilter: 'blur(12px)',
    borderRadius: 100, // Capsule shape
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    maxWidth: isMobile ? '90%' : 'auto', // Limit width on mobile
    overflowX: isMobile ? 'auto' : 'visible', // Enable scroll on mobile
    whiteSpace: 'nowrap', // Keep items in one line
  };

  return (
    <motion.nav style={navContainerStyle}>
      <View style={styles.menuRow}>
        {Links.map((link) => (
          <TouchableOpacity 
            key={link.id} 
            onPress={() => scrollToSection(link.id)}
            style={[styles.navLink, { paddingHorizontal: isMobile ? 12 : 16, paddingVertical: isMobile ? 6 : 8 }]}
            activeOpacity={0.8}
          >
            {activeTab === link.id && (
              <motion.div
                layoutId="active-pill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: 100,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Text style={[
              styles.navText, 
              activeTab === link.id && styles.activeNavText,
              { fontSize: isMobile ? 12 : 14 }
            ]}>
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </motion.nav>
  );
}

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    borderRadius: 100,
    position: 'relative', // For absolute positioning of the pill
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50, // Minimum touch area
  },
  navText: {
    color: '#94a3b8',
    fontWeight: '500',
    fontFamily: 'Outfit, sans-serif',
    zIndex: 1, // Above the pill
    position: 'relative',
    transition: 'color 0.2s ease',
  },
  activeNavText: {
    color: '#ffffff',
    fontWeight: '600',
  }
});
