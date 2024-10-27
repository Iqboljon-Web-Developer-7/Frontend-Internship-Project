import aboutImg1 from "@/assets/about/about-1.png";
import aboutImg2 from "@/assets/about/about-2.png";
import likeIcon from "@/assets/about/likeIcon.svg";
import starIcon from "@/assets/about/starIcon.svg";

const About = () => {
  return (
    <section className="about mt-20">
      <h2 className="text-[var(--black-)] text-[1.75rem] font-bold">
        Biz orgatadigan kurslar
      </h2>
      <div className="about-container flex md:gap-6 flex-col md:flex-row">
        <div className="about-list mt-8 flex flex-col gap-6 lg:max-w-[29rem]">
          <div className="about-item p-8 bg-[var(--beige)] rounded-3xl">
            <img src={likeIcon} alt="like icon" className="max-w-8" />
            <p className="text-[1.125rem] sm:text-[1.375rem] mt-6 text-[var(--black)] lg:w-5/6">
              Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
              odamlar hayotida o'sish.
            </p>
          </div>
          <div
            className="about-item min-h-96 bg-cover bg-no-repeat rounded-3xl"
            style={{ backgroundImage: `url(${aboutImg1})` }}
          ></div>
        </div>
        <div className="about-list mt-8 flex flex-col md:flex-col-reverse gap-6">
          <div className="about-item p-8 bg-[var(--blue)] rounded-3xl">
            <img src={starIcon} alt="like icon" className="max-w-8" />
            <p className="text-[1.125rem] sm:text-[1.375rem] mt-6 text-[var(--black)] lg:w-4/5">
              Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya,
              video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.
            </p>
          </div>
          <div
            className="about-item min-h-96 h-full bg-cover bg-no-repeat rounded-3xl"
            style={{ backgroundImage: `url(${aboutImg2})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
