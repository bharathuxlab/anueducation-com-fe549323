import vcPhoto from "@/assets/vc-photo-new.png";
import { Quote } from "lucide-react";

const VCMessage = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="anu-section-title">Vice-Chancellor's Message</h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-primary to-secondary rounded-xl opacity-30" />
              <img
                src={vcPhoto}
                alt="Vice-Chancellor"
                className="relative w-56 h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <h3 className="mt-4 font-display font-bold text-foreground text-center text-lg">
              Prof. Kancharla Gangadhara Rao
            </h3>
            <p className="text-sm text-muted-foreground text-center font-medium">Vice-Chancellor (I/c)</p>
          </div>
          <div className="md:w-3/4 relative">
            <Quote size={48} className="absolute -top-2 -left-2 text-primary/10" />
            <div className="pl-8 md:pl-10 space-y-4">
              <p className="text-foreground leading-relaxed text-base md:text-lg italic">
                It is a matter of privilege to be steering Acharya Nagarjuna University with the academic impulse to establish everything in Truth — "Satye Sarvam Pratishitam." The word Truth is simple yet sublime. Finding and practicing truth is difficult. Truth is relative so it is illusive. But Shankaracharya avers "Aham Bhramam" — that is, truth is inherent in you.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Franz Kafka, the German philosophical writer, helps to identify the inherent truth as nothing but objective human conscience. Education is the best means to recognize the truth and which is our conscience. The object of Acharya Nagarjuna University is to illuminate the students and scholars to realize the truth in them to be conscious people who can perceive truth in the world around and build a society where "everything is established in truth."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VCMessage;
