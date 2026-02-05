import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';

export default function Summary() {
  return (
    <SectionWrapper title="About Me" id="summary">
      <View style={[styles.glassCard, { backdropFilter: 'blur(12px)' }]}>
        <Text style={styles.summaryText}>{profileData.summary}</Text>
      </View>
    </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    padding: 30,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    width: '100%',
  },
  summaryText: {
    color: '#e2e8f0',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
});
