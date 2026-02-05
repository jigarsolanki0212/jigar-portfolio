import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { motion } from 'framer-motion';
import { profileData } from './data';

export default function AntigravityHero() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.container, { paddingTop: isMobile ? 80 : 100 }]}>
      <View style={[styles.centerContent, { paddingHorizontal: isMobile ? 20 : 0 }]}>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0px 15px 30px rgba(56, 189, 248, 0.2)",
            }}
            style={{
                borderRadius: 24,
                cursor: 'default',
                width: '100%',
                maxWidth: 800,
            }}
        >
        <View style={[styles.profileGlass, { 
            backdropFilter: 'blur(12px)',
            paddingVertical: isMobile ? 24 : 30,
            paddingHorizontal: isMobile ? 24 : 40,
        }]}>
            <Image 
              source={{ uri: '/jigar.png' }} 
              style={[styles.profileImage, { width: isMobile ? 100 : 120, height: isMobile ? 100 : 120, borderRadius: isMobile ? 50 : 60 }]}
              resizeMode="cover"
            />
            <Text style={[styles.name, { fontSize: isMobile ? 32 : 48 }]}>Jigar Solanki</Text>
            <Text style={[styles.role, { fontSize: isMobile ? 16 : 20 }]}>Senior React Native Developer</Text>
            
            <View style={styles.skillsContainer}>
                {['React Native', 'Reanimated', 'Firebase', 'App Deployment'].map((skill) => (
                    <View key={skill} style={styles.skillBadge}>
                        <Text style={[styles.skillText, { fontSize: isMobile ? 12 : 14 }]}>{skill}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.divider} />
            
            <Text style={styles.aboutTitle}>Architecting Mobile Experiences</Text>
            <Text style={[styles.summaryText, { fontSize: isMobile ? 14 : 16 }]}>{profileData.summary}</Text>
        </View>
        </motion.div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Background handled globally now
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  centerContent: {
    zIndex: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  profileGlass: {
    borderRadius: 24,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    width: '100%',
  },
  profileImage: {
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  name: {
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Outfit, sans-serif',
  },
  role: {
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
    fontWeight: '500',
  },
  divider: {
    width: '60%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 24,
  },
  aboutTitle: {
    fontSize: 18,
    color: '#38bdf8',
    fontWeight: '600',
    marginBottom: 12,
    fontFamily: 'Outfit, sans-serif',
    letterSpacing: 0.5,
  },
  summaryText: {
    lineHeight: 26,
    color: '#cbd5e1',
    textAlign: 'center',
    maxWidth: 600,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});
