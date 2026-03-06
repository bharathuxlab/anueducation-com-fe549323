import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Building2 } from "lucide-react";

const autonomousColleges = [
  { name: "Bapatla Engineering College, Bapatla", period: "2011-2016" },
  { name: "Government Degree College for Women, Guntur", period: "2013-2018" },
  { name: "J.M.J. College of Women, Morrispet, Tenali", period: "2011-2016" },
  { name: "J.K.C. College, Guntur", period: "2007-2012" },
  { name: "R.V.R. & J.C. College of Engineering, Guntur", period: "2012-2017" },
  { name: "S.V.R.M. College, Nagaram-522268, Guntur", period: "2011-2016" },
  { name: "St. Joseph's College of Education for Women, Guntur", period: "2012-2017" },
  { name: "V.S.R & N.V.R. College, Tenali", period: "2012-2017" },
  { name: "Chalapathi Institute of Pharmaceutical Science, Lam", period: "2016-2021" },
];

const naacColleges = [
  { name: "Chalapathi Institute of Pharmaceutical Science", grade: "A" },
  { name: "The Bapatla College of Arts & Sciences, Bapatla", grade: "A" },
  { name: "J.K.C. College, Guntur", grade: "A" },
  { name: "St. Joseph's College of Education for Women", grade: "A" },
  { name: "St. Paul's College of Education", grade: "A" },
  { name: "T.J.P.S. College, Guntur", grade: "A" },
  { name: "V.S.R. & N.V.R. College, Tenali", grade: "A" },
  { name: "Nirmala College of Pharmacy, Atmakuru, Mangalagiri", grade: "A" },
  { name: "Hindu College, Guntur", grade: "A" },
  { name: "RVR & JC College of Engineering, Guntur", grade: "A" },
  { name: "Bapatla Engineering College, Bapatla", grade: "B" },
  { name: "Chalapathi Institute of Engineering & Technology, Guntur", grade: "A" },
  { name: "AP Residential Degree College, Nagarjuna Sagar", grade: "B" },
  { name: "Andhra Christian College, Guntur", grade: "B++" },
  { name: "Government College for Women, Guntur", grade: "B++" },
  { name: "J.M.J. College for Women (Re-Accredited), Tenali", grade: "B++" },
  { name: "K.V.R., K.V.R & M.K.R College, Khajipalem", grade: "B++" },
  { name: "P.N.C & K.R Degree College, Narasaraopeta", grade: "B++" },
  { name: "S.S. & N. College, Narasaraopeta", grade: "B++" },
  { name: "V.R.S. & Y.R.N. College, Chirala", grade: "B++" },
  { name: "KRK Government Degree College, Addanki", grade: "B+" },
  { name: "Shams-Ul-Uloom College of Education, Markapur", grade: "B+" },
  { name: "SKBR Govt. Degree College, Macherla", grade: "B+" },
  { name: "S.V.R.M. College, Nagaram", grade: "B+" },
  { name: "T.R.R. Government Degree College, Kandukur", grade: "B+" },
  { name: "Vinukonda B.Ed. College, Vinukonda", grade: "B+" },
  { name: "C.R. College, Chilakaluripet", grade: "B" },
  { name: "Dr. K.R.R.M. Degree College, Duggirala", grade: "B" },
  { name: "P.A.S. College, Pedanadipadu", grade: "B" },
  { name: "RVRR College of Education, Guntur", grade: "B" },
  { name: "SGK Government Degree College, Vinukonda", grade: "B" },
  { name: "SKRBR College, Narasaraopet", grade: "B" },
  { name: "SVKP Arts, Science & Commerce College, Markapur", grade: "B" },
  { name: "Sri ABR Government College, Repalle", grade: "B" },
  { name: "VV & M Degree College, Ongole", grade: "B" },
  { name: "YA Govt. Degree College for Women, Chirala", grade: "B" },
  { name: "AGKM College, Sattenapalli", grade: "C++" },
  { name: "Government Degree College, Kanigiri", grade: "C" },
];

