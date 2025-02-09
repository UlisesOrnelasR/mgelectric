import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Working from "./sections/Working";

export default function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Working />
        <Testimonials />
        <Contact />
        <Footer />
      </I18nextProvider>
    </>

  )
}