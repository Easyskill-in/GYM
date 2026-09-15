export const BUSINESS = {
  name: 'B Natural Gym',
  tagline: '100% Natural. No Shortcuts. Real Results.',
  address: '428, 4th Floor Orchid Harmony, Opposite Palanpore Fire Station, Gaurav Path Road, Palapnpore, Surat, Gujarat 395009',
  phone: '9316282919',
  phoneRaw: '+919316282919',
  whatsapp: '919316282919',
  email: 'support@bnaturalfitness.com',
  rating: 4.9,
  reviewCount: 434,
  hours: 'Mon–Sat 5:30 AM – 12 PM & 4 – 10 PM · Sunday Closed',
  hoursShort: '5:30 AM – 10:00 PM',
  website: 'https://www.bnaturalfitness.com',
  facebook: '',
  youtube: '',
  openDays: 306,
};

export const NAV = ['Home','About','Facilities','Trainers','Membership','Gallery','Reviews','Contact'];

export const FACILITIES = [
  { id: 1, title: 'Strength & free weights', desc: 'Commercial-grade Realleader and Impulse equipment — barbells, racks, benches, dumbbells, leg press and a full free-weight range for compound lifts and hypertrophy.', tags: ['Racks','Benches','Dumbbells','Barbells','Leg Press'], img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1100&q=70', alt: 'Loaded barbell resting on a rack' },
  { id: 2, title: 'Cardio floor', desc: 'Premium Aerofit treadmills, exercise bikes and cross-trainers for conditioning, warm-ups and fat-loss work.', tags: ['Treadmill','Exercise Bike','Cross-trainer'], img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1100&q=70', alt: 'Row of treadmills in a modern gym' },
  { id: 3, title: 'Functional & CrossFit zone', desc: 'Battle ropes, kettlebells, open floor space for HIIT, CrossFit, mobility and athletic conditioning.', tags: ['Battle Ropes','Kettlebells','CrossFit','HIIT'], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=70', alt: 'Kettlebells and functional training equipment' },
  { id: 4, title: 'Personal training', desc: 'Certified coaches offering structured, ethical and personalised workout plans with one-to-one programming and form correction.', tags: ['1-on-1 Coaching','Custom Plans'], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70', alt: 'Coach guiding a member through an exercise' },
  { id: 5, title: 'Group classes', desc: 'Zumba, Yoga, Aerobics, Dance, HIIT and weight-loss sessions — scheduled to keep training social and consistent.', tags: ['Zumba','Yoga','Aerobics','Dance','HIIT'], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70', alt: 'Group fitness class in session' },
  { id: 6, title: 'Clean & hygienic facility', desc: 'Spotlessly maintained floors, sanitised equipment, clean restrooms, locker rooms and showers — hygiene is a non-negotiable priority.', tags: ['Hygiene','Lockers','Showers','Clean'], img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=70', alt: 'Gym recovery and wellness area' },
];

export const TRAINERS = [
  { title: 'Bhavesh Mahida', role: 'Founder & Owner', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of the gym owner' },
  { title: 'Yash', role: 'Coach — Strength & Training', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a fitness trainer' },
  { title: 'Namrata', role: 'Coach — Group Classes & Wellness', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a fitness trainer' },
  { title: 'Sunny', role: 'Coach — Personal Training & Motivation', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a personal trainer in a gym' },
];

export const PLANS = [
  { name: 'Monthly', price: '—', desc: 'Full floor access with flexible month-to-month billing. Ideal for trying us out.', features: ['All equipment access','Locker & changing room','One induction session','Open Mon–Sat 5:30 AM – 10 PM'], off: ['Group classes','Personal coaching'], featured: false },
  { name: 'Quarterly', price: '—', desc: 'Better value with a 3-month commitment. Includes group classes.', features: ['Everything in Monthly','All group classes','Personalised workout plan','Monthly progress check'], off: ['One-to-one coaching hours'], featured: true },
  { name: 'Annual', price: '₹8K–15K', desc: 'Best value. Full access with coaching, diet guidance and all perks.', features: ['Everything in Quarterly','Weekly one-to-one sessions','Diet & recovery guidance','Priority class booking','Guest passes'], off: [], featured: false },
];

export const REVIEWS = [
  { stars: 5, text: "One of the cleanest and most well-maintained gyms in town! The equipment is regularly sanitised, and the overall environment feels fresh, safe, and motivating. Highly recommended for anyone who values hygiene and fitness together.", name: 'Vishal Advani', initial: 'V', source: 'Google Review' },
  { stars: 5, text: "I've had a truly positive experience at B Natural Gym. The environment is incredibly supportive — the trainers are knowledgeable and attentive, the owner is approachable, and even the cleaning staff are courteous and dedicated. The equipment is modern, in great condition, and caters to a wide range of training needs.", name: 'Namira Adiya', initial: 'N', source: 'Google Review' },
  { stars: 5, text: "Amazing floor space, properly hygienic, best equipment's and friendly trainers. One of the best gyms in Surat. All the trainers are well behaved and highly skilled. Machines are well maintained.", name: 'Fenil Sur', initial: 'F', source: 'Google Review' },
  { stars: 5, text: "This is one of the finest gyms in Surat. It has all the latest machines and setup. The owner Mr. Bhavesh Mahida is a very genuine and humble person. The training staff is also very humble and supports you to the fullest. The gym is very clean and hygienic.", name: 'Verified Member', initial: 'J', source: 'Google Review' },
  { stars: 5, text: "Perfect motivating ambience for your routine workouts. Spacious floors. Polite & humble trainers who back us with their instructions and support. Maintained cleanliness and safety measures at priority. Top class equipments.", name: 'Verified Member', initial: 'A', source: 'Google Review' },
  { stars: 5, text: "I've been working out at B Natural Gym for the past 3 years and the transformation is real! The trainers are super supportive and knowledgeable — they really understand individual fitness goals. Whether you're a beginner or experienced, they tailor the workouts perfectly.", name: 'Jignesh Patel', initial: 'J', source: 'Google Review' },
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
  '100% Steroid-Free',
  'Wheelchair Accessible',
  'Online Classes',
  'Clean Restrooms',
  'Showers',
  'Debit Card Payments',
  'NFC Mobile Payments',
  'Credit Card Payments',
  'Free Parking',
  'Open Mon–Sat',
];
