export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full mx-auto flex flex-col items-center justify-center text-center tracking-wide gap-y-2">
      <h1 className="text-5xl max-w-2xl ">
        Connecting Patients and Providers Through{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#607aff] via-[#2463eb] to-[#2348b0]">
          Precision
        </span>
      </h1>
      <p className="max-w-xl text-xl">
        Making healthcare simple, smart, and more human centric by reducing
        admin work, saving time, and enabling doctors to focus on what truly
        matters - Patients
      </p>
    </section>
  );
};
