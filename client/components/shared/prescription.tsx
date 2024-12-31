export const Prescription: React.FC<{ isPlaying: boolean }> = ({
  isPlaying,
}) => {
  return (
    <section className="bg-white h-64 w-56 drop-shadow-xl rounded-lg flex flex-col border border-app-gray">
      <h1 className="text-base font-semibold border-b border-app-gray px-2 py-3">
        Patient Summary
      </h1>
      <ul className="grid grid-cols-2 gap-2 py-4 px-3 border-b border-app-gray">
        <li className="flex gap-x-2">
          <label className="text-sm font-medium">Name</label>
          <span className="bg-app-sky-blue w-28 h-4 rounded-sm"></span>
        </li>
        <li className="flex gap-x-2">
          <label className="text-sm font-medium">Age</label>
          <span className="bg-app-sky-blue w-28 h-4 rounded-sm"></span>
        </li>
        <li className="flex gap-x-2">
          <label className="text-sm font-medium">Weight</label>
          <span className="bg-app-sky-blue w-28 h-4 rounded-sm"></span>
        </li>
        <li className="flex gap-x-2">
          <label className="text-sm font-medium">Height</label>
          <span className="bg-app-sky-blue w-28 h-4 rounded-sm"></span>
        </li>
      </ul>
      {isPlaying && (
        <>
          <div
            className="flex flex-col px-2 mt-2 opacity-0 translate-y-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h1 className="text-sm font-medium">Chief Complaint</h1>
            <span className="text-xs font-light">
              Weakness in grip strength
            </span>
          </div>
          <div
            className="flex flex-col px-2 opacity-0 translate-y-4 animate-fade-in"
            style={{ animationDelay: "2s" }}
          >
            <h1 className="text-sm font-medium">Diagnosis</h1>
            <span className="text-xs font-light">Lack of calcium</span>
          </div>
          <div
            className="flex flex-col px-2 opacity-0 translate-y-4 animate-fade-in"
            style={{ animationDelay: "3s" }}
          >
            <h1 className="text-sm font-medium">Suggested Tests</h1>
            <span className="text-xs font-light">Blood test</span>
          </div>
        </>
      )}
    </section>
  );
};
