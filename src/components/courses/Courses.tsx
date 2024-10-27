import EastIcon from "@mui/icons-material/East";

import courseImg1 from "@/assets/courses/course-1.png";
import courseImg2 from "@/assets/courses/course-2.png";
import courseImg3 from "@/assets/courses/course-3.png";
import courseImg4 from "@/assets/courses/course-4.png";
import courseImg5 from "@/assets/courses/course-5.png";
import courseImg6 from "@/assets/courses/soon.svg";

const courses = [
  {
    img: courseImg1,
    title: "Dasturlash",
    style: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
  {
    img: courseImg2,
    title: "Dizayn",
    style: "col-span-12 sm:col-span-6 lg:col-span-7",
  },
  {
    img: courseImg3,
    title: "Logistika broketligi",
    style: "col-span-12 sm:col-span-6 lg:col-span-7",
  },
  {
    img: courseImg4,
    title: "Videomontaj va maxsus effektlar",
    style: "col-span-12 sm:col-span-6 lg:col-span-5",
  },
];

const Courses = () => {
  return (
    <section className="courses mt-20">
      <h2 className="text-[var(--black-)] text-[1.75rem] font-bold">
        Biz orgatadigan kurslar
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="courses__container flex-grow grid grid-cols-12 gap-6">
          {courses.map((item) => (
            <div
              className={`courses__item h-72 rounded-3xl ${item.style} relative overflow-hidden bg-cover bg-no-repeat flex-bottom flex flex-col items-start justify-end gap-5 p-8`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <h3 className="courses__item-title text-2xl font-bold text-[var(--white)] z-10">
                {item.title}
              </h3>
              <button className="flex gap-2 text-[var(--white)] bg-[var(--secondary)] px-6 py-3 rounded-xl z-10">
                Batafsil <EastIcon />
              </button>
              <div className="layer absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
        <div className="courses__sidebar min-w-72 sm:h-64 lg:h-auto flex flex-col sm:flex-row lg:flex-col gap-6">
          <div
            className="courses__item h-72 sm:h-auto col-span-5 flex-grow rounded-3xl relative overflow-hidden bg-cover bg-no-repeat bg-center flex-bottom flex flex-col items-start justify-end gap-5 p-8"
            style={{ backgroundImage: `url(${courseImg5})` }}
          >
            <h3 className="courses__item-title text-2xl font-bold text-[var(--white)] z-10">
              Dasturlash
            </h3>
            <button className="flex gap-2 text-[var(--white)] bg-[var(--secondary)] px-6 py-3 rounded-xl z-10">
              Batafsil <EastIcon />
            </button>
            <div className="layer absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          </div>
          <div
            className="courses__item h-80 sm:h-auto col-span-5 flex-grow rounded-3xl relative overflow-hidden bg-cover bg-no-repeat flex-bottom flex flex-col items-start justify-end gap-5 p-8"
            style={{ backgroundImage: `url(${courseImg6})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
