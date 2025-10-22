import Footer from "./components/footer";
import Header from "./components/header";
import About from "./sections/about";
import Features from "./sections/features";
import Getstarted from "./sections/getstarted";
import How from "./sections/how";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Boost your vocabulary with Lexykapp! Learn French, Spanish, and English words through personalized flashcards. Set goals, track progress, and master words that matter to you.",
  openGraph: {
    title: "Lexykapp - Learn French, Spanish & English Vocabulary",
    description: "Master new words with personalized flashcards. Track your progress and achieve your language learning goals.",
    url: "https://www.lexykapp.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden"
    >
      <Header />
      <About />
      <How />
      <div className="bg-gradient-to-b from-black via-grad2col1 via-grad2col2 to-grad2col3 w-full">
        <Features />
        <Getstarted />
      </div>
      <Footer />
    </div>
  );
}
