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
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="#ffffff" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382C17.112 14.202 15.352 13.332 15.022 13.212C14.692 13.092 14.452 13.032 14.212 13.392C13.972 13.752 13.282 14.562 13.072 14.802C12.862 15.042 12.652 15.072 12.292 14.892C11.932 14.712 10.772 14.332 9.392 13.102C8.302 12.132 7.572 10.932 7.362 10.572C7.152 10.212 7.342 10.022 7.522 9.842C7.682 9.692 7.882 9.452 8.052 9.252C8.222 9.052 8.282 8.872 8.402 8.632C8.522 8.392 8.462 8.182 8.372 8.002C8.282 7.822 7.552 6.022 7.252 5.302C6.962 4.602 6.662 4.692 6.432 4.692C6.222 4.692 5.982 4.692 5.742 4.692C5.502 4.692 5.112 4.782 4.782 5.142C4.452 5.502 3.522 6.372 3.522 8.142C3.522 9.912 4.812 11.622 5.002 11.882C5.192 12.142 7.592 15.852 11.272 17.442C12.142 17.812 12.822 18.042 13.352 18.212C14.152 18.462 14.882 18.432 15.462 18.352C16.112 18.252 17.472 17.532 17.752 16.722C18.032 15.912 18.032 15.222 17.952 15.082C17.872 14.942 17.662 14.862 17.302 14.682H17.472ZM12.002 21.922H11.992C9.872 21.922 7.802 21.382 5.962 20.292L5.532 20.042L0.991998 21.232L2.202 16.812L1.922 16.372C0.762 14.362 0.151998 12.062 0.151998 9.712C0.151998 3.192 5.472 -2.132 12.002 -2.132C15.172 -2.132 18.142 -0.892 20.382 1.352C22.622 3.592 23.852 6.572 23.852 9.732C23.852 16.252 18.532 21.922 12.002 21.922Z" fill="white"/>
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
                        <ArrowUp color="#ffffff" size={24} />
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
    width: 60,
    height: 60,
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