const ugcColleges = [
  { name: "ABM Degree College, Ongole", date: "08-04-1999" },
  { name: "AGKM College, Sattenapalli", date: "22-4-1982" },
  { name: "AP Residential College, Nagarjuna Sagar", date: "23-4-1992" },
  { name: "Andhra Christian College, Guntur", date: "31-3-1971" },
  { name: "AL College of Education, Guntur", date: "31-12-1975" },
  { name: "Andhra Muslim College, Guntur", date: "31-03-2009" },
  { name: "BBH College, Vetapalem", date: "09-11-1992" },
  { name: "BHH College for Women, Guntur", date: "31-10-2003" },
  { name: "BSSB College, Tadikonda", date: "30-07-1992" },
  { name: "Bapatla College of Arts & Science, Bapatla", date: "18-01-1987" },
  { name: "Bapatla Engineering College, Bapatla", date: "16-04-1990" },
  { name: "CR College, Chilakaluripeta", date: "30-09-1969" },
  { name: "C.S.R. Sarma College, Ongole", date: "09-07-1987" },
  { name: "Chalapathi Institute of Pharmaceutical Sciences, Guntur", date: "01-06-2013" },
  { name: "DCRM Degree College, Inkollu", date: "23-10-1992" },
  { name: "DS Government College for Women, Ongole", date: "31-01-2008" },
  { name: "Dr. KRRM Degree College, Duggirala", date: "05-01-1994" },
  { name: "DRNSCVS College, Chilakaluripeta", date: "24-04-1994" },
  { name: "GVSM Govt. Degree College, Ulavapadu", date: "04-02-2000" },
  { name: "Government College for Women, Guntur", date: "07-12-1977" },
  { name: "Government Degree College, Chebrolu", date: "31-03-2006" },
  { name: "Government Degree College, Vinukonda", date: "27-05-1994" },
  { name: "HMKS & MGSM College of Education, Kanagala", date: "25-02-2008" },
  { name: "Hindu College, Guntur", date: "01-04-1956" },
  { name: "JKC College, Guntur", date: "30-09-1969" },
  { name: "JMJ College for Women, Tenali", date: "02-10-1965" },
  { name: "KRK Government Degree College, Addanki", date: "07-11-1994" },
  { name: "Krishnaveni Degree College, Narasaraopet", date: "17-05-2012" },
  { name: "KVR, KVR & MKR College, Khajipalem", date: "31-01-1992" },
  { name: "Majety Guravaiah Degree College, Guntur", date: "31-07-2003" },
  { name: "Matrusri Oriental College, Jillelamudi", date: "07-04-2000" },
  { name: "N.B.T. & N.V.C. College, Narasaraopet", date: "06-08-1982" },
  { name: "PBN College, Nidubrolu", date: "04-02-1980" },
  { name: "PNC & KR Degree College, Narasaraopet", date: "24-07-1998" },
  { name: "PAS College, Pedanandipadu", date: "30-09-1969" },
  { name: "RVR & JC College of Engineering, Guntur", date: "31-01-1992" },
  { name: "Repalle Christian College, Repalle", date: "16-09-2004" },
  { name: "RVVN Degree College, Dharanikota", date: "30-09-1969" },
  { name: "SGHR & MCMR Degree College, Guntur", date: "18-05-1991" },
  { name: "SKBR Government Degree College, Macherla", date: "31-03-1993" },
  { name: "SKRBR College, Narasaraopet", date: "03-07-1987" },
  { name: "SNBT Degree College for Women, Repalle", date: "14-03-1992" },
  { name: "SS & N College, Narasaraopet", date: "03-7-1987" },
  { name: "SVKP Arts & Science College, Markapur", date: "12-02-1969" },
  { name: "SVKP Degree College, Podili", date: "19-01-1979" },
  { name: "SVRM College, Nagaram", date: "05-07-1987" },
  { name: "Sadineni Chowdaraiah Arts & Science, Maddirala", date: "14-03-2006" },
  { name: "Sri ABR Government Degree College, Repalle", date: "21-08-1998" },
  { name: "SV Arts & Science College, Giddalur", date: "13-01-1978" },
  { name: "Sriji College, Maddiralapadu, Ongole", date: "17-03-2004" },
  { name: "St. Joseph's College of Education for Women, Guntur", date: "01-04-1956" },
  { name: "St. Paul's College of Education, Giddalur", date: "21-07-2011" },
  { name: "TJPS College, Guntur", date: "04-07-1974" },
  { name: "TRR Govt. Degree College, Kandukur", date: "29-07-1994" },
  { name: "VRS & YRN College, Chirala", date: "31-12-1975" },
  { name: "VSR & NVR College, Tenali", date: "26-03-1975" },
  { name: "VTJM & IVTR Degree College, Mangalagiri", date: "19-07-1990" },
];

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Academics</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 flex items-center gap-2">
            <GraduationCap size={22} /> Courses Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { level: "Undergraduate Programs", items: ["B.A.", "B.Sc.", "B.Com.", "B.Tech", "B.Pharm", "BBA", "BCA", "B.Ed.", "LLB"] },
              { level: "Postgraduate Programs", items: ["M.A.", "M.Sc.", "M.Com.", "M.Tech", "M.Pharm", "MBA", "MCA", "M.Ed.", "LLM"] },
              { level: "Doctoral Programs", items: ["M.Phil.", "Ph.D.", "D.Sc.", "D.Litt."] },
            ].map((cat) => (
              <div key={cat.level} className="anu-card p-5">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> {cat.level}
                </h3>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground pl-2 border-l-2 border-primary/30">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="affiliated-colleges" className="mb-10">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 flex items-center gap-2">
            <Building2 size={22} /> Affiliated Colleges
          </h2>

          <div className="anu-card p-6 mb-6">
            <ul className="space-y-2 text-foreground text-sm">
              <li className="border-l-2 border-primary/30 pl-3">Enhancement in Affiliation fee, Examination fee, Bus Pass Charges and Guest House rent by 10% (w.e.f. 10-07-2019)</li>
              <li className="border-l-2 border-primary/30 pl-3">Inspection Commission Report for Colleges and Hostel</li>
              <li className="border-l-2 border-primary/30 pl-3">Affiliated Colleges Directory 2019-2020</li>
            </ul>
          </div>

          {/* Autonomous Colleges */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">Autonomous Colleges</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-anu-maroon text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold">Name of the College</th>
                    <th className="text-left px-4 py-3 font-semibold">Period</th>
                  </tr>
                </thead>
                <tbody>
                  {autonomousColleges.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="px-4 py-2.5 text-foreground">{c.name}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{c.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* NAAC Accredited Colleges */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">NAAC Accredited Colleges</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-anu-maroon text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold">Name of the College</th>
                    <th className="text-left px-4 py-3 font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {naacColleges.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="px-4 py-2.5 text-foreground">{c.name}</td>
                      <td className="px-4 py-2.5">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                          c.grade === "A" ? "bg-green-100 text-green-800" :
                          c.grade.startsWith("B") ? "bg-blue-100 text-blue-800" :
                          "bg-amber-100 text-amber-800"
                        }`}>
                          {c.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* UGC Recognized Colleges */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">UGC Recognized Colleges U/S 2(F) & 12(B)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-anu-maroon text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold">Name of the College</th>
                    <th className="text-left px-4 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {ugcColleges.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="px-4 py-2.5 text-foreground">{c.name}</td>
                      <td className="px-4 py-2.5 text-muted-foreground">{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;
