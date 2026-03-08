import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sandhyaCole from "@/assets/sandhya-cole.png";

const RDCell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-anu-maroon mb-8 border-b-2 border-anu-red pb-2">
          Research & Development Cell
        </h1>

        {/* Director Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-64 shrink-0">
            <img
              src={sandhyaCole}
              alt="Prof. Sandhya Cole"
              className="w-full rounded-lg shadow-md object-cover"
            />
            <div className="mt-3 text-center">
              <h3 className="text-lg font-bold text-anu-maroon">Prof. Sandhya Cole</h3>
              <p className="text-sm text-muted-foreground">
                Director, Research & Development Cell
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {/* Vision */}
            <div>
              <h2 className="text-xl font-bold text-anu-maroon mb-2">Vision</h2>
              <p className="text-foreground leading-relaxed">
                To become a premier centre for ground breaking research, fostering a culture of collaboration and innovation that leads to transformative discoveries and meaningful societal impact.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-xl font-bold text-anu-maroon mb-2">Mission</h2>
              <p className="text-foreground leading-relaxed">
                Our mission is to excel in research across disciplines, encouraging interdisciplinary cooperation, advancing knowledge, nurturing emerging researchers, facilitating industry partnerships, creating societal solutions, upholding ethical standards, promoting global engagement, providing cutting-edge resources, and continuously enhancing our research ecosystem to contribute significantly to academia and society.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="prose max-w-none space-y-4 text-foreground leading-relaxed">
          <p>
            Acharya Nagarjuna University demonstrates a strong commitment to research, underpinned by a well-defined research policy applicable to all its constituent colleges, departments, PG centers, and affiliated colleges. This policy cultivates a conducive research environment and provides robust support through a structured research framework.
          </p>
          <p>
            The University places paramount importance on continually enhancing its research facilities to align with international standards. These enhancements are made possible through diverse financial resources, including extramural research grants, UGC-SAP, DST-FIST, MHRD, and other University grants.
          </p>
          <p>
            In terms of infrastructure, the University equips students and researchers with modern workstations endowed with essential software tools such as DELMIA, SIMULIA, CATIA for tasks encompassing data analysis, modelling, simulation, and other research endeavours. This enables researchers to effectively analyze their findings, collaborate seamlessly, publish their work, and pursue certifications.
          </p>
          <p>
            Leveraging funding opportunities from national agencies such as UGC-SAP and DST-FIST, the University proactively invests in the development of research infrastructure, procuring specialized equipment, software, and establishing centres of research excellence.
          </p>
          <p>
            Adhering to UGC norms, the University maintains stringent eligibility criteria for research guideship for faculty members. As part of the admission process, research scholars are admitted into the PhD program via the AP State Government Entrance Examination (APRCET), following guidelines established by APSCHE.
          </p>
          <p>
            To stimulate research engagement among faculty, the University offers seed money and research allowances, incentivizing participation in research activities and the publication of patents and articles in reputable journals.
          </p>
          <p>
            The institution demonstrates meticulous oversight of its research programs through the Departmental Research Committee (DRC), which oversees aspects including PhD program allocation, research topics, and pre-PhD coursework syllabi. Furthermore, the DRC evaluates the progress of research work undertaken by scholars.
          </p>
          <p>
            A dedicated Research and Development Cell reinforces the culture of research by actively promoting, coordinating, and recognizing research activities. This includes honouring individuals who receive accolades and recognition at state and central levels.
          </p>
          <p>
            The University extends financial support to faculty members to partake in, or organize, various conferences, workshops, and seminars, both nationally and internationally, fostering scholarly interaction and knowledge exchange.
          </p>
          <p>
            In a bid to uphold academic integrity, the University employs Turnitin software to meticulously assess and address plagiarism concerns in PhD theses before their final submission and subsequent evaluation by external examiners.
          </p>
          <p>
            In the realm of ethics, a dedicated Research Ethics Committee ensures the safeguarding of the dignity, rights, safety, and well-being of research participants, reflecting a principled approach to conducting research.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RDCell;
