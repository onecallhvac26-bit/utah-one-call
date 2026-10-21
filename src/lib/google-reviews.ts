export type GoogleReview = {
  id: string;
  authorName: string;
  rating: 5;
  text: string;
  relativePublishTime: string;
};

export type GoogleReviewsData = {
  rating: 5;
  totalReviewCount: number;
  mapsUrl: string;
  writeReviewUrl: string;
  reviews: readonly GoogleReview[];
};

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=One%20Call%20Heating%20%26%20Air%20Brigham%20City%20UT";

export const MANUAL_GOOGLE_REVIEWS = [
  {
    id: "amy-ogilvie",
    authorName: "Amy Ogilvie",
    rating: 5,
    relativePublishTime: "a week ago",
    text: "Murphy was so helpful in helping us get our air conditioner fixed. He was able to fix it on a Saturday but saved us from an extremely hot weekend. Thank you so much! We will definitely be calling again.",
  },
  {
    id: "brady-mcmahon",
    authorName: "Brady McMahon",
    rating: 5,
    relativePublishTime: "a week ago",
    text: "I was recommended to call Murphy, and told that help would take care of me. He did just that! He assessed my entire AC system and addressed everything that was needed. Very professional, informative and friendly.",
  },
  {
    id: "mitch-scorsone",
    authorName: "Mitch Scorsone",
    rating: 5,
    relativePublishTime: "a week ago",
    text: "Murphy was our technician, he was very polite and helpful. He allowed me to look over his shoulder while he worked, he simply replaced the broken part, did not try to upsell me, and looked over the whole unit to make sure it was in proper condition. I would call them again if there was a need.",
  },
  {
    id: "becca-curran",
    authorName: "Becca Curran",
    rating: 5,
    relativePublishTime: "3 weeks ago",
    text: "Highly recommend! Murphy was responsive, quick and thorough!",
  },
  {
    id: "janica-johnson",
    authorName: "Janica Johnson",
    rating: 5,
    relativePublishTime: "3 weeks ago",
    text: "We had an excellent experience with One Call Heating and Air! Murphy installed a brand-new heating system in our cabin, including all new ductwork and venting, and completed the entire job in less than two days.\n\nThe quality of his workmanship was outstanding, and his attention to detail gave us confidence that everything was done right. On top of that, his pricing was unbelievably fair, especially for the amount of work involved.\n\nMurphy was professional, knowledgeable, efficient, and easy to work with from start to finish. If you’re looking for an honest HVAC company that provides top-quality work at a great price, I highly recommend One Call Heating and Air. We’ll definitely be using them again for any future HVAC needs!",
  },
  {
    id: "jose-tapia",
    authorName: "Jose Tapia",
    rating: 5,
    relativePublishTime: "2 months ago",
    text: "It’s hard to find HVAC companies you can truly trust, but Jesse and his team made the whole process stress free from start to finish. They showed up on time, communicated well, and treated my home with respect. I highly recommend One Call Heating and Air to anyone looking for reliable, knowledgeable, and dependable HVAC service. 5 stars all the way!",
  },
] as const satisfies readonly GoogleReview[];

export const GOOGLE_REVIEWS_DATA: GoogleReviewsData = {
  rating: 5,
  totalReviewCount: 33,
  mapsUrl: GOOGLE_MAPS_URL,
  writeReviewUrl: GOOGLE_MAPS_URL,
  reviews: MANUAL_GOOGLE_REVIEWS,
};
