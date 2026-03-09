import { Clock, Mail, Phone, MapPin } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-gradient-to-r from-anu-maroon to-primary flex items-center gap-4 px-6 py-5">
        <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <Clock size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-primary-foreground uppercase tracking-wider">Opening Hours</h3>
          <p className="text-sm text-primary-foreground/80 mt-0.5">Mon – Sat, 10:00 AM – 5:00 PM</p>
        </div>
      </div>
      <div className="bg-anu-dark flex items-center gap-4 px-6 py-5">
        <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <Mail size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-primary-foreground uppercase tracking-wider">Email Us</h3>
          <p className="text-sm text-primary-foreground/80 mt-0.5">registrar@anueducation.in</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-anu-dark to-anu-nav flex items-center gap-4 px-6 py-5">
        <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
          <MapPin size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-display font-bold text-sm text-primary-foreground uppercase tracking-wider">Campus</h3>
          <p className="text-sm text-primary-foreground/80 mt-0.5">NH-16, Nagarjuna Nagar, Guntur</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
