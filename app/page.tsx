import Image from "next/image";

const services = [
  "Diagnosing and Treating Illnesses",
  "Prescribing Medication",
  "Health Screenings and Preventive Care",
  "Patient Education",
  "Coordinating Referrals",
  "Managing Chronic Conditions",
  "Conducting Physical Examinations",
  "Initial X-Ray Interpretation & Follow-up care",
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="flex justify-between pt-4 md:py-4 px-6 bg-blue-500">
        <div className="flex gap-3 items-center">
          <div className="h-12 w-12">
            <Image
              src="/logo.jpeg"
              alt="Doctor Logo"
              className="rounded-md"
              width={100}
              height={100}
              priority
            />
          </div>
          <span className="text-2xl font-roboto font-bold text-white">
            HEALTH PLUS
          </span>
        </div>
      </header>

      {/* Main */}
      <main>
        <section className="flex justify-center py-10 md:py-24 px-4 sm:px-0 bg-gradient-to-t from-[#5f16ea] to-blue-500">
          <div className="container flex flex-col gap-4 md:gap-8 text-center">
            <h1 className="text-xl font-roboto font-bold text-white">
              WELCOME TO HEALTH PLUS
            </h1>
            <h2 className="text-5xl font-roboto font-bold text-white">
              DOCTOR&apos;S HUB <br className="md:hidden" /> &{" "}
              <br className="md:hidden" /> PHARMACY
            </h2>
            <div className="flex justify-center">
              <a
                href="tel:+8801324404552"
                className="text-xl font-inter text-white py-3 px-8 border border-white rounded-md"
              >
                +8801324404552
              </a>
            </div>
            <div className="text-base font-inter text-white">
              House: 408/3, Road: 07 (West),
              <br className="sm:hidden" /> DOHS Baridhara,
              <br />
              Dhaka Cantonment, Dhaka - 1206
            </div>
          </div>
        </section>

        <section className="flex justify-center py-10 md:py-24 px-4 sm:px-0">
          <div className="container flex flex-col md:flex-row gap-4 md:gap-24 w-fit items-center">
            <div className="flex justify-end w-60 h-60">
              <Image
                src="/doctor.jpeg"
                alt="Doctor Image"
                className="rounded-md shadow-[0_0_5px_rgba(0,0,0,0.8)]"
                width={240}
                height={240}
                priority
              />
            </div>
            <div className="flex flex-col text-center md:text-left gap-1">
              <h3 className="text-4xl font-roboto font-semibold">
                DR MAHMUDA DEWAN
              </h3>
              <p className="text-xl font-semibold font-inter">
                GENERAL PRACTITIONER
              </p>
              <p className="text-lg font-inter">MBBS (DU), CCD (BIRDEM)</p>
              <p className="text-lg font-inter">
                TRAINING ON MEDICINE & DIABETOLOGY
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center py-10 gap-8 md:py-24 px-4 sm:px-0 bg-gradient-to-b from-[#5f16ea] to-blue-500 text-center">
          <div className="container flex flex-col gap-4 md:gap-8">
            <h3 className="text-4xl font-roboto font-bold text-white">
              TYPES OF CARE
            </h3>
            <div className="container grid grid-cols-2 gap-4 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-md border-2 font-inter uppercase border-white p-3 text-white"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex justify-center py-2 md:py-4 bg-black">
          <p className="text-sm font-roboto font-semibold text-white">
            Made By Aquibur Rahman Khan
          </p>
        </section>
      </main>
    </>
  );
}
