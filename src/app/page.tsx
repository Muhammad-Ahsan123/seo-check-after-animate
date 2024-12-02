'use client';

import Head from 'next/head';
import Navbar from "./Sections/Navbar";
import { MainBanner } from "./Sections/MainBanner";
import TechnologyInnovation from "./Sections/TechnologyInnovation";
import Products from "./Sections/Products";
import Services from "./Sections/Service";
import MarqueTab from "./Sections/MarqueTab";
import ContactUs from "./Sections/ContactUs";
import Footer from "./Sections/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <>
      <Head>
        {/* Page-Specific Meta Tags */}
        <title>Syslab.ai - AI Solutions</title>
        <meta
          name="description"
          content="Syslab.ai provides cutting-edge AI solutions, web interfaces, and cross-platform mobile apps."
        />
        <meta property="og:title" content="Syslab.ai - Innovative AI Solutions" />
        <meta
          property="og:description"
          content="Explore the future with Syslab.ai's AI-driven solutions for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/syslab-banner.jpg" />
        <meta property="og:url" content="https://new-syslab.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </Head>
      <Navbar />

      <div className="w-full overflow-hidden rounded-md">
        <ToastContainer
          position="top-center"
          style={{
            top: '78px',
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Adjust to precisely center it
            width: '100%', // For mobile view, take full width
            maxWidth: '300px',
            borderRadius: '6px'
          }}
          className="absolute z-[300000]"
        />
      </div>

      <MainBanner />
      <MarqueTab />
      <TechnologyInnovation />
      <Products />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
