import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vcPhoto from "@/assets/vc-photo.jpg";
import registrarPhoto from "@/assets/registrar-photo.png";
import registrarPhoto2 from "@/assets/registrar-photo2.png";

const adminCards = [
  {
    name: "Prof. K. Gangadhara Rao.",
    title: "Vice-Chancellor",
    photo: vcPhoto,
  },
  {
    name: "Prof. Prof. K. Ratna Shiela Mani, I/c",
    title: "Rector",
    photo: registrarPhoto,
  },
  {
    name: "Prof. G. Simhachalam, I/c",
    title: "Registrar",
    photo: registrarPhoto2,
  },
];

const notifications = [
  { date: "17/12/2025", text: "M.TECH EEE POWER SYSTEMS EVENING COURSE 2025-26 BROCHURE.", isNew: true },
  { date: "17/12/2025", text: "M.TECH EEE POWER SYSTEMS EVENING COURSE 2025-26 Notification.", isNew: true },
  { date: "17/12/2025", text: "M.TECH. EEE-Power Systems) Evening Course Application 2025-26.", isNew: true },
  { date: "08/12/2025", text: "APPGCET-2025 Spot Admission Guidelines.", isNew: true },
  { date: "08/12/2025", text: "APPGCET-2025 Spot Admission Notification.", isNew: true },
  { date: "18/11/2025", text: "Admission Notification into Self-Support courses 2025-26.", isNew: true },
  { date: "07/11/2025", text: "Application for Certificate in Pleading and Drafting Programme.", isNew: true },
  { date: "07/11/2025", text: "Notification for Certificate in Pleading and Drafting Programme.", isNew: true },
  { date: "31/10/2025", text: "ANU APICET-2025 SPOT ADMISSION NOTIFICATION." },
  { date: "31/10/2025", text: "ANU APICET-2025 SPOT ADMISSION GUIDELINES." },
  { date: "08/10/2025", text: "Notification of B.Sc. 4 Years Honours in Fashion Design, Interior Design." },
  { date: "08/10/2025", text: "Notification of One Year Certificate Course in Fashion Design, Interior Design." },
  { date: "08/10/2025", text: "Notification of One Year Diploma in Fashion Design, Interior Design." },
  { date: "26/09/2025", text: "MTECH CIVIL (STRUCTURAL ENGINEERING) Application." },
  { date: "26/09/2025", text: "M.TECH. CIVIL (STRUCTURAL ENGINEERING) BROCHURE." },
  { date: "26/09/2025", text: "M.TECH. CIVIL (STRUCTURAL ENGINEERING) Notification." },
  { date: "07/08/2025", text: "ADMISSION NOTIFICATION INTO INTEGRATED M.A. PUBLIC POLICY." },
  { date: "07/08/2025", text: "RE-VISED NOTIFICATION OF B.Sc. HONOURS IN FIRE AND INDUSTRIAL SAFETY." },
  { date: "28/07/2025", text: "RE-VISED NOTIFICATION OF B.Sc. HONOURS IN FIRE AND INDUSTRIAL SAFETY." },
  { date: "14/07/2025", text: "ANU EET-2025 ENTRANCE EXAMINATION Notification." },
  { date: "14/07/2025", text: "ANU I-CET-2025 ENTRANCE EXAMINATION Notification." },
  { date: "14/07/2025", text: "ANU PGCET-2025 ENTRANCE EXAMINATION Notification." },
  { date: "11/06/2025", text: "Revised ANU PGCET-2025 Notification - Reg." },
  { date: "11/06/2025", text: "Revised ANU ICET-2025 Notification - Reg." },
  { date: "11/06/2025", text: "ANUEET-2025 Notification, Application form, Brochure and Guidelines, Syllabus - Reg" },
  { date: "14/05/2025", text: "ANUPGCET 2025 & ANUICET 2025 Notifications." },
  { date: "28/12/2024", text: "National Eligibility Test (NET) Notice, 2024." },
  { date: "28/12/2024", text: "National Eligibility Test (NET) Review Committee, 2024." },
  { date: "19/12/2024", text: "SPOT ADMISSION NOTIFICATION - APLAWCET-2024." },
  { date: "16/11/2024", text: "APPGECET-2024 SPOT ADMISSIONS NOTIFICATION." },
  { date: "03/10/2024", text: "APICET-2024 SPOT ADMISSION NOTIFICATION." },
  { date: "24/09/2024", text: "REVISED - NOTIFICATION - PG DIPLOMA COURSES." },
  { date: "16/08/2024", text: "APPLICATION FOR PG DIPLOMA & DIPLOMA COURSES." },
  { date: "16/08/2024", text: "NOTIFICATION FOR PG DIPLOMA & DIPLOMA COURSES." },
  { date: "16/08/2024", text: "APPLICATION FOR 5 YEAR INTEGRATED MA PUBLIC POLICY COURSE." },
  { date: "16/08/2024", text: "NOTIFICATION FOR 5 YEAR INTEGRATED MA PUBLIC POLICY COURSE." },
  { date: "20/07/2024", text: "REVISED NOTIFICATION -ANUPGCET-2024." },
  { date: "21/06/2024", text: "REVISED NOTIFICATION -ANUPGCET-2024." },
  { date: "21/06/2024", text: "REVISED NOTIFICATION -ANUICET-2024." },
  { date: "08/05/2024", text: "NOTIFICATION -ANUICET-2024 REVISED." },
  { date: "08/05/2024", text: "NOTIFICATION -ANUPGCET-2024 REVISED." },
  { date: "04/05/2024", text: "NOTIFICATION -ANUEET-2024 REVISED." },
  { date: "02/05/2024", text: "ANU PGCET-2024 NOTIFICATION REVISED." },
  { date: "10/04/2024", text: "REVISED - ANU PGCET-2024 GUIDELINES & COURSE DETAILS." },
  { date: "10/04/2024", text: "REVISED - ANU PGCET-2024 ELIGIBILITY FOR ENTRANCE TEST." },
  { date: "10/04/2024", text: "REVISED - ANU PGCET-2024 APPLICATION." },
  { date: "10/04/2024", text: "REVISED NOTIFICATION ANU ICET-2024." },
  { date: "10/04/2024", text: "REVISED ELIGIBILITY, GUIDELINES & COURSE DETAILS ANU ICET-2024." },
  { date: "10/04/2024", text: "REVISED APPLICATION SELF SUPPORT ANU ICET-2024." },
  { date: "07/04/2024", text: "ANUEET-2024 Intake, Course & Fee Details." },
  { date: "07/04/2024", text: "REVISED ANUEET-2024 NOTIFICATION." },
  { date: "06/02/2024", text: "ANU Engineering Entrance Test(ANUEET-2024)." },
  { date: "19/01/2024", text: "APLAWCET-2023 SPOT ADMISSION NOTIFICATION." },
  { date: "01/01/2024", text: "Notification for Diploma Courses, Eligibility and Fee Intake Details 2023-24." },
  { date: "23/12/2023", text: "APPGCET-2023 - SPOT ADMISSIONS- NOTIFICATION." },
  { date: "22/12/2023", text: "Spot Admissions for APICET-2023(Rankers only) into M.B.A & M.C.A Courses." },
  { date: "01/08/2023", text: "REVISED NOTIFICATION FOR NEW COURSES & DIPLOMA COURSES FOR THE ACADEMIC YEAR 2023-24." },
  { date: "22/07/2023", text: "INTEGRATED MA COURSES - NOTIFICATION & GUIDELINES." },
  { date: "13/07/2023", text: "REVISED NOTIFICATION FOR NEW COURSES & DIPLOMA COURSES FOR THE ACADEMIC YEAR 2023-24." },
  { date: "06/07/2023", text: "ANU Engineering Entrance Test will be Conducted on 12-07-2023 Wednesday at 10:00 AM to 11:30 AM." },
  { date: "01/07/2023", text: "SYLLABUS & MODEL QUESTION PAPERS FOR ENGINEERING ENTRANCE TEST JULY 2023." },
  { date: "06/06/2023", text: "Notification Entrance Test for Admission into B.Tech.+M.Tech Courses at Dr. YSR ANU Engineering & Technology College, ANU in Self Support Mode for 2023-24." },
  { date: "06/06/2023", text: "Notification Entrance Test for Admission into B.Tech.+M.Tech Courses — Revised Important Dates - ANUEET 2023." },
  { date: "12/05/2023", text: "NOTIFICATION - DIPLOMA & CERTIFICATE COURSES - ANU." },
  { date: "01/05/2023", text: "PH.D. NOTIFICATION - Fellowship/Scholarship in UGC-NET/UGC-CSIR NET/GATE/CEED and similar National level tests." },
  { date: "10/04/2023", text: "APPGCET 2023 NOTIFICATION." },
  { date: "10/04/2023", text: "FINAL NOTIFICATION APLAWCET 2023 NOTIFICATION." },
  { date: "18/03/2023", text: "REVISED AP RCET-2022 NOTIFICATION." },
  { date: "15/03/2023", text: "AP RCET-2022 NOTIFICATION." },
  { date: "22/02/2023", text: "LAWCET-2022 NOTIFICATION." },
  { date: "23/01/2023", text: "APEAPCET-2022 BPHARMACY - SPOT ADMISSION NOTIFICATION." },
  { date: "23/01/2023", text: "APEAPCET-2022 (BIPC) - SPOT ADMISSION -NOTIFICATION." },
  { date: "29/12/2022", text: "SPOT ADMISSIONS PGCET-2022 - NOTIFICATION, VACANCY, FEE & GUIDELINES." },
  { date: "28/12/2022", text: "PGCET-2022 SPOT ADMISSIONS - NOTIFICATION." },
  { date: "17/12/2022", text: "SPOT ADMISSIONS -2022 - M.Tech & M.Pharmacy Notification, Vacancy, Fee details & Guidelines." },
  { date: "13/12/2022", text: "Last Date Extended for Application of M. Phil. Part – I /Pre. Ph. D. Examination FEBRUARY 2023." },
  { date: "09/12/2022", text: "ICET-2022 SPOT ADMISSIONS FOR MBA & MCA COURSES." },
  { date: "08/12/2022", text: "OAMDC-2022 SPOT ADMISSIONS - NOTIFICATION." },
  { date: "26/11/2022", text: "NOTIFICATION and APPLICATION FOR M. Phil. Part – I /Pre. Ph. D. Examination FEBRUARY 2023." },
  { date: "25/11/2022", text: "APPLICATION FOR M. Phil. Part – I /Pre. Ph. D. Examination FEBRUARY 2023." },
  { date: "08/11/2022", text: "PG DIPLOMA & CERTIFICATE COURSES NOTIFICATION - REVISED 2022-23." },
  { date: "28/10/2022", text: "NEW PG Diploma Course, Eligibility Criteria, Intake, Duration & Fee details for the academic year 2022-23." },
  { date: "22/10/2022", text: "REVISED NOTIFICATION for PG DIPLOMA & CERTIFICATE COURSES for the academic year 2022-23." },
  { date: "19/09/2022", text: "PG DIPLOMA & CERTIFICATE COURSE ADMISSIONS APPLICATION FORM 2022-23." },
  { date: "19/09/2022", text: "PG DIPLOMA & CERTIFICATE COURSE ADMISSIONS NOTIFICATION, COURSE DETAILS 2022-23." },
  { date: "17/06/2022", text: "ANU-DOA-APRCET-2021 Spot Admissions Notification, Guidelines & Vacancy (Scheduled on 18-06-2022)." },
  { date: "13/04/2022", text: "ANU-DOA-APPGCET-2021 EXTENSION OF LAST DATES FOR SPOT ADMISSIONS upto 18-04-2022." },
  { date: "11/04/2022", text: "APPGCET-2021 Spot Admissions (Rankers & Non Rankers) Guidelines & Vacancy details." },
  { date: "08/04/2022", text: "ANU-DOA-Spot Admissions Vacancies in ANU College & ANU Ongole Campus." },
  { date: "08/04/2022", text: "ANU-DOA-APPGCET-2021 Spot Admissions Notification & Guidelines." },
  { date: "29/03/2022", text: "APEAPCET-2021 Spot Admissions from 28-03-2022 to 31-03-2022." },
  { date: "11/03/2022", text: "Spot Admissions Press Note & Details of APEAPCET-2021 & APPECET-2021 in ANU (Scheduled on 14.03.2022)." },
  { date: "09/03/2022", text: "Spot Admissions Press Note - MBA, M.Tech. & M.Pharmacy Courses - (APCETS-2021) Press Note (Final)." },
  { date: "05/03/2022", text: "M.Tech. Biotechnology Press Note, Vacancy, Guidelines & Eligibility for Spot Admissions 07.03.2022." },
  { date: "05/03/2022", text: "LL.M. (APLAWCET-2021) Spot Admissions Press Note, Vacancy & Guidelines (Scheduled on 07.03.2022)." },
  { date: "03/03/2022", text: "MBA (APICET-2021 Rankers & Non-Rankers) Spot Admissions - Press Note, Vacancy & Guidelines (Scheduled on 07.03.2022)." },
  { date: "03/03/2022", text: "M.Tech. & M.Pharmacy (Rankers & Non-Rankers) Spot Admissions Press Note, Vacancy & Guidelines (Scheduled on 07.03.2022)." },
  { date: "01/03/2022", text: "APPGECET-2021 Spot Admissions Press Note, Vacancy & Guidelines (on 02.03.2022)." },
  { date: "15/12/2021", text: "Counseling Schedule on 06-12-2021-PG Diploma in Advanced Aqua. Mgmt. & Certificate Course in Sustainable Aqua. Cult. Mgmt. (2021-22)." },
  { date: "15/12/2021", text: "Counseling Schedule on 16-12-2021-PG Diploma Courses offered in ANU & Affiliated Colleges for the A.Y. 2021-22." },
  { date: "08/12/2021", text: "REQUEST LETTER FOR AFFILIATED COLLEGES FOR MBA & MCA INTAKE & FEE DETAILS." },
  { date: "03/12/2021", text: "ANU-DOA-Information to all affiliated Colleges for confirmation APPGCET-2021 Admissions." },
  { date: "01/11/2021", text: "ANU-DOA-Notification, Eligibility Criteria & Fee Details for the PG Diploma and Certificate Courses 2021-22." },
  { date: "26/10/2021", text: "ANU - Eligibility Criteria of M.Tech. Biotechnology offered in ANU 2021." },
  { date: "02/07/2021", text: "ANU-DOA-Approval of MBA / MCA Course Spot Admissions List for the academic year 2020-21." },
  { date: "24/04/2021", text: "ANU SPOT Admissions-2020 Press Note (Scheduled on 26-04-2021)." },
  { date: "22/04/2021", text: "Spot Admissions Application Form - For the Unfilled Seats in M.Tech. & M.Pharm. Courses in ANU College." },
  { date: "22/04/2021", text: "Spot Admissions Notification & Guidelines - For the Unfilled Seats in M.Tech & M.Pharm. Courses in ANU College." },
  { date: "20/04/2021", text: "Spot Admissions Application Form - For the Unfilled Seats in MCA, MBA Courses in ANU College." },
  { date: "20/04/2021", text: "Spot Admissions Notification & Guidelines - For the Unfilled Seats in MCA, MBA Courses in ANU College." },
];

