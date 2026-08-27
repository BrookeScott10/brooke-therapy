type Review = {
  id: number;
  name: string;
  initials: string;
  image?: string; // optional
  date: string;
  review: string;
  rating?: number;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Teresa P",
    initials: "T",
    date: "2025-11-16",
    review: "Great therapist!",
    rating: 5,
    verified: true,
    // image: "/reviews/teresa.jpg",
  },
  {
    id: 2,
    name: "Coni D",
    initials: "CD",
    date: "2025-01-20",
    review: "Two thumbs up! Wonderful! Renews my health! Thanks again Brooke.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "Teresa P",
    initials: "T",
    date: "2026-05-12",
    review: "Excellent service.",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Bryan S",
    initials: "B",
    date: "2026-05-29",
    review: "Professional, caring and highly recommended.",
    rating: 4,
    verified: true,
     image: "/reviews/Bryan.jpg",
  },
  {
    id: 5,
    name: "Melissa R",
    initials: "M",
    date: "2026-06-10",
    review:
      "Amazing experience from start to finish. I left feeling refreshed.",
    rating: 5,
    verified: true,
  },
  {
    id: 6,
    name: "David K",
    initials: "D",
    date: "2026-06-18",
    review: "Friendly and outstanding service. Will definitely return.",
    rating: 4,
    verified: true,
  },

  // NEW REVIEWS
  {
    id: 7,
    name: "Emily H",
    initials: "EH",
    date: "2025-04-10",
    review:
      "A very calming experience from beginning to end. Brooke listened to the areas where I had tension and adjusted the session perfectly. I felt so much better afterward and will definitely return.",
    rating: 4,
    verified: false,
  },
  {
    id: 8,
    name: "David K",
    initials: "DK",
    date: "2026-04-22",
    review:
      "Good session overall. Brooke was polite and professional. Scheduling took a little longer than expected, but the massage itself was enjoyable.",
    rating: 3,
    verified: true,
    image: "/reviews/David.jpg",
  },
  {
    id: 9,
    name: "Jessica M",
    initials: "JM",
    date: "2026-06-18",
    review:
      "The massage was good overall and Brooke was friendly and welcoming. The pressure was a bit lighter than I usually prefer, but it was still relaxing and helped relieve my neck and shoulder tension.",
    rating: 3,
    verified: false,
    image: "/reviews/Jessica.jpg",
  },
  {
    id: 10,
    name: "Chris M",
    initials: "CM",
    date: "2026-06-03",
    review:
      "Very pleasant experience. Brooke has a calming personality and great technique. Left feeling refreshed and much less stressed.",
    rating: 4,
    verified: true,
  },
  {
    id: 11,
    name: "Sarah L",
    initials: "SL",
    date: "2026-06-29",
    review:
      "I was looking for a relaxing massage after a stressful week, and Brooke exceeded my expectations. She was kind, professional, and made me feel completely comfortable. I left feeling refreshed and renewed.",
    rating: 5,
    verified: false,
    image: "/reviews/Sarah.jpg",
  },
  {
    id: 12,
    name: "Anthony W",
    initials: "AW",
    date: "2025-05-16",
    review:
      "One of the best massages I’ve had in years. Clean, relaxing atmosphere and excellent attention to detail. Highly recommended!",
    rating: 5,
    verified: false,
  },
  {
    id: 13,
    name: "Michael R",
    initials: "MR",
    date: "2026-03-08",
    review: "Very good at what she does, but not always available.",
    rating: 4,
    verified: true,
  },
  {
    id: 14,
    name: "James B",
    initials: "JB",
    date: "2025-02-14",
    review:
      "Amazing experience from start to finish. Professional, friendly, and made me feel completely relaxed. I’ll definitely be booking another session soon.",
    rating: 5,
    verified: false,
     image: "/reviews/James.jpg",
  },
  {
    id: 15,
    name: "Daniel & Rachel P",
    initials: "DR",
    date: "2025-02-27",
    review:
      "My wife and I booked a couples massage for our anniversary, and it was absolutely worth it. Brooke created such a relaxing atmosphere, and we both left feeling refreshed.",
    rating: 5,
    verified: false,
  },
  {
    id: 16,
    name: "Mark & Jennifer S",
    initials: "MJ",
    date: "2026-05-09",
    review:
      "We had a wonderful couples massage experience. Brooke was warm, professional, and made us both feel comfortable from the moment we arrived.",
    rating: 4,
    verified: true,
    image: "/reviews/MarkJennifer.jpg",
  },
  {
    id: 17,
    name: "Kevin & Amanda T",
    initials: "KA",
    date: "2026-06-01",
    review:
      "Our first couples massage together, and Brooke made it a fantastic experience. The environment was peaceful, and we both walked out feeling completely relaxed.",
    rating: 5,
    verified: false,
  },


  {
    id: 18,
    name: "Newell J",
    initials: "NJ",
    date: "2026-06-30",
    review:
      "Amazing massage! She was professional, friendly, and helped relieve my back pain.",
    rating: 5,
    verified: true,
     image: "/reviews/Newell.jpg",
  },

  {
    id: 19,
    name: " Tim ",
    initials: "T",
    date: "2026-07-01",
    review:
      "Very relaxing experience. Clean setup, great communication. Highly recommend.",
    rating: 5,
    verified: false,
     image: "/reviews/Tim.jpg",
  },


  {
    id: 20,
    name: " Sarah M ",
    initials: "SM",
    date: "2026-07-04",
    review:
      "I wasn’t sure what to expect, but it was honestly amazing. I left feeling so much better.",
    // rating: 5,
    verified: true,
     image: "/reviews/Sarahb.jpg",
  },



  {
    id: 21,
    name: " Chris B ",
    initials: "CB",
    date: "2026-07-04",
    review:
      "Very professional and easy to talk to. The massage was exactly what I needed after a long week.",
    // rating: 5,
    verified: false,
     image: "/reviews/Chris.jpg",
  },


  {
    id: 22,
    name: " Kevin L ",
    initials: "KT",
    date: "2026-07-05",
    review:
      "I felt relaxed.",
    rating: 4,
    verified: false,
     image: "/reviews/Kevin.jpg",
  },
  {
    id: 23,
    name: " Brian J ",
    initials: "BJ",
    date: "2026-07-05",
    review:
      "Booked my session last minute and I’m glad I did. Everything was smooth.",
    rating: 5,
    verified: false,
     image: "/reviews/Brian.jpg",
  },
    
  {
    id: 24,
    name: "Aaron R",
    initials: "AR",
    date: "2026-07-23",
    review:
      "Really enjoyed my session. Brooke was very nice and made me feel comfortable.",
    rating: 5,
    verified: false,
     image: "/reviews/Aaron.jpg",
  },

  {
    id: 25,
    name: "Jason T",
    initials: "JT",
    date: "2026-08-01",
    review:
      "I booked pretty late but everything went smooth. definitely becoming a regular.",
    rating: 5,
    verified: false,
     image: "/reviews/Jason.jpg",
  },

  {
    id: 26,
    name: "Michelle ",
    initials: "MT",
    date: "2026-07-10",
    review:
      "She was friendly and professional. Had a really good experience overall.",
    rating: 5,
    verified: false,
     image: "/reviews/Michelle.jpg",
  },



  {
    id: 27,
    name: "Weston ",
    initials: "MT",
    date: "2026-07-20",
    review:
      "Relaxing and exactly what I needed, thank you Brooke.",
    rating: 5,
    verified: false,
     image: "/reviews/Weston.jpg",
  },

  {
    id: 28,
    name: "Christian ",
    initials: "MT",
    date: "2026-07-12",
    review:
      "I was a little nervous being a first timer but she honestly made it easy. Great experience.",
    rating: 5,
    verified: false,
    //  image: "/reviews/Weston.jpg",
  },


    
  {
    id: 29,
    name: "Robert Lewis ",
    initials: "RL",
    date: "2026-07-25",
    review:
      "Everything was easy from booking to the session. She’s really sweet and easy to talk to.",
    rating: 5,
    verified: false,
    //  image: "/reviews/Weston.jpg",
  },
  {
    id: 30,
    name: " Lizzy K",
    initials: "LK",
    date: "2026-07-4",
    review:
      " Had a great time. Very comfortable atmosphere and she was really nice. Will book again",
    rating: 5,
    verified: false,
     image: "/reviews/Lizzy.jpg",
  },


  {
    id: 31,
    name: "Charles",
    initials: "C",
    date: "2026-08-26",
    review:
      " Booked late on a whim and it still worked out perfectly. Brooke made the whole thing super chill.",
    rating: 5,
    verified: true,
     image: "/reviews/Charles.jpg",
  },

  


  {
    id: 32,
    name: " Megan M",
    initials: "MM",
    date: "2026-08-20",
    review:
      "First time trying something like this and she put me at ease right away. Booking was straightforward too.",
    rating: 5,
    verified: true,
     image: "/reviews/Megan.jpg",
  },

  {
    id: 33,
    name: "Oscar Juarez",
    initials: "OJ",
    date: "2026-08-18",
    review:
      " Smooth process from start to finish. Brooke’s genuine and easygoing — conversation just flowed. ",
    rating: 5,
    verified: false,
    //  image: "/reviews/Oscar.jpg",
  },

  {
    id: 34,
    name: " Joe L",
    initials: "JL",
    date: "2026-08-15",
    review:
      "Was a bit nervous going in but she was really welcoming.",
    rating: 5,
    verified: true,
    //  image: "/reviews/Lizzy.jpg",
  },




  {
    id: 35,
    name: " Edger Cooper",
    initials: "EC",
    date: "2026-08-22",
    review:
      " Definitely scheduling another one soon.",
    rating: 5,
    verified: true,
    //  image: "/reviews/Lizzy.jpg",
  },

  {
    id: 36,
    name: " Barbara",
    initials: "B",
    date: "2026-08-5",
    review:
      " Late booking but no issues at all. She’s sweet, professional, and just easy to be around. Solid session.",
    rating: 5,
    verified: false,
    //  image: "/reviews/Lizzy.jpg",
  },


  {
    id: 37,
    name: "Andrew Teyer",
    initials: "AT",
    date: "2026-08-10",
    review:
      " Really positive vibe from the start. Booking was quick and Brooke was friendly and made the whole thing relaxed. Looking forward to the next one.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​",
    rating: 5,
    verified: true,
     image: "/reviews/Andrew.jpg",
  },



];
