import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import TrafficLight from "./components/TrafficLight";
import VideoSection from "./components/VideoSection";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Features />
        <TrafficLight />
        <VideoSection />
        <AboutUs />
      </main>
    </>
  );
}
