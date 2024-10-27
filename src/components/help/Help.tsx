import { useState } from "react";
import iceBergImg from "@/assets/help/iceberg.svg";

const Help = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isButtonDisabled = !(
    name.length >= 4 &&
    phone.length >= 4 &&
    email.length >= 4
  );

  return (
    <section className="help mt-20 px-8 md:px-14 bg-[var(--primary)] rounded-[2.5rem] grid md:grid-cols-2 lg:grid-cols-[5fr_8fr] md:gap-[11%]">
      <div
        className="help__content py-10 md:py-16 bg-contain bg-no-repeat bg-right-bottom md:bg-center"
        style={{ backgroundImage: `url(${iceBergImg})` }}
      >
        <h2 className="text-[var(--black)] text-[1.75rem] font-bold">
          Tanlovda yordam beramiz!
        </h2>
        <p className="mt-4  sm:text-[var(--black)]">
          Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
          raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
        </p>
      </div>
      <div className="help__form py-10 md:py-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName("");
            setPhone("");
            setEmail("");
          }}
          className="grid grid-cols-2 gap-6 w-full text-sm"
        >
          <input
            type="text"
            placeholder="Ismingiz"
            className="col-span-2 py-5 px-6 rounded-3xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefon nomeringiz"
            className="col-span-2 sm:col-span-1 py-5 px-6 rounded-3xl"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Pochtangiz"
            className="col-span-2 sm:col-span-1 py-5 px-6 rounded-3xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            disabled={isButtonDisabled}
            className="disabled:opacity-50 w-fit mt-4 md:mt-8 lg:mt-12 py-4 px-9 bg-[var(--secondary)] rounded-3xl text-[var(--white)]"
          >
            Yuborish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Help;
