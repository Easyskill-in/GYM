export const BUSINESS = {
  name: 'Gym 11',
  tagline: 'Train Hard. Stay Fit. Stay Strong.',
  address: '3rd Floor, Shiv Pooja Complex, Above Bank of Baroda, Opposite Agra Sweets, City Light Road, City Light Town, Athwa, Surat, Gujarat 395007',
  phone: '9601314441',
  phoneRaw: '+919601314441',
  whatsapp: '919601314441',
  email: '',
  rating: 4.5,
  reviewCount: 179,
  hours: 'Mon–Sat 6 AM – 10 PM · Sun 8 AM – 12 PM',
  hoursShort: '6:00 AM – 10:00 PM',
  website: '',
  facebook: 'https://www.facebook.com/gym11official/',
  youtube: '',
  openDays: 365,
  plusCode: '5Q7W+P7 Surat, Gujarat, India',
};

export const NAV = ['Home','About','Facilities','Trainers','Membership','Gallery','Reviews','Contact'];

export const FACILITIES = [
  { id: 1, title: 'Strength & free weights', desc: 'Full range of barbells, racks, benches, dumbbells and resistance machines for compound lifts and hypertrophy training.', tags: ['Racks','Benches','Dumbbells','Barbells','Machines'], img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1100&q=70', alt: 'Loaded barbell resting on a rack' },
  { id: 2, title: 'Cardio floor', desc: 'Treadmills, exercise bikes and cross-trainers for conditioning, warm-ups and fat-loss work.', tags: ['Treadmill','Exercise Bike','Cross-trainer'], img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1100&q=70', alt: 'Row of treadmills in a modern gym' },
  { id: 3, title: 'Functional & CrossFit zone', desc: 'Separate floor exercise area with equipment for HIIT, CrossFit, calisthenics, plyometrics and athletic conditioning.', tags: ['CrossFit','HIIT','Calisthenics','Plyometrics'], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=70', alt: 'Kettlebells and functional training equipment' },
  { id: 4, title: 'Personal training', desc: 'Certified trainers offering personalised workout plans, form correction and progress tracking for all fitness levels.', tags: ['1-on-1 Coaching','Custom Plans'], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70', alt: 'Coach guiding a member through an exercise' },
  { id: 5, title: 'Group classes', desc: 'Yoga, Zumba, Aerobics and more — scheduled to keep training social, fun and consistent for every fitness level.', tags: ['Yoga','Zumba','Aerobics','Group Sessions'], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70', alt: 'Group fitness class in session' },
  { id: 6, title: 'Wi-Fi & amenities', desc: 'Free Wi-Fi, clean restrooms, gender-neutral toilets, multiple payment options including Google Pay and NFC mobile payments.', tags: ['Wi-Fi','Google Pay','NFC','Gender-Neutral'], img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70', alt: 'Gym amenities and facilities' },
];

export const TRAINERS = [
  { title: 'Shah Nawaz', role: 'Owner & Head Trainer', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of the gym owner' },
  { title: 'Coach Team', role: 'Certified Fitness Professionals', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of fitness trainers' },
  { title: 'Trainer Team', role: 'Strength & Functional Training', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a fitness trainer' },
  { title: 'Support Staff', role: 'Floor Assistance & Guidance', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of gym support staff' },
];

export const PLANS = [
  { name: 'Monthly', price: '—', desc: 'Full floor access with flexible month-to-month billing. Ideal for trying us out.', features: ['All equipment access','Locker & changing room','One induction session','Open Mon–Sat 6 AM – 10 PM'], off: ['Group classes','Personal coaching'], featured: false },
  { name: 'Quarterly', price: '—', desc: 'Better value with a 3-month commitment. Includes group classes.', features: ['Everything in Monthly','All group classes','Personalised workout plan','Monthly progress check'], off: ['One-to-one coaching hours'], featured: true },
  { name: 'Annual', price: '₹5K–12K', desc: 'Best value. Full access with coaching, diet guidance and all perks.', features: ['Everything in Quarterly','Weekly one-to-one sessions','Diet & recovery guidance','Priority class booking','Guest passes'], off: [], featured: false },
];

export const REVIEWS = [
  { stars: 5, text: "I had the opportunity to work out at Gym 11 in Surat during my holiday, and it left a lasting impression. The gym was impeccably clean, and the equipment was in fantastic condition. It's evident that they maintain the facility exceptionally well. What truly stood out was the helpful and cooperative staff. They were always ready to assist and ensure that I had a great workout experience.", name: 'Priyansh Sankhla', initial: 'P', source: 'Google Review' },
  { stars: 5, text: "Gym is good, trainers are well trained, they are so experienced. I love this gym — whenever I go to gym I get motivated to be the best version of myself.", name: 'Darsh Shah', initial: 'D', source: 'Google Review' },
  { stars: 5, text: "I enjoyed training over there. Staff are helpful and the machines are also in good condition. Whoever lives in that area looking for a gym should definitely check out this gym.", name: 'Dhanraj Budhani', initial: 'D', source: 'Google Review' },
  { stars: 5, text: "Decent place to workout — friendly trainers and crowd that inspires growth.", name: 'Neel Shah', initial: 'N', source: 'Google Review' },
  { stars: 5, text: "Nice ambience and good trainers. One of the best gyms in Surat.", name: 'Shubham Sharma', initial: 'S', source: 'Google Review' },
  { stars: 5, text: "Nice gym located at the center of the city! One of the best gyms from inside, cool and relaxing place to workout.", name: 'Archana Gulabani', initial: 'A', source: 'Google Review' },
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
  'Free Wi-Fi',
  'Gender-Neutral Toilets',
  'LGBTQ+ Friendly',
  'Debit Card Payments',
  'Google Pay',
  'NFC Mobile Payments',
  'Credit Card Payments',
  'Open All Days',
  'Central City Location',
  'Helpful Staff',
];
