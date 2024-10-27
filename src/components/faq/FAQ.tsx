import AccordionMui from "../util/accordion/Accordion";

const FAQ = () => {
  return (
    <section className="faq mt-20">
      <h2 className="text-[var(--black)] text-[1.75rem] font-bold">
        Ko'p so'raladigan savollar
      </h2>
      <AccordionMui />
    </section>
  );
};

export default FAQ;
