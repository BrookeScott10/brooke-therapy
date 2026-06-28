"use client";

import { useEffect, useMemo, useState } from "react";
import { Star, CheckCircle, Filter, ArrowDownUp, X } from "lucide-react";
import ReviewForm from "./reviewForm";
import BookingModal from "../booking/booking-modal";


type Review = {
  id: number;
  name: string;
  initials: string;
  date: string; // YYYY-MM-DD
//   therapist: string;
  review: string;
  rating: number;
  verified: boolean;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Teresa P",
    initials: "T",
    date: "2025-11-16",
    review: "Great therapist!",
    rating: 5,
    verified: true,
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
  },
  {
    id: 5,
    name: "Melissa R",
    initials: "M",
    date: "2026-06-10",
    review: "Amazing experience from start to finish. I left feeling refreshed.",
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
    date: "2026-01-31",
    review:
      "I was looking for a relaxing massage after a stressful week, and Brooke exceeded my expectations. She was kind, professional, and made me feel completely comfortable. I left feeling refreshed and renewed.",
    rating: 5,
    verified: false,
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
];



export default function ReviewsSection() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [showReviewModal, setShowReviewModal] = useState(false);
const [isBookingOpen, setIsBookingOpen] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [visibleCount, setVisibleCount] = useState(3);


useEffect(() => {
  setVisibleCount(3);
}, [filter, sort]);

  const filteredReviews = useMemo(() => {
    let data = [...reviews];

    switch (filter) {
      case "verified":
        data = data.filter((r) => r.verified);
        break;

      case "5star":
        data = data.filter((r) => r.rating === 5);
        break;

      case "4star":
        data = data.filter((r) => r.rating === 4);
        break;

//      case "alexandria":
//   // data = data.filter((r) =>
//   //   r.therapist?.toLowerCase().includes("alexandria")
//   // );
//   break;

// case "brooke":
//   // data = data.filter((r) =>
//   //   r.therapist?.toLowerCase().includes("brooke")
//   // );
//   break;

      default:
        break;
    }

    switch (sort) {
      case "oldest":
        data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        );
        break;

      case "highest":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "lowest":
        data.sort((a, b) => a.rating - b.rating);
        break;

      default:
        data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
    }

    return data;
  }, [filter, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Heading */}

      <h2 className="mb-5 text-3xl font-semibold text-gray-900">Reviews</h2>

      {/* Write Review */}

      <button
        onClick={() => setShowReviewModal(true)}
        className="mb-5 w-full rounded-md bg-spa-orange py-3.5 text-lg font-medium text-white transition hover:bg-spa-orange/70"
      >
        Write a review
      </button>

      {/* Filter + Sort */}

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-12 w-full appearance-none rounded-md border border-gray-300 bg-white pl-11 pr-4 text-gray-700 outline-none focus:border-red-400"
          >
            <option value="all">All Reviews</option>
            {/* <option value="verified">Verified Reviews</option> */}
            <option value="5star">5 Stars</option>
            <option value="4star">4 Stars</option>
            {/* <option value="alexandria">Alexandria Brush</option>
            <option value="brooke">Brooke Lerna</option> */}
          </select>
        </div>

        <div className="relative flex-1">
          <ArrowDownUp
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 w-full appearance-none rounded-md border border-gray-300 bg-white pl-11 pr-4 text-gray-700 outline-none focus:border-red-400"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredReviews.slice(0, visibleCount).map((review) => (
          <div
            key={review.id}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Top */}

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d6b63] text-lg font-semibold text-white">
                {review.initials}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">{review.name}</h3>

                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <Star
                        key={index}
                        size={15}
                        className="fill-[#f4c542] text-[#f4c542]"
                      />
                    ))}
                  </div>

                  {review.verified && (
                    <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                      <CheckCircle size={16} fill="currentColor" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Therapist */}

            <h4 className="mt-5 text-xl font-medium text-gray-900">
              {/* {review.therapist} */}
            </h4>

            {/* Review */}

            <p className="mt-2 text-gray-600 leading-7">{review.review}</p>
          </div>
        ))}
      </div>


      {visibleCount < filteredReviews.length && (
  <div className="mt-8 flex justify-center">
    <button
      onClick={() => setVisibleCount((prev) => prev + 6)}
      className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      Load more reviews
    </button>
  </div>
)}

      {/* Book Now Button */}

      <div className="mt-10 flex justify-center">
        <button
           onClick={() => setIsBookingOpen(true)}
          className="w-full rounded-md bg-spa-orange py-4 text-lg font-semibold text-white transition hover:bg-spa-orange/80 md:w-[420px]"
        >
          Book Now
        </button>
      </div>

      {/* Sticky Mobile Button */}
{/* 
      <div className=" border-t bg-white p-4 shadow-xl md:hidden">
        <button
           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full rounded-md bg-spa-orange py-4 text-lg font-semibold text-white"
        >
          Book Now
        </button>
      </div> */}

     {showReviewModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
    <div className="relative w-full max-w-lg rounded-xl bg-white shadow-2xl">
      <button
        onClick={() => setShowReviewModal(false)}
        className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
      >
        <X size={22} />
      </button>

      <ReviewForm onClose={() => setShowReviewModal(false)} />
    </div>
  </div>
)}

<BookingModal
  isOpen={isBookingOpen}
  onClose={() => setIsBookingOpen(false)}
/>
  
    </section>
  );
}
