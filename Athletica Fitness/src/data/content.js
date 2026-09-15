export const BUSINESS = {
  name: 'Athletica Fitness',
  tagline: 'Sculpt. Play. Breathe.',
  address: 'Opp. Lourdes Convent School, Meghdoot Society, Athwalines, Athwa, Surat, Gujarat 395001',
  phone: '7698869000',
  phoneRaw: '+917698869000',
  whatsapp: '917698869000',
  email: 'go@athletica.fitness',
  rating: 4.6,
  reviewCount: 451,
  hours: 'Mon–Fri 6 AM – 10 PM · Sat 6 AM – 8 PM · Sun 8 AM – 12 PM',
  hoursShort: '6:00 AM – 10:00 PM',
  website: 'https://athletica.fitness',
  facebook: '',
  youtube: '',
  openDays: 362,
};

export const NAV = ['Home','About','Facilities','Trainers','Membership','Gallery','Reviews','Contact'];

export const FACILITIES = [
  { id: 1, title: 'Strength & free weights', desc: 'Full range of barbells, racks, benches, dumbbells and resistance machines for compound lifts and hypertrophy training.', tags: ['Racks','Benches','Dumbbells','Barbells','Machines'], img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1100&q=70', alt: 'Loaded barbell resting on a rack' },
  { id: 2, title: 'Cardio floor', desc: 'Treadmills, exercise bikes and cross-trainers for conditioning, warm-ups and fat-loss work.', tags: ['Treadmill','Exercise Bike','Cross-trainer'], img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1100&q=70', alt: 'Row of treadmills in a modern gym' },
  { id: 3, title: 'Functional & CrossFit zone', desc: 'Open floor space with equipment for HIIT, CrossFit, calisthenics, plyometrics and athletic conditioning.', tags: ['CrossFit','HIIT','Calisthenics','Plyometrics'], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=70', alt: 'Kettlebells and functional training equipment' },
  { id: 4, title: 'Personal training', desc: 'Certified trainers offering personalised workout plans, form correction and progress tracking for all fitness levels.', tags: ['1-on-1 Coaching','Custom Plans'], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70', alt: 'Coach guiding a member through an exercise' },
  { id: 5, title: 'Group classes', desc: 'Yoga, Zumba, Aerobics, Dance, HIIT and more — scheduled to keep training social, fun and consistent for every fitness level.', tags: ['Yoga','Zumba','Aerobics','Dance','HIIT'], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70', alt: 'Group fitness class in session' },
  { id: 6, title: 'Premium amenities', desc: 'Clean restrooms, changing rooms, well-maintained equipment, and a motivating training environment in Athwalines.', tags: ['Restrooms','Changing Rooms','Clean','Well-Maintained'], img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70', alt: 'Gym amenities and facilities' },
];

export const TRAINERS = [
  { title: 'Vispy Kharadi', role: 'Managing Director — 10× Guinness World Record Holder', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of the gym managing director' },
  { title: 'Yash Sanghavi', role: 'Director & Co-Founder', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a director' },
  { title: 'Coach Team', role: 'Certified Fitness Professionals', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of fitness trainers' },
  { title: 'Trainer Team', role: 'Strength & Functional Training', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a personal trainer' },
];

export const PLANS = [
  { name: 'Monthly', price: '—', desc: 'Full floor access with flexible month-to-month billing. Ideal for trying us out.', features: ['All equipment access','Locker & changing room','One induction session','Open Mon–Fri 6 AM – 10 PM'], off: ['Group classes','Personal coaching'], featured: false },
  { name: 'Quarterly', price: '—', desc: 'Better value with a 3-month commitment. Includes group classes.', features: ['Everything in Monthly','All group classes','Personalised workout plan','Monthly progress check'], off: ['One-to-one coaching hours'], featured: true },
  { name: 'Annual', price: '₹8K–15K', desc: 'Best value. Full access with coaching, diet guidance and all perks.', features: ['Everything in Quarterly','Weekly one-to-one sessions','Diet & recovery guidance','Priority class booking','Guest passes'], off: [], featured: false },
];

export const REVIEWS = [
  { stars: 5, text: "I am having a very positive experience at Athletica. I have been to lots of gyms in Surat but this one is the best. From the equipments to the trainers to the vibes everything is so positive and motivating.", name: 'Verified Member', initial: 'R', source: 'Google Review' },
  { stars: 5, text: "Trainers are excellent. They help you in every way and motivate you to be better every time. From the senior trainers to the new ones all are having just one motto — to make you a better version of yourself.", name: 'Verified Member', initial: 'A', source: 'Google Review' },
  { stars: 5, text: "Please don't waste your time searching for a better gym in Surat. You need to visit Athletica once to see the magic. The equipment, trainers, and overall atmosphere are simply the best.", name: 'Verified Member', initial: 'S', source: 'Google Review' },
  { stars: 5, text: "Best gym in Surat with excellent equipment and professional trainers. The variety of activities available, cleanliness, and good communication make it stand out. Highly recommended.", name: 'Verified Member', initial: 'P', source: 'Google Review' },
  { stars: 5, text: "The positive vibes at this gym are unmatched. Every trainer is dedicated to helping you reach your goals. The facility is always clean and well-maintained. A truly premium fitness experience.", name: 'Verified Member', initial: 'M', source: 'Google Review' },
  { stars: 4, text: "Good gym with professional trainers and positive vibes. The variety of activities and cleanliness are great. A solid choice for fitness in the Athwalines area of Surat.", name: 'Verified Member', initial: 'V', source: 'Google Review' },
];

export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=70', full: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80', alt: 'Wide view of a gym training floor', cap: 'Training floor', w2: true, h2: true },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=70', full: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80', alt: 'Dumbbells on a rack', cap: 'Free weights' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=70', full: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80', alt: 'Member training on a bench', cap: 'Bench work' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70', full: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=80', alt: 'Cardio machines lined up in a gym', cap: 'Cardio zone', w2: true },
  { src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=70', full: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1600&q=80', alt: 'Athlete during a conditioning workout', cap: 'Conditioning' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=70', full: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80', alt: 'Member stretching before training', cap: 'Mobility & stretch' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=70', full: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=80', alt: 'Trainer coaching a member through a lift', cap: 'Coaching', w2: true },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=70', full: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1800&q=80', alt: 'Close-up of weight plates', cap: 'Equipment detail' },
];

export const AMENITIES = [
  'Clean Restrooms',
  'Changing Rooms',
  'Well-Maintained Equipment',
  'Certified Trainers',
  'Group Classes',
  'Personal Training',
  'Functional Training',
  'Open 362 Days/Year',
  'Athwalines Location',
  'Positive Atmosphere',
];
