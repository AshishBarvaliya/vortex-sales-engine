import { PlanCardProps } from "../Components/Body/PlanCard";
import { ReviewCardProps } from "../Components/Body/ReviewCard";

export const cards: PlanCardProps[] = [
  {
    id: "1",
    title: "Free Plan",
    rate: "Free",
    features: [
      "Adipiscing arcu facilisis in et.",
      "Adipiscing arcu facilisis in et.",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    id: "2",
    title: "Standard Plan",
    rate: "$9 / mo",
    features: [
      "Adipiscing arcu facilisis in et.",
      "Adipiscing arcu facilisis in et.",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },
  {
    id: "3",
    title: "Premium Plan",
    rate: "$12 / mo",
    features: [
      "Adipiscing arcu facilisis in et.",
      "Adipiscing arcu facilisis in et.",
      "No Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
];

export const reviews: ReviewCardProps[] = [
  {
    image: "https://www.fillmurray.com/100/100",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "5",
    message: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s”.`,
  },
  {
    image: "https://www.fillmurray.com/100/100",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4",
    message: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”.`,
  },
  {
    image: "https://www.fillmurray.com/100/100",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "5",
    message: `“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”.`,
  },
];

export const footerDetails = [
  {
    title: "Product",
    subtitles: ["Download", "Pricing", "Locations", "Server", "Countries"],
  },
  {
    title: "Engage",
    subtitles: ["Download", "Pricing", "Locations", "Server", "Countries"],
  },
  {
    title: "Earn Money",
    subtitles: ["Download", "Become Partner"],
  },
];
