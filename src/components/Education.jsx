import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';

export default function Education() {
  return (
    <SectionWrapper title="Education & Certifications" id="education">
      <View style={styles.container}>
        {/* Education */}
        <View style={styles.block}>
             <Text style={styles.subtitle}>Academic</Text>
            {profileData.education.map((edu, index) => (
                <View key={index} style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    <Text style={styles.school}>{edu.school}</Text>
                    <Text style={styles.year}>{edu.year}</Text>
                </View>
            ))}
        </View>

        {/* Certifications */}
        <View style={styles.block}>
            <Text style={styles.subtitle}>Certifications</Text>
            <View style={styles.certGrid}>
                {profileData.certifications.map((cert, index) => (
                    <View key={index} style={[styles.certCard, { backdropFilter: 'blur(10px)' }]}>
                        <Text style={styles.certText}>{cert}</Text>
                    </View>
                ))}
            </View>
        </View>
      </View>
    </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 40,
    alignItems: 'center',
  },
  block: {
      width: '100%',
      alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: '600',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
  },
  degree: {
    fontSize: 20,
    fontWeight: '700',
    color: '#38bdf8',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  school: {
    fontSize: 16,
    color: '#e2e8f0',
    marginBottom: 4,
    textAlign: 'center',
  },
  year: {
    fontSize: 14,
    color: '#94a3b8',
  },
  certGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
      width: '100%',
  },
  certCard: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(22, 163, 74, 0.3)', // Green tint
  },
  certText: {
      color: '#e2e8f0',
      fontSize: 15,
  }
});
