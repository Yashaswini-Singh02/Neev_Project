import { Activity, Blocks, MessagesSquare, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const FeatureCard: React.FC = () => {
  return (
    <section className="py-10 px-40 flex justify-between">
      <Card className="w-80 h-60 border border-app-gray bg-white text-app-crayola">
        <CardHeader>
          <CardTitle className="border-b p-4 border-app-gray">
            Transcribe Conversations
          </CardTitle>
        </CardHeader>

        <CardContent className="py-2 text-base flex flex-col items-center justify-center relative overflow-hidden">
          {/* White Background with Icons and Spiral */}
          <div className=" text-app-crayola rounded-full p-6 relative z-10 flex items-center justify-center overflow-hidden">
            {/* Concentric Circles (Spiral) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-app-royal-blue animate-coil opacity-80"></div>
            </div>

            <MessagesSquare />
          </div>

          <p className="mt-4 text-center z-10">
            Record and summarise doctor-patient interactions with speaker
            diarisation
          </p>
        </CardContent>
      </Card>

      <Card className="w-80 h-60 border border-app-gray bg-white text-app-crayola">
        <CardHeader>
          <CardTitle className="border-b p-4 border-app-gray">
            Empower Patients
          </CardTitle>
        </CardHeader>
        <CardContent className="py-2 text-base flex flex-col items-center justify-center relative overflow-hidden">
          {/* Shield Icon */}
          <div className="text-app-crayola rounded-full p-6 relative z-10 flex items-center justify-center">
            <ShieldCheck />
          </div>

          {/* Medical Waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Top Wave */}
            <div className="absolute top-1.5 w-12 h-10 animate-wave-move flex">
              <Activity size={20} className="text-app-dark-blue" />
              <Activity size={20} className="text-app-crayola" />
              <Activity size={20} className="text-app-crayola opacity-70" />
            </div>
            {/* Bottom Wave */}
            <div className="absolute bottom-12 w-12 h-10 animate-wave-move-reverse flex">
              <Activity size={20} className="text-app-crayola" />
              <Activity size={20} className="text-app-crayola opacity-70" />
              <Activity size={20} className="text-app-dark-blue" />
            </div>
          </div>

          <p className="mt-4 text-center z-10">
            Share Patient Visit Summaries (PVS) for continuity in care.
          </p>
        </CardContent>
      </Card>

      <Card className="w-80 h-60 border border-app-gray bg-white text-app-crayola">
        <CardHeader>
          <CardTitle className="border-b p-4 border-app-gray">
            Integrate Seamlessly
          </CardTitle>
        </CardHeader>
        <CardContent className="py-2 text-base flex flex-col items-center justify-center relative overflow-hidden">
          {/* Shield Icon */}
          <div className=" text-app-crayola rounded-full p-6 relative z-10 flex items-center justify-center overflow-hidden">
            {/* Concentric Circles (Spiral) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-app-royal-blue animate-coil opacity-80"></div>
            </div>

            <Blocks />
          </div>

          <p className="mt-4 text-center z-10">
            Send summaries directly to EMR.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
