import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Smartphone } from 'lucide-react';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const MotionView = motion.div;

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <SectionWrapper title="Featured Projects" id="projects">
      <View style={styles.container}>
        {profileData.projects.map((project, index) => {
            const isExpanded = expandedId === index;
            
            return (
                <MotionView
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                        width: '100%',
                        marginBottom: 24,
                        borderRadius: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(12px)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() => toggleExpand(index)}
                        style={styles.cardHeader}
                    >
                        <View style={styles.headerContent}>
                            <View style={styles.titleRow}>
                                <Text style={styles.title}>{project.title}</Text>
                                <View style={styles.badgeContainer}>
                                    {project.skills?.slice(0, 2).map((skill, i) => (
                                        <Text key={i} style={styles.miniBadge}>{skill}</Text>
                                    ))}
                                </View>
                            </View>
                            
                            {project.subtitle && (
                                <Text style={styles.subtitle}>{project.subtitle}</Text>
                            )}
                            
                            {project.association && (
                                <Text style={styles.association}>{project.association}</Text>
                            )}
                        </View>
                        
                        <View style={styles.iconButton}>
                            {isExpanded ? <ChevronUp color="#94a3b8" /> : <ChevronDown color="#94a3b8" />}
                        </View>
                    </TouchableOpacity>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <View style={styles.cardBody}>
                                    <Text style={styles.description}>{project.description}</Text>

                                    {project.features && (
                                        <View style={styles.section}>
                                            <Text style={styles.sectionTitle}>{project.featuresTitle || "Key Features"}</Text>
                                            {project.features.map((feature, i) => (
                                                <View key={i} style={styles.featureRow}>
                                                    <View style={styles.dot} />
                                                    <Text style={styles.featureText}>{feature}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    )}

                                    {project.links && project.links.length > 0 && (
                                        <View style={styles.linksRow}>
                                            {project.links.map((link, i) => (
                                                <TouchableOpacity key={i} style={styles.linkButton}>
                                                    <Text style={styles.linkText}>{link.label}</Text>
                                                    <ExternalLink size={14} color="#38bdf8" />
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )}
                                </View>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MotionView>
            );
        })}
      </View>
    </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 20,
  },
  cardHeader: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    cursor: 'pointer',
  },
  headerContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  miniBadge: {
    fontSize: 12,
    color: '#38bdf8',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    marginBottom: 4,
    fontWeight: '500',
  },
  association: {
    fontSize: 14,
    color: '#94a3b8',
    fontStyle: 'italic',
  },
  iconButton: {
    marginLeft: 16,
    marginTop: 4,
  },
  cardBody: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 0,
  },
  description: {
    fontSize: 16,
    color: '#cbd5e1',
    lineHeight: 24,
    marginBottom: 20,
  },
  section: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featureRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38bdf8',
    marginTop: 8,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 22,
  },
  linksRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  linkText: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: '600',
  }
});
