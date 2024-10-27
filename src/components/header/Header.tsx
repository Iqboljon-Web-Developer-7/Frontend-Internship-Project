import SelectMUI from "../util/Select/Select";
import logo from "@/assets/logos/website logo.svg";
import bookIcon from "@/assets/header/bookIcon.svg";
import bookIcon2 from "@/assets/header/bookIcon2.svg";
import phoneIcon from "@/assets/header/phoneIcon.svg";
import phoneIcon2 from "@/assets/header/phoneIcon2.svg";
import MobileHeader from "../util/mobileHeader/MobileHeader";

const Header = () => {
  return (
    <header className="header py-3 lg:py-7 flex-between-center wrapper">
      <div className="header__logo-courses flex-center gap-3 sm:gap-7">
        <img src={logo} alt="logo" className="w-full max-w-20 md:max-w-28" />
        <p className="group flex-center gap-2 py-3  md:py-4 px-4 md:px-7 rounded-2xl text-[.75rem] font-semibold text-[var(--secondary)] bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-300 cursor-pointer">
          Kurslar{" "}
          <img
            src={bookIcon}
            alt="book icon"
            className="max-w-4 group-hover:hidden"
          />
          <img
            src={bookIcon2}
            alt="book icon"
            className="max-w-4 hidden group-hover:block"
          />
        </p>
      </div>
      <div className="header__links-buttons hidden lg:flex flex-center gap-10">
        <div className="links flex-center gap-10">
          <a href="#teachers">Bizning ustozlarimiz</a>
          <a href="#about">Biz haqimizda</a>
        </div>
        <div className="buttons flex-center gap-6">
          <SelectMUI />
          <p className="group flex-center gap-2 py-4 px-7 rounded-2xl text-[.75rem] font-semibold text-[var(--secondary)] bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-300 cursor-pointer">
            <img
              src={phoneIcon}
              alt="book icon"
              className="max-w-4 group-hover:hidden"
            />
            <img
              src={phoneIcon2}
              alt="book icon"
              className="max-w-4 hidden group-hover:block"
            />{" "}
            +998 91 7775411
          </p>
        </div>
      </div>
      <div className="mobile-header flex-center gap-0 md:gap-4 lg:hidden">
        <SelectMUI />
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
