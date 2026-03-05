import Header from "@/components/Header";
import Footer from "@/components/Footer";
import registrarPhoto from "@/assets/registrar-photo.png";

const Registrar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Registrar</h1>
        <div className="anu-card p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-44 h-52 bg-muted rounded-md overflow-hidden shrink-0 border-2 border-anu-gold">
              <img src={registrarPhoto} alt="Prof. G. Simhachalam" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-anu-maroon">Prof. G. Simhachalam, I/c</h2>
              <p className="text-sm text-primary font-medium mb-1">Registrar</p>
              <p className="text-sm text-muted-foreground mb-4">M.Sc, Ph.D.</p>

              <div className="bg-muted/50 rounded-md p-4 mb-6 text-sm space-y-1">
                <p>✉️ <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:registrar@anueducation.in" className="text-primary hover:underline">registrar@anueducation.in</a>
                </p>
              </div>

              <h3 className="text-lg font-semibold text-anu-maroon mb-3">Registrar's Message</h3>

              <p className="text-foreground leading-relaxed mb-4">
                The University hosts students from several foreign countries like Nepal, Bhutan, Myanmar, Tanzania, Ethiopia, Iraq, Panama, Vietnam, Libya, Mali, Lao's, Thailand, Oman, Saudi Arabia, the USA, Nigeria, South Korea, Canada, the United Arab Emirates etc., who study in various facilities. It's a seat of learning for the Mahayana Buddhist Studies. A good number of Buddhist monks and nuns from Vietnam, Thailand and Myanmar study and conduct research in Mahayana Buddhist Philosophy in the Department of Mahayana Buddhist Studies on campus.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The campus is only 22 kilometres away from Amaravathi where the 30th Kalachakra was held in coincidence with the 2550th anniversary of the passing away of Lord Buddha in the presence of the preceptor Dalai Lama. Acharya Nagarjuna University bags International and National rankings to show its vibrant output to cater to the needs of the students of National and International level. It has six colleges with 54 departments on the green campus of ANU where the university bagged an International Green Campus ranking.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                With a good number of affiliated colleges, the university offers Undergraduate programmes, Postgraduate programmes, Diploma courses and Doctoral programmes. Thousands of students have successfully completed their Doctoral programmes, Postgraduate programmes and Undergraduate programmes from this seat of learning so far.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Remarkable chairs like Dr. B.R.Ambedkar Chair, Mahatma Jyothirao Phule Chair, Babu Jagjivanram Chair and centres like the Centre for Scientific Socialism, Centre for Gandhian Studies and the Centre for Women's Studies are doing meaningful research to meet the demands of downtrodden people of this country.
              </p>
              <p className="text-foreground leading-relaxed">
                As a part of National Education Policy, 2020, the university encourages interdisciplinary studies. As a part of knowledge exchange, the university has memorandum of understanding with the institutes at the international and national levels. Indian students from the campus study abroad as a part of the student exchange programme.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registrar;
