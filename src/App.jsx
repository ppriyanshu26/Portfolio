import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import { Toaster } from "react-hot-toast";   // ⬅️ Import Toaster

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#071524]">

      {/* Blurred Background Effect */}
      <BlurBlob position={{ top: '22%', left: '16%' }} size={{ width: '36%', height: '42%' }} color="rgba(245,158,11,0.85)" />
      <BlurBlob position={{ top: '72%', left: '82%' }} size={{ width: '34%', height: '38%' }} color="rgba(251,191,36,0.85)" />
      <div className="pointer-events-none absolute -top-24 left-[8%] h-64 w-64 bg-aurora bg-[#f59e0b]" />
      <div className="pointer-events-none absolute top-[26%] right-[14%] h-72 w-72 bg-aurora bg-[#fbbf24]" style={{ animationDelay: '1.4s' }} />
      <div className="pointer-events-none absolute bottom-[8%] left-[22%] h-64 w-64 bg-aurora bg-[#fcd34d]" style={{ animationDelay: '2.2s' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(251,191,36,0.12),transparent_36%),radial-gradient(circle_at_78%_30%,rgba(245,158,11,0.12),transparent_34%),radial-gradient(circle_at_52%_78%,rgba(252,211,77,0.11),transparent_40%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.01)_60%,transparent)]"></div>
      
      {/* Main Content */}
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      {/* Toast Notification System */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid rgba(20,184,166,0.35)',
            background: '#0d2237',
            color: '#dce8f6',
          },
        }}
      />
    </div>
  );
};

export default App;
