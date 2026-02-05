import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Links = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the scrollable container or check window scroll if container scroll is promoted
      const scrollY = window.scrollY || document.querySelector('.scroll-container')?.scrollTop || 0;
      setScrolled(scrollY > 50);
    };

    // Attach to window and potential container
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navContainerStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 100,
    paddingVertical: 20,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
  };

  return (
    <>
      <motion.nav style={navContainerStyle}>
        {/* Desktop Menu */}
        <View style={styles.desktopMenu}>
          {Links.map((link) => (
            <TouchableOpacity 
              key={link.id} 
              onPress={() => scrollToSection(link.id)}
              style={styles.navLink}
            >
              <Text style={styles.navText}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mobile Menu Toggle */}
        <TouchableOpacity style={styles.mobileToggle} onPress={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#fff" size={24} /> : <Menu color="#fff" size={24} />}
        </TouchableOpacity>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 70,
              right: 20,
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
              backdropFilter: 'blur(12px)',
              padding: 20,
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 99,
              minWidth: 200,
            }}
          >
            {Links.map((link) => (
              <TouchableOpacity 
                key={link.id} 
                onPress={() => scrollToSection(link.id)}
                style={styles.mobileLink}
              >
                <Text style={styles.mobileText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = StyleSheet.create({
  desktopMenu: {
    flexDirection: 'row',
    gap: 32,
    display: 'none', // Hidden on mobile by default, shown via media query in real CSS or conditional rendering
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  },
  navLink: {
    paddingVertical: 8,
  },
  navText: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Outfit, sans-serif',
  },
  mobileToggle: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    // Show only on small screens logic typically handled by media queries or resizing
    // For simplicity in RNW, we can rely on window width or CSS. 
    // Here we'll just show it if width < 768 in production, but for now we render both and hide desktop via CSS logic or just custom view.
  },
  mobileLink: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  mobileText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Outfit, sans-serif',
  }
});

// Add a quick style injection for responsive hiding since StyleSheet doesn't fully support media queries the same way
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (min-width: 768px) {
    div[data-class="mobileToggle"] { display: none !important; }
  }
  @media (max-width: 767px) {
    div[data-class="desktopMenu"] { display: none !important; }
  }
`;
document.head.appendChild(styleSheet);
