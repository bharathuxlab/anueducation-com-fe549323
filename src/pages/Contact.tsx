import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="anu-page-hero">
        <div className="relative z-10">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", content: "Acharya Nagarjuna University, Nagarjuna Nagar, Guntur – 522510, Andhra Pradesh, India", color: "from-primary/10 to-primary/5" },
              { icon: Mail, title: "Email", content: "registrar@anueducation.in\nregistrar@acharya-nagarjuna-university.org", color: "from-accent/10 to-accent/5" },
              { icon: Clock, title: "Office Hours", content: "Monday – Saturday: 10:00 AM – 5:00 PM", color: "from-secondary/10 to-secondary/5" },
            ].map((item) => (
              <div key={item.title} className="anu-card p-6 flex gap-5 items-start">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="anu-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form className="space-y-5">
              {[
                { label: "Name", type: "text", placeholder: "Your Full Name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
                { label: "Subject", type: "text", placeholder: "Subject of your message" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-anu-maroon text-primary-foreground px-8 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
