import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Blog from "./sections/Blog";
// import Contact from "./sections/Contact";
import ScheduleCall from "./components/ScheduleCall";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Blog />
      {/* <Contact /> */}
      <ScheduleCall />
      <ContactForm />
    </>
  );
}

export default App;
