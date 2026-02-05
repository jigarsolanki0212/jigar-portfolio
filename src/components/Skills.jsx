import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    { title: "Expertise", data: profileData.skills.expertises },
    { title: "Languages", data: profileData.skills.languages },
    { title: "Tools", data: profileData.skills.tools },
  ];

  return (
    <SectionWrapper title="Skills" id="skills">
      <View style={styles.container}>
        {categories.map((cat, index) => (
          <View key={index} style={styles.categoryBlock}>
            <Text style={styles.catTitle}>{cat.title}</Text>
            <View style={styles.grid}>
                {cat.data.map((skill, i) => (
                    <motion.div
                        key={i}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '10px 16px',
                          borderRadius: 12,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          cursor: 'default',
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                        <Text style={styles.badgeText}>{skill}</Text>
                    </motion.div>
                ))}
            </View>
          </View>
        ))}
      </View>
    </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 40,
  },
  categoryBlock: {
    width: '100%',
    alignItems: 'center',
  },
  catTitle: {
    fontSize: 18,
    color: '#94a3b8',
    marginBottom: 16,
    fontWeight: '600',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  badgeText: {
    color: '#e2e8f0',
    fontSize: 15,
    fontWeight: '500',
  },
});
