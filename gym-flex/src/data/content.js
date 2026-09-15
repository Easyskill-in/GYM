export const BUSINESS = {
  name: 'Gym Flex',
  tagline: 'Train harder. Live stronger.',
  address: '3rd Floor, V3 Corner, Honey Park Road, Near L.P. Savani School, Adajan, Surat, Gujarat 395009',
  phone: '093271 70936',
  phoneRaw: '+919327170936',
  whatsapp: '919327170936',
  rating: 4.6,
  hours: '6:00 AM – 10:00 PM',
  facebook: 'https://www.facebook.com/GymFlexAdajan/',
};

export const NAV = ['Home','About','Facilities','Trainers','Membership','Gallery','Reviews','Contact'];

export const FACILITIES = [
  { id: 1, title: 'Strength & free weights', desc: 'Barbells, racks, benches and a full dumbbell range for the lifts that build real strength.', tags: ['Racks','Benches','Dumbbells'], img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?auto=format&fit=crop&w=1100&q=70', alt: 'Loaded barbell resting on a rack' },
  { id: 2, title: 'Cardio floor', desc: 'Treadmills, cycles and cross-trainers for conditioning, warm-ups and fat-loss work.', tags: ['Treadmill','Cycle','Cross-trainer'], img: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1100&q=70', alt: 'Row of treadmills in a modern gym' },
  { id: 3, title: 'Functional zone', desc: 'Kettlebells, ropes and open floor for mobility and athletic conditioning.', tags: [], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=70', alt: 'Kettlebells and functional training equipment' },
  { id: 4, title: 'Personal coaching', desc: 'One-to-one programming, form correction and progress tracking.', tags: [], img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=70', alt: 'Coach guiding a member through an exercise' },
  { id: 5, title: 'Group classes', desc: 'Scheduled sessions that keep training social and consistent.', tags: [], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=70', alt: 'Group fitness class in session' },
];

export const TRAINERS = [
  { title: 'Coach — Strength', role: 'Powerlifting & hypertrophy', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a strength coach' },
  { title: 'Coach — Conditioning', role: 'Fat loss & endurance', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a fitness trainer' },
  { title: 'Coach — Functional', role: 'Mobility & athletic prep', img: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of an athletic trainer' },
  { title: 'Coach — Beginners', role: 'First 90 days', img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=70', alt: 'Portrait of a personal trainer in a gym' },
];

export const PLANS = [
  { name: 'Starter', price: '—', desc: 'Full floor access during regular hours. Good for a first month.', features: ['Strength and cardio floor','Locker and changing room','One induction session'], off: ['Group classes','Personal coaching'], featured: false },
  { name: 'Pro', price: '—', desc: 'Everything in Starter plus scheduled classes and a written programme.', features: ['Everything in Starter','All group classes','Personalised workout plan','Monthly progress check'], off: ['One-to-one coaching hours'], featured: true },
  { name: 'Elite', price: '—', desc: 'Coached training with regular one-to-one time on the floor.', features: ['Everything in Pro','Weekly one-to-one sessions','Diet and recovery guidance','Priority class booking','Guest passes'], off: [], featured: false },
];

export const REVIEWS = [
  { stars: 5, text: "Plenty of space, so you're never waiting around for a bench. Easily the most comfortable gym I've trained at in Adajan.", name: 'Member — Adajan', initial: 'A' },
  { stars: 5, text: "Equipment is well maintained and there's enough variety to keep a proper split going. Staff step in when your form slips.", name: 'Member — Pal', initial: 'R' },
  { stars: 4, text: "Timings work well for me — I can get in before work or late in the evening and it still doesn't feel packed.", name: 'Member — Honey Park', initial: 'S' },
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
