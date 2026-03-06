import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.png";
import gallery10 from "@/assets/gallery-10.png";

const images = [
  { src: gallery1, alt: "Registrar office event with students" },
  { src: gallery2, alt: "Vice-Chancellor meeting with students" },
  { src: gallery3, alt: "Student interaction at Registrar office" },
  { src: gallery4, alt: "Document presentation ceremony" },
  { src: gallery5, alt: "Group photo at VC office" },
  { src: gallery6, alt: "Robotics lab hands-on training" },
  { src: gallery7, alt: "Computer lab session" },
  { src: gallery8, alt: "IT facility training" },
  { src: gallery9, alt: "Classroom session" },
  { src: gallery10, alt: "Seminar hall presentation" },
];

const PlacementsGallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center">
              Placements Gallery
            </h1>
            <p className="text-primary-foreground/80 text-center mt-2">
              Acharya Nagarjuna University — Training & Placement Activities
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm text-muted-foreground">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlacementsGallery;
