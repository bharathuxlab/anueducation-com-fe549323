import { ExternalLink } from "lucide-react";

const colleges = [
  {
    name: "ANU College of Engineering & Technology (Dr. YSR ANUCET)",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  },
  {
    name: "ANU College of Sciences",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  },
  {
    name: "ANU College of Arts, Commerce & Law",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
  },
  {
    name: "ANU College of Pharmaceutical Sciences",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
  },
  {
    name: "ANU College of Physical Education & Sports",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba2c5e30?w=400&h=300&fit=crop",
  },
  {
    name: "ANU College of Architecture & Planning",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
];

const CollegesSection = () => {
  return (
    <section className="py-14 bg-anu-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary-foreground mb-8 text-center">
          Constituent Colleges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-primary-foreground font-semibold text-sm leading-tight mb-1">
                  {college.name}
                </h3>
                <span className="text-anu-gold text-xs flex items-center gap-1 group-hover:underline">
                  Read More <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;