import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vcPhoto from "@/assets/vc-photo.jpg";

const ViceChancellor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Vice-Chancellor</h1>
        <div className="anu-card p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-56 h-64 bg-muted rounded-md overflow-hidden shrink-0">
              <img src={vcPhoto} alt="Prof. Kancharla Gangadhara Rao" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-anu-maroon">Prof. Kancharla Gangadhara Rao</h2>
              <p className="text-sm text-primary font-medium mb-1">Vice-Chancellor (I/c)</p>
              <p className="text-sm text-muted-foreground mb-4">M.Tech., Ph.D.</p>

              <div className="bg-muted/50 rounded-md p-4 mb-6 text-sm space-y-1">
                <p>📞 <span className="font-medium">Contact:</span> 0863 - (O)2346182</p>
                <p>📠 <span className="font-medium">Fax Number:</span> 0863-2293378</p>
                <p>✉️ <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:vc@anu.ac.in" className="text-primary hover:underline">vc@anu.ac.in</a>,{" "}
                  <a href="mailto:nu_vc@yahoo.co.in" className="text-primary hover:underline">nu_vc@yahoo.co.in</a>
                </p>
              </div>

              <h3 className="text-lg font-semibold text-anu-maroon mb-3">Vice-Chancellor's Message</h3>

              <p className="text-foreground leading-relaxed mb-4 italic">
                'The Highest education is that which does not merely give us information but makes our life in harmony with all existence' – Rabindranath Tagore
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Believing in the dictum "Knowledge is Power", Acharya Nagarjuna University has been delivering, disseminating and is creating human resources with sublime ethical standards. From November 2019 to till date Acharya Nagarjuna University has achieved 108 International Ranks, 39 National Ranks, 03 Certifications, 02 Records, 05 Awards (02 Green University Awards and 01 State Energy Conservation Award in total 157 in different categories from well reputed World Ranking Organizations like Quacqarelli Symonds (QS), QS I-GAUGE, Times Higher Education (THE), Scimago, UI Green Metrics, National Institutional Ranking Frame Work (NIRF), MHRD – Swatchta Rankings, University Guru, SECA, INDIA TODAY, Green Mentors etc.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Research, Consultancy and Innovations are the pillars for overall holistic education that ANU promotes. Our faculty with celestial standards of teaching, explore the unexplored areas of research in Humanities, Social Sciences, Languages, Literatures, Sciences and contemporary disciplines of knowledge.
              </p>
              <p className="text-foreground leading-relaxed">
                ANU is marching ahead in the right direction, providing a holistic education to the future generations and is playing a positive role in nation building. We reiterate our endeavor to provide premium quality education accessible to all and an environment for the growth of over-all personality development leading to the generation of 'Global Humanists'.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViceChancellor;
