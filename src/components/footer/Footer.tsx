import logo from "@/assets/logos/website logo.svg";

const Footer = () => {
  return (
    <footer className="footer mt-20 bg-[var(--primary)] text-[.75rem] text-center md:text-left">
      <div className="wrapper py-8">
        <div className="footer__top flex-between-center  flex-col md:flex-row">
          <img src={logo} alt="website logo" className="max-w-28" />
          <div className="footer__top--content sm:flex sm:flex-between-center gap-6 md:gap-16">
            <div className="footer__top--content-item grid gap-3">
              <p className="text-[var(--black)] opacity-40">Manzil</p>
              <p className="max-w-60 text-center">
                Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B
              </p>
            </div>
            <div className="footer__top--content-item grid gap-3">
              <p className="text-[var(--black)] opacity-40">Yordam</p>
              <p>+998 91 7775411</p>
            </div>
            <div className="footer__top--content-item grid gap-3">
              <p className="text-[var(--black)] opacity-40">Pochta</p>
              <p>Info@farobiy.com</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom mt-7 flex-between-center flex-wrap justify-center md:justify-between gap-4">
          <p className="max-w-[16.5rem] font-poppins tracking-normal">
            Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
            orqali qiymat sotamiz.
          </p>
          <div className="footer__bottom--links flex-center flex-wrap gap-6 text-[var(--black)] tracking-wide">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              Telegram
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper pt-9 pb-14 border-t gap-3">
        <p>
          Copyright © 2024 Farobiy. All rights reserved.{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
