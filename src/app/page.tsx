import Footer from "./components/footer";
import Header from "./components/header";
import About from "./sections/about";
import Features from "./sections/features";
import Getstarted from "./sections/getstarted";
import How from "./sections/how";

export default function Home() {
  return (
      <div
        id="page-wrapper"
        className="bg-black origin-top-left transition-transform overflow-hidden"
      >
        <Header />
        <About />
        <How />
        <Features />
        <Getstarted />
        <Footer />
      </div>
  );
}
