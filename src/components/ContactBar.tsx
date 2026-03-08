import { Clock, Mail } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-anu-maroon text-primary-foreground flex items-center gap-3 px-6 py-4">
        <Clock size={28} className="shrink-0 text-anu-gold" />
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide">Opening Hours</h3>
          <p className="text-sm opacity-90">Mon - Sat, 10.00 - 17.00</p>
        </div>
      </div>
      <div className="bg-anu-dark text-primary-foreground flex items-center gap-3 px-6 py-4">
        <Mail size={28} className="shrink-0 text-anu-gold" />
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wide">Email Us</h3>
          <p className="text-sm opacity-90">registrar@anueducation.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
