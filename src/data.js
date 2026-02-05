import { Code, Server, Smartphone, Globe, Cloud, Database, Layers, PenTool } from 'lucide-react';

export const profileData = {
  name: "Jigar Solanki",
  title: "Senior React Native Developer",
  summary: `React Native Developer with 5.8+ years of professional experience building high-performance mobile applications for iOS and Android across OTT, eCommerce, fintech, and service-based domains. I specialize in end-to-end mobile app development, from UI/UX implementation to production deployment on the App Store and Play Store. I have worked extensively on OTT platforms, payment integrations, in-app subscriptions, and performance optimization for real-world, large-scale applications.`,
  contact: {
    email: "jigarsolanki.dev@gmail.com",
    phone: "9157772566",
    linkedin: "www.linkedin.com/in/jigar-s",
    location: "Ahmedabad, India"
  },
  skills: {
    top: ["React Native", "Reanimated", "Firebase", "App Deployment"],
    languages: ["JavaScript", "TypeScript", "Python (Learning)", "Java (Learning)"],
    tools: ["Amazon S3", "Google Play Console", "App Store Connect", "Git", "Redux"],
    expertises: [
      "OTT App Development",
      "Payment Gateway Integrations (Stripe, Razorpay, UPI)",
      "In-App Purchases",
      "Performance Optimization",
      "Deep Linking",
      "CI/CD"
    ]
  },
  experience: [
    {
      company: "Excellent Webworld",
      role: "React Native Developer",
      duration: "April 2025 - Present",
      location: "Ahmedabad, Gujarat, India",
      description: "Current role focusing on high-quality mobile application development."
    },
    {
      company: "iCode49 Technolabs",
      role: "React Native Developer",
      duration: "February 2024 - April 2025",
      location: "Ahmedabad, Gujarat, India",
      highlights: [
        "Delivered end-to-end development for apps like 24 Seven Flix4u, JKL, FridayFlix4u, and led a complete redesign of Trident.",
        "Built smoothly functioning video players for OTT apps enabling seamless playback.",
        "Implemented Apple In-App Subscriptions and enhanced UI for multiple OTT platforms.",
        "Contributed to Farmer Connect, a multilingual eCommerce platform with full shopping flows.",
        "Integrated secure payment gateways (Stripe, PhonePe, Cashfree, Razorpay, UPI).",
        "Managed deployment for Tygon Fantasy, Bhaukaal, Primextrem, and others.",
        "Integrated Firebase Crashlytics and Facebook SDK for analytics."
      ]
    },
    {
      company: "PLUSINFOSYS",
      role: "React Native Developer",
      duration: "January 2023 - February 2024",
      location: "Ahmedabad, Gujarat, India",
      description: "Contributed to mobile application development and maintenance."
    },
    {
      company: "Maven Profcon Services LLP",
      role: "React Native Developer (Foundation Role)",
      duration: "September 2020 - January 2023",
      location: "Ahmedabad",
      highlights: [
        "Built the foundation of mobile development career working with JavaScript and Firebase.",
        "Developed internal app interfaces and reusable UI components.",
        "Assisted in building features for team operations and internal workflows.",
        "Gained practical experience in debugging, app optimization, and API integration."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Application",
      school: "Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar",
      year: "July 2017 - August 2020"
    }
  ],
  certifications: [
    "Google Play Academy - Store Listing Certificate",
    "Digital Networking Strategies",
    "Learning Python",
    "Learning Java"
  ],
  projects: [
    {
      title: "BNAT",
      association: "Associated with Excellent Webworld",
      description: "BNAT is a full-scale service marketplace mobile application designed to allow users to discover salons, book services, and manage appointments seamlessly. The app supports both guest and authenticated user journeys, location-based discovery, real-time booking, secure payments, notifications, and multi-language support. I worked extensively on end-to-end mobile development, feature implementation, and performance optimization for Android and iOS.",
      featuresTitle: "Core Functionalities",
      features: [
        "Onboarding & Authentication: Splash screens, guided onboarding, OTP-based login and registration, and guest user access with feature restrictions.",
        "Guest vs Logged-In Experience: Guest users can browse salons and services, while authenticated users can book appointments, manage favorites, and view bookings.",
        "Location & Address Management: Real-time location detection, saved addresses, address CRUD operations, and location-based salon discovery.",
        "Salon Discovery & Search: Advanced salon listing with search, sorting, and filters based on services, ratings, discounts, and price range.",
        "Salon Details: Comprehensive salon profiles including services, pricing, reviews, amenities, images, and share/favorite functionality.",
        "Booking & Payments: End-to-end booking flow for both salon and home services, time-slot management, booking summaries, and secure payment handling with success and failure states.",
        "Bookings Management: Upcoming and past bookings, booking status tracking, and post-service rating and review flow.",
        "Notifications: Real-time notifications for booking updates and admin messages with swipe-to-delete and bulk delete support.",
        "User Account Management: Profile editing, language change, invite friends, rate app, contact support, logout, and account deletion.",
        "App Control & Stability: Maintenance mode handling, optional app updates, and force-update mechanism controlled from the admin panel."
      ]
    },
    {
      title: "Drive Any Cars (DAC)",
      association: "Associated with Excellent Webworld",
      description: "A car marketplace mobile application that allows users to explore, list, and connect for buying or selling vehicles. The app focuses on a seamless user experience with smooth navigation, optimized performance, and scalable architecture. My contribution included UI development, API integration, state management, performance optimization, and publishing the app on both Android and iOS platforms.",
      skills: ["React Native", "Animation"],
      links: [
        { label: "App Store", url: "#" }, // Placeholders as actual links weren't provided in text
        { label: "Play Store", url: "#" }
      ]
    },
    {
      title: "Farmer Connect",
      subtitle: "Agricultural Services Platform",
      description: "Farmer Connect is a digital mobile platform designed to bridge the gap between farmers and essential agricultural services. The application enables efficient communication, access to resources, and service discovery aimed at improving productivity and decision-making. I contributed to mobile app development, API integration, performance optimization, and Android deployment.",
      featuresTitle: "Key Features",
      features: [
        "Centralized access to agricultural services and resources",
        "Farmer-friendly UI designed for ease of use across devices",
        "Optimized performance for low and mid-range Android smartphones",
        "Secure and scalable API-driven architecture",
        "Improved communication flow between farmers and service providers"
      ],
      links: [
        { label: "Play Store", url: "#" }
      ]
    },
    {
      title: "Flix4u",
      subtitle: "OTT / Streaming Platform",
      association: "Associated with iCode49 Technolabs",
      description: "Flix4u is a feature-rich OTT streaming mobile application designed to deliver seamless video consumption across Android and iOS platforms. The app focuses on smooth video playback, intuitive content discovery, and offline viewing capabilities. I contributed to end-to-end mobile development, performance optimization, media handling, and store deployment, ensuring a stable and scalable streaming experience.",
      featuresTitle: "Key Features",
      features: [
        "High-quality video streaming with optimized playback performance",
        "Offline download support for content access without internet connectivity",
        "Content discovery with categorized browsing and search functionality",
        "Optimized UI for smooth navigation across devices",
        "Scalable architecture supporting dynamic media content"
      ],
      links: [
        { label: "App Store", url: "#" },
        { label: "Play Store", url: "#" }
      ]
    },
    {
      title: "Kickoff Football",
      association: "Associated with Excellent Webworld",
      description: "A football-focused mobile application designed to deliver an engaging and smooth experience for football enthusiasts. The app features optimized UI performance, scalable architecture, and seamless navigation. I worked on end-to-end mobile app development including UI implementation, API integration, performance optimization, and Play Store/App Store deployment.",
      skills: ["React Native", "Android"],
      links: [
        { label: "App Store", url: "#" },
        { label: "Play Store", url: "#" }
      ]
    },
    {
      title: "Salutt",
      subtitle: "Social Dating & Connection Platform",
      association: "Associated with Excellent Webworld",
      description: "Salutt is a feature-rich social dating mobile application designed to foster meaningful connections through real-time discovery and secure interactions. Built using React Native and TypeScript, the app focuses heavily on user safety, geolocation-based matching, and seamless real-time communication. I contributed to the end-to-end development including core features, performance optimization, third-party integrations, and deployment across Android and iOS.",
      featuresTitle: "Key Features",
      features: [
        "Love Compass: Geolocation-based discovery system guiding users toward nearby matches using interactive maps and spatial logic.",
        "Safety Squad: Date-tracking and safety feature with timer-based check-ins, extend-date flow, and emergency support mechanisms.",
        "Smart Matching: Swipe-based matching engine with interaction history and rich user profiles including media uploads.",
        "Real-Time Chat: Instant messaging system powered by Socket.io for reliable real-time communication.",
        "Premium Subscriptions: Subscription and monetization flow using In-App Purchases and Stripe integration."
      ],
      skills: ["React Native", "TypeScript"],
      links: [
        { label: "App Store", url: "#" }
      ]
    },
    {
      title: "Step",
      subtitle: "Dance Community Platform",
      association: "Associated with Excellent Webworld",
      description: "Step is a comprehensive mobile platform built to connect dancers, event organizers, and the global dance community. Developed using React Native and Expo, the application functions as a digital ecosystem where users can discover dance events, connect with artists, communicate in real time, and manage schedules seamlessly across platforms.",
      featuresTitle: "Technical Highlights",
      features: [
        "Architecture: Built a scalable React Native codebase using TypeScript and Expo to enable rapid iOS and Android deployment.",
        "Backend Integration: Utilized AWS AppSync (GraphQL) for scalable APIs and AWS S3 for secure media storage.",
        "Real-Time Systems: Implemented live chat and notifications using WebSockets and Socket.io.",
        "Payments: Integrated Stripe for secure, compliant in-app payments and ticket purchases.",
        "UI/UX: Delivered fluid, animation-rich interfaces using Reanimated and Lottie for a premium experience.",
        "Localization: Implemented i18n to support multiple languages for a global user base."
      ]
    },
    {
      title: "Tashan",
      subtitle: "Entertainment Streaming Platform",
      description: "Tashan is a high-performance entertainment streaming mobile application designed to deliver rich media content with smooth animations and a responsive user experience. The app was built with a focus on scalability, optimized rendering, and efficient media handling. I contributed to core mobile development, UI/UX performance optimization, animation workflows, and Android release management.",
      featuresTitle: "Key Features",
      features: [
        "High-performance media browsing and playback experience",
        "Smooth UI animations and transitions for enhanced engagement",
        "Scalable architecture supporting content growth",
        "Optimized network handling and efficient resource usage"
      ],
      skills: ["Over-the-Top Content (OTT)"],
      links: [
        { label: "Play Store", url: "#" }
      ]
    }
  ]
};
