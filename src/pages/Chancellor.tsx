import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chancellorPhoto from "@/assets/chancellor-photo.png";

const Chancellor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Chancellor</h1>
        <div className="anu-card p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-44 h-52 bg-muted rounded-md overflow-hidden shrink-0 border-2 border-anu-gold">
              <img src={chancellorPhoto} alt="Sri. Syed Abdul Nazeer" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-anu-maroon">Sri. Syed Abdul Nazeer</h2>
              <p className="text-sm text-primary font-medium">Hon'ble Governor of Andhra Pradesh</p>
              <p className="text-sm text-primary font-medium mb-4">Chancellor, Acharya Nagarjuna University</p>

              <h3 className="text-lg font-semibold text-anu-maroon mb-3">Chancellor's Profile</h3>

              <p className="text-foreground leading-relaxed mb-4">
                Syed Abdul Nazeer hails from Karnataka was a former Justice in the Supreme Court. He has the distinction of being the third judge to have been promoted to the highest court of the country without serving as the Chief Justice of any High Court. He retired in January 2023. Abdul Nazeer was born into a Muslim family belonging to the Kanara region of Karnataka, that is coastal Karnataka. He is the son of Fakir Saheb and he has five siblings. He grew up in Beluvai/Moodbidri and completed his B.Com degree at Mahaveera College, Moodbidri. He later obtained a law degree from SDM Law College, Mangalore.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                After taking his law degree, Nazeer enrolled as an Advocate in 1983 and practiced at the Karnataka High Court in Bangalore. In May 2003, he was appointed as an Additional Judge of the Karnataka High Court. He was later appointed a permanent judge of the same High Court. In February 2017, while serving as a judge of the Karnataka High Court, Nazeer was elevated to the Supreme Court of India. He became only the third judge ever to be elevated in this way, without first becoming the chief justice of some high court.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                In the Supreme Court, Nazeer was the lone Muslim judge in a multi-faith bench which heard the controversial Triple Talaq case in 2017. Though Nazeer and one other judge upheld the validity of the practice of Triple Talaq (Talaq-e-Biddat) based on that fact that it is permissible under Muslim Sharia Law, it was barred by the bench by 3:2 majority and asked the Central government to bring legislation in six months to govern marriage and divorce in the Muslim community. The court said till the government formulates a law regarding triple talaq, there would be an injunction on husbands pronouncing triple talaq on their wives.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                He was also the part of 5 judges' bench of the Historic 2019 Supreme Court verdict on the Ayodhya dispute. In which he upheld the report of ASI, which stated about the existence of a Hindu Structure in the disputed region. He gave the verdict in favour of Ram Mandir and thus finally ended the years-long dispute with 5-0 verdict.
              </p>
              <p className="text-foreground leading-relaxed">
                In the months leading up to his retirement, Nazeer led a constitution bench which heard cases pertaining to the 2016 Indian banknote demonetization carried out by the Government of India. He retired on 4 January 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chancellor;