const ANUDOA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Acharya Nagarjuna University</h1>
        <h2 className="text-xl font-semibold text-center text-anu-maroon mb-8">Directorate of Admissions</h2>

        {/* Admin Cards - matching screenshot layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {adminCards.map((admin) => (
            <div key={admin.name} className="bg-muted rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <img
                src={admin.photo}
                alt={admin.name}
                className="w-36 h-40 object-cover rounded-lg mb-4 shadow"
              />
              <p className="font-semibold text-foreground text-sm">{admin.name}</p>
              <p className="text-muted-foreground text-sm">{admin.title}</p>
            </div>
          ))}
        </div>

        {/* DOA Notifications Table */}
        <section>
          <h2 className="text-xl font-bold text-anu-maroon mb-4 text-center">DOA Notifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-anu-maroon text-primary-foreground">
                  <th className="text-left px-4 py-3 font-semibold w-[120px]">Date</th>
                  <th className="text-left px-4 py-3 font-semibold">Notifications</th>
                </tr>
              </thead>
              <tbody>
                {notifications.map((n, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                    <td className="px-4 py-2.5 text-muted-foreground whitespace-nowrap">{n.date}</td>
                    <td className="px-4 py-2.5 text-foreground">
                      {n.text}
                      {n.isNew && (
                        <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">
                          New
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ANUDOA;
