import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vcPhoto from "@/assets/vc-photo.jpg";
import chancellorPhoto from "@/assets/chancellor-photo.png";
import registrarPhoto from "@/assets/registrar-photo.png";

const officers = [
  {
    id: "chancellor",
    name: "Sri. Syed Abdul Nazeer",
    title: "Hon'ble Governor of Andhra Pradesh & Chancellor, Acharya Nagarjuna University",
    photo: chancellorPhoto,
    description:
      "Syed Abdul Nazeer hails from Karnataka and was a former Justice in the Supreme Court. He has the distinction of being the third judge to have been promoted to the highest court of the country without serving as the Chief Justice of any High Court. He retired in January 2023. Abdul Nazeer was born into a Muslim family belonging to the Kanara region of Karnataka, that is coastal Karnataka. He is the son of Fakir Saheb and he has five siblings. He grew up in Beluvai/Moodbidri and completed his B.Com degree at Mahaveera College, Moodbidri. He later obtained a law degree from SDM Law College, Mangalore. After taking his law degree, Nazeer enrolled as an Advocate in 1983 and practiced at the Karnataka High Court in Bangalore. In May 2003, he was appointed as an Additional Judge of the Karnataka High Court. He was later appointed a permanent judge of the same High Court. In February 2017, while serving as a judge of the Karnataka High Court, Nazeer was elevated to the Supreme Court of India. He became only the third judge ever to be elevated in this way, without first becoming the chief justice of some high court.\n\nIn the Supreme Court, Nazeer was the lone Muslim judge in a multi-faith bench which heard the controversial Triple Talaq case in 2017. Though Nazeer and one other judge upheld the validity of the practice of Triple Talaq (Talaq-e-Biddat) based on that fact that it is permissible under Muslim Sharia Law, it was barred by the bench by 3:2 majority and asked the Central government to bring legislation in six months to govern marriage and divorce in the Muslim community. He was also the part of 5 judges' bench of the Historic 2019 Supreme Court verdict on the Ayodhya dispute, in which he upheld the report of ASI, which stated about the existence of a Hindu Structure in the disputed region. He gave the verdict in favour of Ram Mandir and thus finally ended the years-long dispute with 5-0 verdict. In the months leading up to his retirement, Nazeer led a constitution bench which heard cases pertaining to the 2016 Indian banknote demonetization carried out by the Government of India. He retired on 4 January 2023.",
    contact: null,
  },
  {
    id: "vc",
    name: "Prof. Kancharla Gangadhara Rao",
    title: "Vice-Chancellor (I/c), M.Tech., Ph.D.",
    photo: vcPhoto,
    description:
      "'The Highest education is that which does not merely give us information but makes our life in harmony with all existence' – Rabindranath Tagore\n\nBelieving in the dictum \"Knowledge is Power\", Acharya Nagarjuna University has been delivering, disseminating and is creating human resources with sublime ethical standards. From November 2019 to till date Acharya Nagarjuna University has achieved 108 International Ranks, 39 National Ranks, 03 Certifications, 02 Records, 05 Awards in total 157 in different categories from well reputed World Ranking Organizations like Quacqarelli Symonds (QS), QS I-GAUGE, Times Higher Education (THE), Scimago, UI Green Metrics, National Institutional Ranking Frame Work (NIRF), MHRD – Swatchta Rankings, University Guru, SECA, INDIA TODAY, Green Mentors etc.\n\nResearch, Consultancy and Innovations are the pillars for overall holistic education that ANU promotes. Our faculty with celestial standards of teaching, explore the unexplored areas of research in Humanities, Social Sciences, Languages, Literatures, Sciences and contemporary disciplines of knowledge. ANU is marching ahead in the right direction, providing a holistic education to the future generations and is playing a positive role in nation building. We reiterate our endeavor to provide premium quality education accessible to all and an environment for the growth of over-all personality development leading to the generation of 'Global Humanists'.",
    contact: {
      phone: "0863 - (O)2346182",
      fax: "0863-2293378",
      email: ["vc@anu.ac.in", "nu_vc@yahoo.co.in"],
    },
  },
  {
    id: "registrar",
    name: "Prof. G. Simhachalam, I/c",
    title: "Registrar, M.Sc, Ph.D.",
    photo: registrarPhoto,
    description:
      "The University hosts students from several foreign countries like Nepal, Bhutan, Myanmar, Tanzania, Ethiopia, Iraq, Panama, Vietnam, Libya, Mali, Lao's, Thailand, Oman, Saudi Arabia, the USA, Nigeria, South Korea, Canada, the United Arab Emirates etc., who study in various facilities. It's a seat of learning for the Mahayana Buddhist Studies. A good number of Buddhist monks and nuns from Vietnam, Thailand and Myanmar study and conduct research in Mahayana Buddhist Philosophy in the Department of Mahayana Buddhist Studies on campus.\n\nThe campus is only 22 kilometres away from Amaravathi where the 30th Kalachakra was held in coincidence with the 2550th anniversary of the passing away of Lord Buddha in the presence of the preceptor Dalai Lama. Acharya Nagarjuna University bags International and National rankings to show its vibrant output to cater to the needs of the students of National and International level. It has six colleges with 54 departments on the green campus of ANU where the university bagged an International Green Campus ranking.\n\nWith a good number of affiliated colleges, the university offers Undergraduate programmes, Postgraduate programmes, Diploma courses and Doctoral programmes. Thousands of students have successfully completed their Doctoral programmes, Postgraduate programmes and Undergraduate programmes from this seat of learning so far. Remarkable chairs like Dr. B.R.Ambedkar Chair, Mahatma Jyothirao Phule Chair, Babu Jagjivanram Chair and centres like the Centre for Scientific Socialism, Centre for Gandhian Studies and the Centre for Women's Studies are doing meaningful research to meet the demands of downtrodden people of this country. As a part of National Education Policy, 2020, the university encourages interdisciplinary studies. As a part of knowledge exchange, the university has memorandum of understanding with the institutes at the international and national levels. Indian students from the campus study abroad as a part of the student exchange programme.",
    contact: {
      phone: null,
      fax: null,
      email: ["registrar@anueducation.in"],
    },
  },
];

const Administration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Administration</h1>
        <div className="space-y-8">
          {officers.map((officer) => (
            <div key={officer.id} id={officer.id} className="anu-card p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-36 h-44 bg-muted rounded-md overflow-hidden shrink-0 border-2 border-anu-gold">
                  {officer.photo ? (
                    <img src={officer.photo} alt={officer.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      Photo
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-anu-maroon">{officer.name}</h2>
                  <p className="text-sm text-primary font-medium mb-3">{officer.title}</p>
                  {officer.contact && (
                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                      {officer.contact.phone && <p>📞 {officer.contact.phone}</p>}
                      {officer.contact.fax && <p>📠 Fax: {officer.contact.fax}</p>}
                      {officer.contact.email?.map((e) => (
                        <p key={e}>✉️ <a href={`mailto:${e}`} className="text-primary hover:underline">{e}</a></p>
                      ))}
                    </div>
                  )}
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{officer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Administration;
