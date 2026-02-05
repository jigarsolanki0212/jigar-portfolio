import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { motion } from 'framer-motion';
import { Code, Brackets, Zap, Smartphone, Layers, Cloud, Database, Laptop, Globe, Server, Wifi, Cpu, Github, Terminal, StoreIcon } from 'lucide-react';

const MotionDiv = motion.div;

// Icon set
const icons = [
  { id: 1, Icon: Code, color: '#61dafb' },
  { id: 2, Icon: Brackets, color: '#d97706' },
  { id: 3, Icon: Zap, color: '#facc15' },
  { id: 4, Icon: Smartphone, color: '#a855f7' },
  { id: 5, Icon: Layers, color: '#22c55e' },
  { id: 6, Icon: Cloud, color: '#3b82f6' },
  { id: 7, Icon: Database, color: '#ef4444' },
  { id: 8, Icon: Laptop, color: '#64748b' },
  { id: 9, Icon: Globe, color: '#10b981' },
  { id: 10, Icon: Server, color: '#f97316' },
  { id: 11, Icon: Wifi, color: '#06b6d4' },
  { id: 12, Icon: Cpu, color: '#ec4899' },
  { id: 13, Icon: StoreIcon, color: '#ffffff' },
  { id: 14, Icon: Terminal, color: '#8b5cf6' },
];

function FloatingElement({ item }) {
  const [animationProps, setAnimationProps] = useState(null);

  useEffect(() => {
    // Generate random start position
    const startX = Math.random() * 100; // percent
    const startY = Math.random() * 100; // percent
    
    setAnimationProps({
      initial: {
        left: `${startX}%`,
        top: `${startY}%`,
        scale: 0.5 + Math.random() * 0.5,
        rotate: Math.random() * 360,
      },
      animate: {
        left: [
            `${startX}%`,
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
            `${startX}%`
        ],
        top: [
            `${startY}%`,
            `${Math.random() * 100}%`,
            `${Math.random() * 100}%`,
            `${startY}%`
        ],
        rotate: [0, 180, 360],
      },
      transition: {
        duration: 20 + Math.random() * 30, // 20-50s duration (very slow)
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.33, 0.66, 1]
      },
      size: 30 + Math.random() * 30,
    });
  }, []);

  if (!animationProps) return null;

  return (
    <MotionDiv
      style={{
        position: 'absolute',
        zIndex: 0,
        opacity: 0.15,
      }}
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
    >
        <item.Icon size={animationProps.size} color={item.color} />
    </MotionDiv>
  );
}

export default function FloatingBackground() {
  return (
    <View style={styles.container}>
      {icons.map((item) => (
        <FloatingElement key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 0,
  },
});
