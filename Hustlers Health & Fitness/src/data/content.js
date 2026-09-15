export const BUSINESS = {
  name: 'Hustlers Health & Fitness',
  tagline: 'Transform Your Body. Transform Your Life.',
  address: '1st Floor, School, Pyramid Square, LP Savani Circle, Near L.P. Savani, Adajan Gam, Adajan, Surat, Gujarat 395009',
  phone: '075729 26060',
  phoneRaw: '+917572926060',
  whatsapp: '917572926060',
  email: 'hustlerssurat@gmail.com',
  rating: 4.9,
  reviewCount: 734,
  hours: 'Mon–Sat 6 AM – 11 PM · Sun 7 AM – 12 PM & 5 – 9 PM',
  hoursShort: '6:00 AM – 11:00 PM',
  website: 'https://www.hustlershealthandfitness.com',
  facebook: 'https://www.facebook.com/people/hustlers-health-fitness/',
  youtube: '',
  openDays: 362,
};

export const NAV = ['Home','About','Facilities','Trainers','Membership','Gallery','Reviews','Contact'];

export const FACILITIES = [
  { id: 1, title: 'Strength & free weights', desc: 'Barbells, racks, benches, dumbbells, leg press and a full free-weight range for compound lifts and hypertrophy.', tags: ['Racks','Benches','Dumbbells','Barbells','Leg Press'], img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1100&q=70', alt: 'Loaded barbell resting on a rack' },
  { id: 2, title: 'Cardio floor', desc: 'Treadmills, exercise bikes and cross-trainers for conditioning, warm-ups and fat-loss work.', tags: ['Treadmill','Exercise Bike','Cross-trainer'], img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1100&q=70', alt: 'Row of treadmills in a modern gym' },
  { id: 3, title: 'Functional & CrossFit zone', desc: 'Battle ropes, kettlebells, open floor space for HIIT, CrossFit, mobility and athletic conditioning.', tags: ['Battle Ropes','Kettlebells','CrossFit','HIIT'], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=70', alt: 'Kettlebells and functional training equipment' },
  { id: 4, title: 'Personal training', desc: 'One-to-one programming, form correction, progress tracking and personalised workout plans.', tags: ['1-on-1 Coaching','Custom Plans'], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70', alt: 'Coach guiding a member through an exercise' },
  { id: 5, title: 'Group classes', desc: 'Zumba, Yoga, Aerobics, Dance, HIIT and weight-loss sessions — scheduled to keep training social and consistent.', tags: ['Zumba','Yoga','Aerobics','Dance','HIIT'], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70', alt: 'Group fitness class in session' },
  { id: 6, title: 'Sauna & recovery', desc: 'Post-workout sauna facility, clean restrooms, locker rooms and showers — all air-conditioned and sanitised daily.', tags: ['Sauna','Lockers','Showers','AC'], img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70', alt: 'Gym recovery and wellness area' },
];

export const TRAINERS = [
  { title: 'Akshay', role: 'Head Coach — Strength & Conditioning', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a strength coach' },
  { title: 'Yash', role: 'Coach — Weight Training & Fat Loss', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a fitness trainer' },
  { title: 'Charmi', role: 'Coach — Weight Loss & Muscle Gain', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of an athletic trainer' },
  { title: 'Trainer Team', role: 'Certified Fitness Professionals', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a personal trainer in a gym' },
];

export const PLANS = [
  { name: 'Monthly', price: '—', desc: 'Full floor access with flexible month-to-month billing. Ideal for trying us out.', features: ['All equipment access','Locker & changing room','One induction session','Open Mon–Sat 6 AM – 11 PM'], off: ['Group classes','Personal coaching'], featured: false },
  { name: 'Quarterly', price: '—', desc: 'Better value with a 3-month commitment. Includes group classes.', features: ['Everything in Monthly','All group classes','Personalised workout plan','Monthly progress check'], off: ['One-to-one coaching hours'], featured: true },
  { name: 'Annual', price: '₹10K–15K', desc: 'Best value. Full access with coaching, diet guidance and all perks.', features: ['Everything in Quarterly','Weekly one-to-one sessions','Diet & recovery guidance','Priority class booking','Guest passes'], off: [], featured: false },
];

export const REVIEWS = [
  { stars: 5, text: "The trainers are very knowledgeable and really help you understand how to work out safely and effectively. They take the time to explain exercises and answer any questions. I felt supported during my fitness journey.", name: 'Verified Member', initial: 'N', source: 'Google Review' },
  { stars: 5, text: "Hands down the best fitness environment I've experienced. Everything is clean, well-maintained, and regularly sanitised. Locker rooms, showers, and main workout floors are consistently clean throughout the day.", name: 'Verified Member', initial: 'P', source: 'Google Review' },
  { stars: 5, text: "A very spacious gym with all necessary equipment available. Very positive vibe when you enter. Trainers are good and experienced. Staff is excellent, well spoken and polite. Easily accessible with plenty of parking.", name: 'Harshvardhan A.', initial: 'H', source: 'Google Review' },
  { stars: 5, text: "Amazing workout and amazing vibes at this place. Lot of open spaces available and staff is cooperative. State-of-the-art equipment that caters to all workout styles.", name: 'Amit M.', initial: 'A', source: 'Google Review' },
  { stars: 5, text: "Best gym ever! All types of machines are available for all body parts. It's a big gym, not too crowded. Trainers are the best. Well equipped and hygiene is well maintained.", name: 'Verified Member', initial: 'D', source: 'Google Review' },
  { stars: 5, text: "I've been a member for months and the quality has never dropped. Great timing slots and the staff is always helpful. The sauna and AC make the experience premium.", name: 'Verified Member', initial: 'V', source: 'JustDial' },
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
  'Air Conditioned',
  'Sauna',
  'Clean Restrooms',
  'Locker Rooms',
  'Showers',
  'Credit Card Payments',
  'NFC Mobile Payments',
  'Good for Kids',
  'Open 362 Days/Year',
  'Ample Parking',
];
