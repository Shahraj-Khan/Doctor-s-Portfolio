export const images = {
  heroDoctor:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1400&auto=format&fit=crop",
  aboutWard:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
  expertise1:
    "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=900&auto=format&fit=crop",
  expertise2:
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=900&auto=format&fit=crop",
  expertise3:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop",
  servicesDesk:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
  servicesHand:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop",
  contactRoom:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1100&auto=format&fit=crop",
  case1:
    "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=900&auto=format&fit=crop",
  case2:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
  article1:
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=900&auto=format&fit=crop",
  article2:
    "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=900&auto=format&fit=crop",
};

export const stats = [
  { value: 10000, suffix: "+", label: "Patients treated" },
  { value: 14, suffix: "", label: "Years in practice" },
  { value: 98, suffix: "%", label: "Patient satisfaction" },
];

export const whyChooseMe = [
  {
    title: "Patient-first consultations",
    description:
      "Every visit starts with listening — a full picture of your history before any plan is made.",
  },
  {
    title: "Evidence-based medicine",
    description:
      "Treatment plans are grounded in current clinical research, never guesswork or generic protocols.",
  },
  {
    title: "Clear, honest guidance",
    description:
      "Diagnoses and options explained in plain language, so every decision is one you understand.",
  },
  {
    title: "Continuity of care",
    description:
      "Long-term relationships built on follow-through — your health tracked visit after visit.",
  },
];

export const expertise = [
  {
    title: "Hypertension Management",
    image: images.expertise1,
    description: "Long-term blood pressure control through monitoring and lifestyle strategy.",
  },
  {
    title: "Heart & Thyroid Care",
    image: images.expertise2,
    description: "Cardiometabolic and endocrine conditions managed with precision diagnostics.",
  },
  {
    title: "Respiratory Conditions",
    image: images.expertise3,
    description: "Asthma, COPD, and chronic respiratory issues treated with tailored plans.",
  },
];

export const services = [
  {
    title: "General Medicine Consultation",
    image: images.servicesDesk,
    description: "A thorough evaluation for everyday health concerns and ongoing wellness.",
  },
  {
    title: "Chronic Disease Management",
    image: images.servicesHand,
    description: "Structured, long-term care plans for diabetes, hypertension, and more.",
  },
  {
    title: "Preventive Health Screening",
    image: images.expertise2,
    description: "Early detection through comprehensive annual health assessments.",
  },
  {
    title: "Second Opinion Review",
    image: images.expertise1,
    description: "An independent, detailed review of an existing diagnosis or treatment plan.",
  },
];

export const pricing = [
  {
    tier: "Basic Consultation",
    price: 30,
    featured: false,
    features: [
      "General medical consultation",
      "Basic health assessment",
      "Diagnosis & medical advice",
      "Prescription if required",
    ],
  },
  {
    tier: "Standard Care Plan",
    price: 60,
    featured: true,
    features: [
      "Detailed medical consultation",
      "Chronic condition evaluation",
      "Personalized treatment plan",
      "Lifestyle & prevention guidance",
    ],
  },
  {
    tier: "Comprehensive Care",
    price: 100,
    featured: false,
    features: [
      "In-depth health evaluation",
      "Chronic disease management",
      "Preventive screening guidance",
      "Follow-up consultation support",
    ],
  },
];

export const caseStudies = [
  {
    title: "Comprehensive Diabetes Management",
    image: images.case1,
    summary:
      "A structured twelve-month plan brought HbA1c levels back into a healthy range without medication escalation.",
  },
  {
    title: "Managing Type 2 Diabetes Effectively",
    image: images.case2,
    summary:
      "Combining nutrition strategy and monitoring to help a patient regain stable, sustainable control.",
  },
];

export const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "Use the appointment form below or call the clinic directly. You'll receive a confirmation within one business day.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Yes, appointments are recommended to ensure proper consultation time and minimal waiting.",
  },
  {
    question: "Does Dr. Thomas treat chronic conditions?",
    answer:
      "Yes — chronic disease management, including hypertension, diabetes, and thyroid disorders, is a core focus of the practice.",
  },
  {
    question: "Are online consultations available?",
    answer:
      "Yes, video consultations are available for follow-ups and select initial visits. Ask when booking.",
  },
];

export const testimonials = [
  {
    quote:
      "Dr. Thomas took the time to listen and explain my condition clearly. I felt confident and well cared for throughout my treatment.",
    name: "Michael R.",
    role: "Patient",
    rating: 4.9,
  },
  {
    quote:
      "Working with Dr. Thomas has completely changed how I manage my health. He's thorough, patient, and genuinely invested.",
    name: "Sarah W.",
    role: "Patient",
    rating: 5.0,
  },
  {
    quote:
      "The most attentive care I've received. Every question was answered without rushing me out the door.",
    name: "James K.",
    role: "Patient",
    rating: 4.8,
  },
];

export const articles = [
  {
    title: "Understanding Diabetes: Early Signs and Prevention",
    image: images.article1,
    date: "March 20, 2026",
    readTime: "6 min read",
  },
  {
    title: "Managing High Blood Pressure for Long-Term Heart Health",
    image: images.article2,
    date: "February 12, 2026",
    readTime: "5 min read",
  },
];
