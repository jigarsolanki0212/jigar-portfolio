import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SectionWrapper 
      title="Get in Touch" 
      id="contact"
      footer={
        <Text style={styles.footer}>© {new Date().getFullYear()} Jigar Solanki. Built with React Native Web & Framer Motion.</Text>
      }
    >
      <View style={styles.grid}>
        {/* Email */}
        <TouchableOpacity onPress={() => handleLink(`mailto:${profileData.contact.email}`)} style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
            <Mail color="#38bdf8" size={32} />
            <Text style={styles.text}>{profileData.contact.email}</Text>
        </TouchableOpacity>

        {/* Phone */}
        <TouchableOpacity onPress={() => handleLink(`tel:${profileData.contact.phone}`)} style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
            <Phone color="#22c55e" size={32} />
            <Text style={styles.text}>{profileData.contact.phone}</Text>
        </TouchableOpacity>

        {/* LinkedIn */}
        <TouchableOpacity onPress={() => handleLink(`https://${profileData.contact.linkedin}`)} style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
            <Linkedin color="#0ea5e9" size={32} />
            <Text style={styles.text}>LinkedIn Profile</Text>
        </TouchableOpacity>

         {/* Location */}
         <View style={[styles.card, { backdropFilter: 'blur(10px)' }]}>
            <MapPin color="#f43f5e" size={32} />
            <Text style={styles.text}>{profileData.contact.location}</Text>
        </View>
      </View>
          </SectionWrapper>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    marginBottom: 60,
  },
  card: {
    width: 250,
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    cursor: 'pointer',
  },
  text: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  footer: {
      color: '#64748b',
      fontSize: 14,
      textAlign: 'center',
      position: 'absolute',
      bottom: 20,
      width: '100%',
      left: 0,
  }
});
