import Hero from "@/components/hero/Hero";
import Courses from "@/components/courses/Courses";
import Teachers from "@/components/teachers/Teachers";
import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import Help from "@/components/help/Help";

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Courses />
      <Teachers />
      <About />
      <FAQ />
      <Help />
    </div>
  );
};

export default Home;
