import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <SectionWrapper title="Experience" id="experience">
      <View style={styles.container}>
        {profileData.experience.map((job, index) => (
          <motion.div
            key={index}
            style={{
              padding: 24,
              borderRadius: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: 16,
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0px 15px 30px rgba(56, 189, 248, 0.2)",
                zIndex: 10
            }}
          >
            <View style={styles.header}>
                <View>
                    <Text style={styles.role}>{job.role}</Text>
                    <Text style={styles.company}>{job.company}</Text>
                </View>
                <View style={styles.meta}>
                    <Text style={styles.duration}>{job.duration}</Text>
                    <Text style={styles.location}>{job.location}</Text>
                </View>
            </View>

            {job.description && (
                <Text style={styles.description}>{job.description}</Text>
            )}

            {job.highlights && (
                <View style={styles.highlights}>
                    {job.highlights.map((point, i) => (
                        <View key={i} style={styles.bulletRow}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.point}>{point}</Text>
                        </View>
                    ))}
                </View>
            )}
          </motion.div>
        ))}
      </View>
    </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 24,
  },
  jobCard: {
    padding: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 10,
  },
  role: {
    fontSize: 20,
    fontWeight: '700',
    color: '#38bdf8', // Light blue accent
    marginBottom: 4,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  company: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  meta: {
    alignItems: 'flex-end',
  },
  duration: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 2,
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#64748b',
  },
  description: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  highlights: {
    marginTop: 8,
    gap: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 10,
  },
  bullet: {
    color: '#38bdf8',
    fontSize: 16,
  },
  point: {
    flex: 1,
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
});
