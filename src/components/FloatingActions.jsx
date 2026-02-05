import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Find the main scrollable container created by React Native Web
    const findScrollable = () => {
        const elements = document.querySelectorAll('div');
        for (const el of elements) {
            const style = window.getComputedStyle(el);
            if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
                return el;
            }
        }
        return null;
    };

    const scrollContainer = findScrollable();
    
    const handleScroll = (e) => {
      if (e.target.scrollTop > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
    } else {
        window.addEventListener('scroll', () => {
             if (window.scrollY > 300) setShowScrollTop(true);
             else setShowScrollTop(false);
        });
    }

    return () => {
        if (scrollContainer) scrollContainer.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const elements = document.querySelectorAll('div');
    let scrollContainer = null;
    for (const el of elements) {
        const style = window.getComputedStyle(el);
        if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
            scrollContainer = el;
            break;
        }
    }

    if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
      // Direct opening with the user provided number
      Linking.openURL('https://wa.me/919157772566');
  };

  return (
    <View style={styles.container}>
        {/* WhatsApp Button - Always Visible */}
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <TouchableOpacity 
                onPress={openWhatsApp}
                style={[styles.button, styles.whatsappButton]}
                activeOpacity={0.8}
            >
                {/* Official WhatsApp SVG Icon */}
                <svg 
                    width="26" 
                    height="26" 
                    viewBox="0 0 24 24" 
                    fill="#ffffff" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </TouchableOpacity>
        </motion.div>

        {/* Scroll To Top - Conditional */}
        <AnimatePresence>
            {showScrollTop && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.2 }}
                    style={{ marginTop: 16 }}
                >
                    <TouchableOpacity 
                        onPress={scrollToTop}
                        style={[styles.button, styles.scrollButton]}
                        activeOpacity={0.8}
                    >
                        <ArrowUp color="#ffffff" size={26} />
                    </TouchableOpacity>
                </motion.div>
            )}
        </AnimatePresence>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 40,
    right: 40,
    zIndex: 1000,
    alignItems: 'center',
    gap: 0, // Handled by margin in motion div
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    cursor: 'pointer',
    marginBottom: 0, // Reset default
  },
  whatsappButton: {
    backgroundColor: '#25D366', // WhatsApp Green
  },
  scrollButton: {
    backgroundColor: '#38bdf8', // Theme Blue
  }
});
