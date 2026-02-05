import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { motion } from 'framer-motion';
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
                <motion.div
                    key={index}
                    whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                        boxShadow: "0px 15px 30px rgba(56, 189, 248, 0.2)",
                    }}
                    style={{ width: '100%' }}
                >
                    <View style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
                        <Text style={styles.degree}>{edu.degree}</Text>
                        <Text style={styles.school}>{edu.school}</Text>
                        <Text style={styles.year}>{edu.year}</Text>
                    </View>
                </motion.div>
            ))}
        </View>

        {/* Certifications */}
        <View style={styles.block}>
            <Text style={styles.subtitle}>Certifications</Text>
            <View style={styles.certGrid}>
                {profileData.certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ 
                            scale: 1.05, 
                            y: -3,
                            boxShadow: "0px 10px 20px rgba(34, 197, 94, 0.2)", // Green tint for certs
                        }}
                    >
                        <View style={[styles.certCard, { backdropFilter: 'blur(10px)' }]}>
                            <Text style={styles.certText}>{cert}</Text>
                        </View>
                    </motion.div>
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
