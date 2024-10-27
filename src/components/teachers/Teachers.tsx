import teacherImg1 from "@/assets/teachers/teacher-1.png";
import teacherImg2 from "@/assets/teachers/teacher-2.png";
import teacherImg3 from "@/assets/teachers/teacher-3.png";
import teacherImg4 from "@/assets/teachers/teacher-4.png";
import teacherImg5 from "@/assets/teachers/teacher-5.png";
import teacherImg6 from "@/assets/teachers/teacher-6.png";
import teacherImg7 from "@/assets/teachers/teacher-7.png";

import programmerIcon from "@/assets/teachers/programmingIcon.svg";
import artIcon from "@/assets/teachers/artIcon.svg";
import marketingIcon from "@/assets/teachers/marketingIcon.svg";
import logisticIcon from "@/assets/teachers/logisticIcon.svg";
import editorIcon from "@/assets/teachers/editorIcon.svg";

let teachers = [
  {
    img: teacherImg1,
    name: "Alisherova Anvara",
    job: "Dasturlash ustozi",
  },
  {
    img: teacherImg2,
    name: "Antota Nargiza",
    job: "UX/UI ustozi",
  },
  {
    img: teacherImg3,
    name: "Jorayev Akbar",
    job: "Logistika ustozi",
  },
  {
    img: teacherImg4,
    name: "Mamaraimov Grichka",
    job: "Marketing ustozi",
  },
  {
    img: teacherImg5,
    name: "Zokir Malikov",
    job: "Videomontaj  ustozi",
  },
  {
    img: teacherImg6,
    name: "Anvara Xoliqova",
    job: "Dasturlash ustozi",
  },
  {
    img: teacherImg7,
    name: "Alisherova Anvara",
    job: "Dasturlash ustozi",
  },
];

let icons = [
  programmerIcon,
  artIcon,
  marketingIcon,
  logisticIcon,
  editorIcon,
  programmerIcon,
  programmerIcon,
];

const Teachers = () => {
  return (
    <section className="mt-20 teachers">
      <h2 className="text-[var(--black-)] text-[1.75rem] font-bold">
        Bizning ustozlarimiz
      </h2>
      <div className="teachers__list snap-x mt-14 flex overflow-x-auto sm:overflow-x-hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="min-w-60 snap-center teachers__item flex-center flex-col"
          >
            <img
              src={teacher.img}
              alt="teacher"
              className="max-w-52 lg:max-w-60"
            />
            <div className="teacher__item--info text-center mt-8 grid gap-1 sm:gap-3">
              <h3 className="text-[var(--black-)] text-xl lg:text-2xl font-semibold">
                {teacher.name}
              </h3>
              <div className="teachers__item--info-job flex-center gap-2">
                <img
                  src={icons[index]}
                  alt="programming icon icon"
                  className="max-w-7"
                />
                <p className="text-base lg:text-xl font-semibold">
                  Dasturlash ustozi
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
