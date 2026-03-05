import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import chancellorPhoto from "@/assets/chancellor-photo.png";
import vcPhoto from "@/assets/vc-photo.jpg";
import registrarPhoto from "@/assets/registrar-photo2.png";

const officers = [
  {
    id: "chancellor",
    name: "Sri. Syed Abdul Nazeer",
    title: "Hon'ble Governor of AP & Chancellor",
    photo: chancellorPhoto,
    link: "/chancellor",
  },
  {
    id: "vc",
    name: "Prof. Kancharla Gangadhara Rao",
    title: "Vice-Chancellor (I/c)",
    photo: vcPhoto,
    link: "/vice-chancellor",
  },
  {
    id: "registrar",
    name: "Prof. G. Simhachalam, I/c",
    title: "Registrar",
    photo: registrarPhoto,
    link: "/registrar",
  },
];

const Administration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Administration</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officers.map((officer) => (
            <Link to={officer.link} key={officer.id} className="anu-card p-6 hover:shadow-lg transition-shadow text-center">
              <div className="w-40 h-48 bg-muted rounded-md overflow-hidden mx-auto mb-4">
                <img src={officer.photo} alt={officer.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-bold text-anu-maroon">{officer.name}</h2>
              <p className="text-sm text-primary font-medium">{officer.title}</p>
              <p className="text-xs text-muted-foreground mt-2">View Profile →</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Administration;
