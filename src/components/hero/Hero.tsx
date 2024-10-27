import { Button } from "@mui/material";

import starIcons from "@/assets/hero/star.svg";
import bgImg from "@/assets/hero/programmer.png";

const Hero = () => {
  return (
    <section className="hero relative">
      <div
        className="hero__content flex items-center md:items-start flex-col p-5 py-14 md:p-14 bg-[var(--primary)] rounded-3xl bg-right-top bg-no-repeat bg-cover md:bg-contain"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <p className="flex-start-center gap-2 brightness-150 md:brightness-100 text-[var(--secondary)] md:text-[var(--secondary-black)]">
          Zamonaviy IT o'quv markazi{" "}
          <img src={starIcons} alt="star" className="max-w-3" />
        </p>
        <h4 className="md:w-[25ch] brightness-150 md:brightness-100 text-[var(--secondary)] md:text-[--black] text-center md:text-left bent-underline mt-4 text-[1.4rem] md:text-[1.75rem] font-bold leading-[2rem] md:leading-[2.75rem]">
          Biz sizga{" "}
          <span className="text-[var(--secondary)] curved-text">
            zamonaviy kasbni
          </span>{" "}
          o'rganishga va ish boshlashingizga yordam beramiz
        </h4>
        <Button
          sx={{
            borderRadius: "1.2rem",
            backgroundColor: "var(--secondary)",
            padding: "1rem 2rem",
            textTransform: "none",
            marginTop: "3.5rem",
          }}
          variant="contained"
          className="hero_btn w-fit"
        >
          Kurslarni tanlash
        </Button>
      </div>
      <div className="hero__lines absolute -bottom-8 left-0 right-0 h-4 flex justify-end gap-4">
        <div className="hero__line w-8 h-1 bg-[var(--grey-2)] rounded-md"></div>
        <div className="hero__line w-8 h-1 bg-[var(--grey-2)] rounded-md"></div>
        <div className="hero__line w-40 h-1 bg-[var(--secondary)] rounded-md"></div>
      </div>
    </section>
  );
};

export default Hero;
