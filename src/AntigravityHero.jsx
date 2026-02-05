import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { motion } from 'framer-motion';
import { Code, Brackets, Zap, Smartphone, Layers, Cloud } from 'lucide-react';

const { width, height } = Dimensions.get('window');

// Create motion components
// We use motion.div for the animated wrapper to ensure full compatibility with Framer Motion features like drag/layout
// which directly manipulate DOM style/transforms. Inside we use RN Views.
const MotionDiv = motion.div;

// Decorative elements data
const elements = [
  { id: 1, Icon: Code, color: '#61dafb', size: 40, initial: { x: -100, y: -150 } },
  { id: 2, Icon: Brackets, color: '#d97706', size: 50, initial: { x: 150, y: -100 } },
  { id: 3, Icon: Zap, color: '#facc15', size: 45, initial: { x: -200, y: 50 } },
  { id: 4, Icon: Smartphone, color: '#a855f7', size: 35, initial: { x: 180, y: 150 } },
  { id: 5, Icon: Layers, color: '#22c55e', size: 55, initial: { x: -50, y: 200 } },
  { id: 6, Icon: Cloud, color: '#3b82f6', size: 48, initial: { x: 100, y: 50 } },
];

function FloatingElement({ item }) {
  const [randomValues, setRandomValues] = React.useState({
    duration: 3,
    delay: 0,
    xOffset1: 0,
    yOffset1: 0,
    xOffset2: 0,
    yOffset2: 0,
    rotate: 0,
  });

  React.useEffect(() => {
    setRandomValues({
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      xOffset1: Math.random() * 40 - 20,
      yOffset1: Math.random() * 40 - 20,
      xOffset2: Math.random() * 40 - 20,
      yOffset2: Math.random() * 40 - 20,
      rotate: Math.random() * 10 - 5,
    });
  }, []);

  return (
    <MotionDiv
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        cursor: 'grab',
        display: 'flex',
      }}
      initial={{
        x: item.initial.x,
        y: item.initial.y,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: [item.initial.x, item.initial.x + randomValues.xOffset1, item.initial.x],
        y: [item.initial.y, item.initial.y + randomValues.yOffset1, item.initial.y],
        opacity: 0.8,
        scale: 1,
        rotate: [0, randomValues.rotate, 0],
      }}
      transition={{
        duration: randomValues.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: randomValues.delay,
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      drag
      dragConstraints={{
        left: -width / 2,
        right: width / 2,
        top: -height / 2,
        bottom: height / 2,
      }}
      dragElastic={0.2}
      layout
    >
      <View style={[styles.glassBadge, { backdropFilter: 'blur(10px)' }]}>
          <item.Icon size={item.size} color={item.color} />
      </View>
    </MotionDiv>
  );
}

export default function AntigravityHero() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundGlow} />

      {/* Floating Elements */}
      {elements.map((item) => (
        <FloatingElement key={item.id} item={item} />
      ))}

      {/* Center Content */}
      <View style={styles.centerContent}>
        <View style={[styles.profileGlass, { backdropFilter: 'blur(12px)' }]}>
            <Text style={styles.name}>Jigar Solanki</Text>
            <Text style={styles.role}>Senior React Native Developer</Text>
            
            <View style={styles.skillsContainer}>
                {['React Native', 'Reanimated', 'Firebase', 'App Deployment'].map((skill) => (
                    <View key={skill} style={styles.skillBadge}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  backgroundGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0f172a',
  },
  glassBadge: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  centerContent: {
    zIndex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileGlass: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 24,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  name: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  role: {
    fontSize: 20,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  skillBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  skillText: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '500',
  },
});
