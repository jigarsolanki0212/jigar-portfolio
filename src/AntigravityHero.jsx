import { View, Text, StyleSheet, Image } from 'react-native';

import { profileData } from './data';

export default function AntigravityHero() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <View style={[styles.profileGlass, { backdropFilter: 'blur(12px)' }]}>
            <Image 
              source={{ uri: '/jigar.png' }} 
              style={styles.profileImage}
              resizeMode="cover"
            />
            <Text style={styles.name}>Jigar Solanki</Text>
            <Text style={styles.role}>Senior React Native Developer</Text>
            
            <View style={styles.skillsContainer}>
                {['React Native', 'Reanimated', 'Firebase', 'App Deployment'].map((skill) => (
                    <View key={skill} style={styles.skillBadge}>
                        <Text style={styles.skillText}>{skill}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.divider} />
            
            <Text style={styles.aboutTitle}>Architecting Mobile Experiences</Text>
            <Text style={styles.summaryText}>{profileData.summary}</Text>
        </View>
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
    paddingTop: 100, // Push content down to avoid navbar overlap
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  name: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Outfit, sans-serif',
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
    fontSize: 16,
    lineHeight: 26,
    color: '#cbd5e1',
    textAlign: 'center',
    maxWidth: 600,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});
