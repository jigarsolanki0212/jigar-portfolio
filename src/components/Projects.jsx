import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';

const projects = profileData.projects;

const MotionDiv = motion.div;

export default function Projects() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <SectionWrapper title="Featured Projects" id="projects">
            <View style={styles.container}>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index} 
                        isExpanded={expandedIndex === index}
                        toggleExpand={() => toggleExpand(index)}
                    />
                ))}
            </View>
        </SectionWrapper>
    );
}

function ProjectCard({ project, index, isExpanded, toggleExpand }) {
    return (
        <MotionDiv
            layout
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0px 15px 30px rgba(56, 189, 248, 0.2)",
                zIndex: 10
            }}
            style={{
                width: '100%',
                marginBottom: 24,
                borderRadius: 20,
                backgroundColor: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
            onClick={toggleExpand}
        >
            <View style={styles.cardHeader}>
                 {/* Project Image Placeholder */}
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.imageText}>Project Image</Text>
                </View>

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
                
                <MotionDiv 
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    style={{ marginLeft: 15 }}
                >
                    <ChevronDown color="#94a3b8" />
                </MotionDiv>
            </View>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <View style={styles.cardContent}>
                            <View style={styles.divider} />
                            
                            <Text style={styles.description}>{project.description}</Text>
                            
                            {project.features && (
                                <View style={styles.featuresContainer}>
                                    <Text style={styles.sectionLabel}>Key Features:</Text>
                                    {project.features.map((feature, i) => (
                                        <View key={i} style={styles.featureRow}>
                                            <View style={styles.bullet} />
                                            <Text style={styles.featureText}>{feature}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                            
                            {project.skills && (
                                <View style={styles.skillsContainer}>
                                    {project.skills.map((skill, i) => (
                                        <View key={i} style={styles.skillBadge}>
                                            <Text style={styles.skillText}>{skill}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    </motion.div>
                )}
            </AnimatePresence>
        </MotionDiv>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 20,
  },
  cardHeader: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  imageText: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 10,
    textAlign: 'center',
  },
  headerContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flexWrap: 'wrap',
    gap: 10,
  },
  title: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Outfit, sans-serif',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  miniBadge: {
    fontSize: 10,
    color: '#38bdf8',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
    fontFamily: 'Outfit, sans-serif',
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    marginBottom: 4,
    fontFamily: 'Outfit, sans-serif',
  },
  association: {
    color: '#94a3b8',
    fontSize: 13,
    fontStyle: 'italic',
    fontFamily: 'Outfit, sans-serif',
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 16,
  },
  description: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    fontFamily: 'Outfit, sans-serif',
  },
  featuresContainer: {
    marginBottom: 20,
  },
  sectionLabel: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: 'Outfit, sans-serif',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'start',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38bdf8',
    marginTop: 7,
    marginRight: 10,
  },
  featureText: {
    color: '#cbd5e1', // corrected 'colors' typo from previous logic
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
    fontFamily: 'Outfit, sans-serif',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  skillText: {
    color: '#e2e8f0',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Outfit, sans-serif',
  },
});
