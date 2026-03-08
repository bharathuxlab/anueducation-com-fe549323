import Header from "@/components/Header";
import Footer from "@/components/Footer";
import drSudhakar from "@/assets/dr-sudhakar-poda.png";

const ResearchCell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-anu-maroon mb-8 border-b-2 border-anu-red pb-2">
          Research Cell
        </h1>

        {/* Coordinator Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-64 shrink-0">
            <img
              src={drSudhakar}
              alt="Dr. Sudhakar Poda"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="mt-3 text-center">
              <h3 className="text-lg font-bold text-anu-maroon">Dr. Sudhakar Poda</h3>
              <p className="text-sm text-muted-foreground">
                Coordinator, Research Cell
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <p className="text-foreground leading-relaxed">
              The institution has well defined research policy which is applicable to all the constituent colleges, Departments, PG centres and affiliated colleges of University. The institute creates healthy environment to encourage the research culture and provide support through research framework. University continuously encourages the faculty and research scholars to engage in quality research work.
            </p>

            <ul className="space-y-3 text-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The institution facilitates research facilities with various instruments and equipment for the novel research activity in the departments of constituent colleges.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The University constantly supports the faculty, research scholars and students to collaborate with various institutes for research projects, training and internship programs at national and international level.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The eligibility for the research guideship for the faculty is as per the UGC and University Norms.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>University frequently updates research admission guidelines and the research scholars are admitted into PhD program as per the UGC norms, through AP State Government Entrance Examination (APRCET) and APSCHE Guidelines.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The institute offers seed money as research allowance to encourage the faculty to be engaged in research work and publish patents and research articles in the reputed journals.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The Institute constitutes and maintains Departmental Research Committee (DRC) which monitors the allotment of number of seats in the PhD program in the respective departments, decides research topics for the admitted research scholars and recommend syllabi for Pre-PhD course work for the approval by the Board of Research Studies (BRS) and evaluates the progress of research work of the scholars.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>University established research and development cell to encourage, promote and coordinate research activities of the faculty and scholars from time to time and commends those members who receive state and central awards and recognitions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>University also offers financial support to the faculty to attend or organize various conferences, workshops and seminars at National and International level.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>The institute has a policy of plagiarism check using Turnitin software for all the PhD theses submitted by the research scholars before final submission for evaluation of the PhD thesis by three external examiners in which one is from outside the country.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>Research Ethics Committee regulates ethics policy for considering and safe guarding the dignity, right, safety and well being of all actual and potential research participants.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>Central instrumentation center has been established in the university in the year of 2021 with research facilities in the form of equipment and instruments which provides scope of research for the PG project works and the PhD programs.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>University has a facility of online databases providing access through JGATE and J-STOR portals for all the faculty, research scholars and students in the university including affiliated colleges.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-anu-red font-bold">✔</span>
                <span>University has recognized affiliated colleges as research centres for collaborating and exploring the research programs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchCell;
