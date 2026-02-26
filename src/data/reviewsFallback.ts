export type FallbackReview = {
  id: string;
  source: "Google" | "Zillow";
  author: string;
  rating: number;
  date: string;
  text: string;
};

export const REVIEWS_FALLBACK: FallbackReview[] = [
  {
    id: "google-1",
    source: "Google",
    author: "Maria S.",
    rating: 5,
    date: "2026-01-18",
    text: "Vivian explained each loan option clearly and helped us choose a payment that fit our monthly budget."
  },
  {
    id: "google-2",
    source: "Google",
    author: "David R.",
    rating: 5,
    date: "2025-12-09",
    text: "The team stayed organized from preapproval to closing. Communication was consistent and easy to follow."
  },
  {
    id: "google-3",
    source: "Google",
    author: "Ashley M.",
    rating: 5,
    date: "2025-11-22",
    text: "They gave direct answers, realistic expectations, and no confusion during underwriting."
  },
  {
    id: "zillow-1",
    source: "Zillow",
    author: "Jared T.",
    rating: 5,
    date: "2026-01-03",
    text: "Fast response times and strong guidance on loan structure. We closed on schedule with no surprises."
  },
  {
    id: "zillow-2",
    source: "Zillow",
    author: "Monica P.",
    rating: 5,
    date: "2025-10-27",
    text: "I appreciated how they reviewed total monthly cost instead of focusing on rate alone."
  },
  {
    id: "zillow-3",
    source: "Zillow",
    author: "Kevin L.",
    rating: 5,
    date: "2025-09-14",
    text: "Professional process, clear milestone updates, and practical advice for our refinance timeline."
  }
];
