import Header from "@/components/Header";
import Footer from "@/components/Footer";
import drRaviSankar from "@/assets/dr-ravi-sankar.png";

const NSSCell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-anu-maroon mb-8 border-b-2 border-anu-red pb-2">
          NATIONAL SERVICE SCHEME (NSS) CELL
        </h1>

        {/* Coordinator Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-64 shrink-0">
            <img
              src={drRaviSankar}
              alt="Dr. D. Ravi Sankar Reddy"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="mt-3 text-center">
              <h3 className="text-lg font-bold text-anu-maroon">Dr. D. Ravi Sankar Reddy</h3>
              <p className="text-sm text-muted-foreground">Co-Ordinator I/c</p>
              <p className="text-sm text-muted-foreground">+91 9849605798</p>
              <p className="text-sm text-anu-red">
                <a href="mailto:nssanu2012@gmail.com" className="hover:underline">nssanu2012@gmail.com</a>
              </p>
              <p className="text-sm text-anu-red">
                <a href="mailto:nssanu2023@gmail.com" className="hover:underline">nssanu2023@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-foreground leading-relaxed">
            <p>
              The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various Government led community service activities & programmes. The primary objective of developing the personality and character of the student youth through voluntary community service. 'Education through Service' is the purpose of the NSS. NSS was launched in 1969 in 37 Universities involving about 40,000 volunteers, which has now spread over 657 Universities and 51 +2 Councils/Directorates, covering 20,669 Colleges/Technical Institutions and 11,988 Senior Secondary School. Since inception, over 7.4 crore students have benefitted.
            </p>
            <p>
              National Service Scheme (NSS) had been started in Acharya Nagarjuna University in the year 1977 under the Ministry of Youth Affairs & Sports, Govt. of India. At present 252 NSS Units are functioning at various Intermediate, Under Graduate & Post Graduate colleges in Guntur, Palnadu, Bapatla and Prakasam Districts with 252 NSS Programme Officers and 25200 NSS Volunteers under the jurisdiction of Acharya Nagarjuna University.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Objectives</h2>
          <p className="text-foreground mb-3">The Main Objectives of National Service Scheme (NSS) are:</p>
          <ul className="space-y-2 text-foreground leading-relaxed">
            {[
              "Understand the community in which they work.",
              "Understand themselves in relation to their community.",
              "Identify the needs and problems of the community and involve them in problem solving.",
              "Develop them a sense of social and civic responsibility.",
              "Develop the competence required for group-living and sharing responsibilities.",
              "Gain skills in mobilizing community participation.",
              "Acquire leadership qualities and democratic attitude.",
              "Develop capacity to adapt to emergency situation like natural disasters.",
              "Practice National integration and Harmony.",
              "Student Result.",
              "On the whole NSS is development of personality of students through Community Service.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-anu-red font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Motto */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Motto</h2>
          <p className="text-foreground leading-relaxed">
            The motto of NSS is <strong>'NOT ME BUT YOU'</strong>. It underlines that the welfare of an individual is ultimately depended on the welfare of the society as a whole. This expresses the essence of democratic living and upholds the need of self-less service and appreciation of the other man's point of view and also consideration for fellow human beings. Therefore NSS volunteers shall strive for the well being of the society.
          </p>
        </div>

        {/* Symbol */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Symbol</h2>
          <p className="text-foreground leading-relaxed">
            The NSS symbol is based on the "Rath Wheel" of the Konark Sun Temple of Orissa. The giant wheel portrays the cycles of creation, preservation and release and signifies the movement in life across time and space. The design of the symbol, a simplified form of Sun Chariot Wheel primarily depicts movement. The wheel signifies the progressive cycle of life. The symbol thus stands for continuity as well as change and implies the continuous striving for social change.
          </p>
        </div>

        {/* Badge */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Badge</h2>
          <p className="text-foreground leading-relaxed">
            The NSS symbol is embossed on the NSS badge. The NSS volunteers wear it while undertaking any programme or community service. The konark wheel in the symbol has eight bars, which represent the 24 hours of the day. Hence, the badge reminds the wearer to be in readiness for the service of the nation round the clock i.e. for 24 hours. The Red Colour in the badge indicates that the NSS volunteers are full of blood i.e. lively, active energetic and full of high spirit. The Navy Blue Colour indicates the cosmos of which the NSS is a tiny part, ready to contribute its share for the welfare of the mankind.
          </p>
        </div>

        {/* NSS Day */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">NSS Day</h2>
          <p className="text-foreground leading-relaxed">
            NSS was formally launched on 24th September 1969, the birth Centenary year of Father of Nation. Therefore, 24 September is celebrated every year as NSS Day with appropriate programmes and activities.
          </p>
        </div>

        {/* NSS Song */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">NSS Song</h2>
          <p className="text-foreground leading-relaxed">
            During Silver Jubilee Year 1994 the NSS theme song has been composed. All NSS volunteers are expected to learn the theme song and sing the song during NSS programmes and celebrations.
          </p>
        </div>

        {/* Incentives to NSS Volunteers */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Incentives to NSS Volunteers in Andhra Pradesh</h2>
          <p className="text-foreground leading-relaxed mb-4">
            NSS volunteers of Junior/ Degree/ Professional colleges under 35 Universities under the supervision of Programme Officers/ Principals have been rendering services to the community development while undergoing academic programmes in the colleges/Universities in AP. NSS volunteers are put to loss of academic programmes/ studies for about 60 days during their study period as result of attending to community service and other programmes.
          </p>
          <ol className="space-y-3 text-foreground leading-relaxed list-decimal list-inside">
            <li>Those volunteers who render outstanding contribution in the community service are recognized by the State Government/ Government of India by providing certain incentives in the admissions to Undergraduates / Post graduate/ Professional / Technical course on par with the NCC cadets.</li>
            <li>The NSS volunteers who participate in Republic Day Parade or Attend an International Event or One National Integration Camp and two(2) Special Camps with two(2) years of regular Service in NSS shall be treated on par with the NCC cadets possessing 'C' certificate in the admissions.</li>
            <li>The NSS volunteers who attend two (2) special camps with 2 years of regular service in NSS shall be treated on par with the NCC cadets possessing 'B' certificate in the admissions.</li>
            <li>The NSS volunteers with outstanding contribution in the community service will be given preference in employment in Union Public Service Commission, Andhra Pradesh Public Service Commission, Staff Selection Commission and all other recruiting agencies.</li>
            <li>The period of absence of NSS Volunteers in the class during their participation in NSS pogrammes (International / National / Special Camp etc.,) is to considered for regular attendance on par with other students.</li>
          </ol>
        </div>

        {/* Incentives to Programme Officers */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Incentives to NSS Programme Officers in Andhra Pradesh</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Programme Officers of NSS attend NSS work in the institutions and in adopted villages under Regular/ Special camping programmes, Clean & Green of AP on every third Saturday, besides their normal teaching work during the academic year. The services rendered by the Programme Officers are to be recognized by providing certain incentives to them.
          </p>
          <ol className="space-y-3 text-foreground leading-relaxed list-[lower-alpha] list-inside">
            <li>The NSS Programme Officers with outstanding contribution in the community service are to be preferred in the selection of State Teacher Awards.</li>
            <li>Orientation training / Refresher course attended by NSS Programme Officers is to be recorded in their Service Registers.</li>
            <li>The period of Orientation training / Refresher course / National Integration Camp / Republic Day Parade / National Adventure camp / Special camps attended by NSS Programme Officers during vacation is to be permitted for compensatory leave.</li>
            <li>The NSS Programme Officers who attend ten days orientation training, five days Refresher course and ten days Special camp will be treated on par with Orientation/ Refresher course of Academic Staff colleges.</li>
          </ol>
        </div>

        {/* Activities */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-anu-maroon mb-4 border-b border-border pb-2">Activities of NSS Volunteers and Adoption of Village</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The Activities under NSS are two-fold, viz. i) Regular activities, which are undertaken during the working days of the semester, and ii) Special Camping activities for 07 days duration in the adopted village/urban slum during vacation. Each NSS unit is expected to adopt a nearby village/slum and work for its all round development. Regular Activities and Special Camp preferably to be organized in the adopted village / rural /slum areas.
          </p>

          <h3 className="text-lg font-bold text-anu-maroon mb-3">Regular Activities</h3>
          <p className="text-foreground leading-relaxed mb-4">
            Under this, students undertake various Programmes in the adopted villages, College Campuses and slums areas in urban during weekends or after college hours. The activities will be planned as follows.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-anu-maroon text-primary-foreground">
                  <th className="border border-border px-4 py-2 text-left text-sm">S.No</th>
                  <th className="border border-border px-4 py-2 text-left text-sm">Activity</th>
                  <th className="border border-border px-4 py-2 text-left text-sm">Hours</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "General orientation of NSS Volunteers, NSS Day Celebrations.", "20 Hours"],
                  ["2", "Career guidance for the NSS Volunteers, by the experts and by the NSS Volunteers for +2 Students.", "30 Hours"],
                  ["3", "Skill development (First Aid, Disaster Management, Public Speaking).", "26 Hours"],
                  ["4", "Community Development Projects - Health Cleanliness, Road Safety, Visits to Homes, Consumer Awareness etc.,", "44 Hours"],
                ].map(([no, activity, hours]) => (
                  <tr key={no} className="even:bg-muted/50">
                    <td className="border border-border px-4 py-2 text-sm text-foreground">{no}</td>
                    <td className="border border-border px-4 py-2 text-sm text-foreground">{activity}</td>
                    <td className="border border-border px-4 py-2 text-sm text-foreground">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-anu-maroon mb-3">Special Camping Programme</h3>
          <p className="text-foreground leading-relaxed">
            Under this, 07 days camp organized in the adopted villages with a specified theme being given by Govt. of India by involving local youth. The Special camp should be conducted only in the adopted villages or the group of Villages / Urban Areas for intensive social development.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NSSCell;
