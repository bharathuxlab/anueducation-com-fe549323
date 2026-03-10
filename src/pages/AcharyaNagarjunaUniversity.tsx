import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  GraduationCap, MapPin, BookOpen, FileText, ShieldCheck,
  Users, HelpCircle, ArrowRight, CheckCircle2, Building2,
  Globe, ClipboardList, Phone
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from "@/components/ui/accordion";
import anuLogo from "@/assets/anu-logo.png";
import nagarjunaStatue from "@/assets/nagarjuna-statue.png";

const faqData = [
  {
    question: "How to check Acharya Nagarjuna University results?",
    answer: "Students can check their ANU exam results by visiting the official Acharya Nagarjuna University website or the university's examination portal. Results are published semester-wise and can be accessed using your hall ticket number or registration number."
  },
  {
    question: "How to apply for ANU transcripts?",
    answer: "To apply for ANU transcripts, students need to submit a formal application to the university's examination branch along with copies of mark sheets, degree certificate, and a valid ID proof. You can also use online student services portals for faster processing."
  },
  {
    question: "How long does ANU transcript processing take?",
    answer: "Transcript processing at Acharya Nagarjuna University typically takes 15 to 30 working days depending on the type of transcript requested and the current workload at the examination branch. Expedited processing may be available for urgent requirements."
  },
  {
    question: "How to verify an Acharya Nagarjuna University degree?",
    answer: "Degree verification can be done by contacting the ANU examination branch directly or through authorized verification services. Employers and institutions can submit verification requests with the student's registration details for official confirmation."
  },
  {
    question: "What courses does Acharya Nagarjuna University offer?",
    answer: "ANU offers a wide range of programs including undergraduate degrees (B.A., B.Sc., B.Com., B.Tech), postgraduate programs (M.A., M.Sc., MBA, M.Tech), professional courses (B.Ed., LLB, B.Pharm), doctoral research (Ph.D., M.Phil), and distance education programs through its affiliated colleges."
  },
  {
    question: "Is Acharya Nagarjuna University NAAC accredited?",
    answer: "Yes, Acharya Nagarjuna University has been accredited with an A+ grade by the National Assessment and Accreditation Council (NAAC), reflecting its high standards in teaching, research, and infrastructure."
  },
  {
    question: "How many colleges are affiliated with ANU?",
    answer: "Acharya Nagarjuna University has over 400 affiliated colleges spread across the districts of Guntur, Prakasam, and Palnadu in Andhra Pradesh, making it one of the largest affiliating universities in the state."
  },
  {
    question: "Where is Acharya Nagarjuna University located?",
    answer: "Acharya Nagarjuna University is located at Nagarjuna Nagar, Guntur district, Andhra Pradesh, India. The campus is situated on National Highway 16 between Vijayawada and Guntur, approximately 12 km from Guntur city."
  },
  {
    question: "Can I get ANU transcripts for studying abroad?",
    answer: "Yes, ANU provides official transcripts that are accepted by universities worldwide. Students planning to study abroad can request sealed transcripts sent directly to the foreign university or obtain attested copies for their visa and admission applications."
  },
  {
    question: "What documents are needed for ANU degree verification?",
    answer: "For degree verification, you typically need copies of your degree certificate, consolidated marks memorandum, hall tickets, a government-issued ID proof, and an authorization letter if a third party is requesting the verification on your behalf."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const AcharyaNagarjunaUniversity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Acharya Nagarjuna University | Results & Transcripts</title>
        <meta
          name="description"
          content="Acharya Nagarjuna University student guide – check ANU results, apply for transcripts, degree verification, courses & support services."
        />
        <meta name="keywords" content="Acharya Nagarjuna University, ANU transcripts, ANU results, Acharya Nagarjuna University degree verification, ANU student services, ANU exam results, ANU courses, ANU Guntur" />
        <link rel="canonical" href="https://anueducation.com/acharya-nagarjuna-university" />

        {/* Open Graph */}
        <meta property="og:title" content="Acharya Nagarjuna University – Complete Student Guide" />
        <meta property="og:description" content="Everything students need to know about Acharya Nagarjuna University – results, transcripts, degree verification, courses, and academic support." />
        <meta property="og:url" content="https://anueducation.com/acharya-nagarjuna-university" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="ANU Education" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acharya Nagarjuna University – Complete Student Guide" />
        <meta name="twitter:description" content="Check ANU results, apply for transcripts, verify degrees, and explore courses at Acharya Nagarjuna University." />

        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--anu-maroon)), hsl(var(--anu-dark)))" }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative z-10 container mx-auto px-4">
          <img src={anuLogo} alt="Acharya Nagarjuna University Logo" className="h-20 md:h-24 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight max-w-4xl mx-auto">
            Acharya Nagarjuna University – Complete Student Guide
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Your one-stop resource for ANU results, transcripts, degree verification, courses, and student support services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">

        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-14 space-y-4">
          <p className="text-foreground text-lg leading-relaxed">
            <strong>Acharya Nagarjuna University (ANU)</strong> is one of the most prominent state universities in Andhra Pradesh, India. Established in 1976 and accredited with an <strong>A+ grade by NAAC</strong>, ANU serves thousands of students across multiple disciplines. Whether you're a current student checking your <strong>ANU exam results</strong>, a graduate applying for <strong>ANU transcripts</strong>, or an employer seeking <strong>Acharya Nagarjuna University degree verification</strong>, this comprehensive guide provides everything you need to know about Acharya Nagarjuna University and its student services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every year, lakhs of students search online for Acharya Nagarjuna University information — from checking semester results to requesting transcripts for overseas education. This page covers all the essential ANU student services including <Link to="/academics" className="text-primary font-semibold hover:underline">academic information</Link>, exam updates, document processing, and <Link to="/student-verify" className="text-primary font-semibold hover:underline">student verification services</Link>. For details on university governance, visit the <Link to="/administration" className="text-primary font-semibold hover:underline">administration</Link> section.
          </p>
        </div>

        {/* Section 1: About */}
        <section className="mb-14" id="about">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 size={22} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">About Acharya Nagarjuna University</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-sm" />
                <img src={nagarjunaStatue} alt="Acharya Nagarjuna Statue at ANU campus" className="relative w-full max-w-xs mx-auto rounded-xl shadow-xl" />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-foreground leading-relaxed">
                Acharya Nagarjuna University is a state university located at <strong>Nagarjuna Nagar, Guntur, Andhra Pradesh</strong>. Named after the great Buddhist philosopher Acharya Nagarjuna, the university was established through Act 43 of the Andhra Pradesh State Legislature. Spread over <strong>293 acres on National Highway 16</strong> between Vijayawada and Guntur, the university has grown to become a leading institution of higher learning in South India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The university plays a <strong>vital role in the education landscape of Andhra Pradesh</strong>, with over 400 affiliated colleges across the districts of Guntur, Prakasam, and Palnadu. ANU offers instruction in 68 UG and PG programs across six campus colleges with a campus student strength of over 5,000.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With programs spanning Arts, Science, Commerce, Engineering, Medicine, Law, Education, and professional courses, Acharya Nagarjuna University caters to diverse academic interests and career paths. The university's commitment to quality education is reflected in its <strong>NAAC A+ accreditation</strong>.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  <MapPin size={14} /> Guntur, AP
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                  <GraduationCap size={14} /> NAAC A+
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent">
                  <Globe size={14} /> Est. 1976
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Courses Offered */}
        <section className="mb-14" id="courses">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
              <BookOpen size={22} className="text-secondary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">Courses Offered at ANU</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Acharya Nagarjuna University offers a comprehensive range of academic programs to cater to the diverse educational needs of students. Here's an overview of the courses available:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Undergraduate Programs",
                icon: <GraduationCap size={20} />,
                items: ["B.A. (Arts)", "B.Sc. (Science)", "B.Com. (Commerce)", "B.Tech (Engineering)", "BBA (Business Administration)", "BCA (Computer Applications)", "B.Pharm (Pharmacy)", "B.Ed. (Education)"],
                accent: "primary"
              },
              {
                title: "Postgraduate Programs",
                icon: <BookOpen size={20} />,
                items: ["M.A. (Arts)", "M.Sc. (Science)", "M.Com. (Commerce)", "M.Tech (Engineering)", "MBA (Business Administration)", "MCA (Computer Applications)", "M.Pharm (Pharmacy)", "M.Ed. (Education)"],
                accent: "secondary"
              },
              {
                title: "Professional Programs",
                icon: <ClipboardList size={20} />,
                items: ["LLB (Law)", "B.Ed. (Education)", "B.P.Ed. (Physical Education)", "B.Lib.I.Sc. (Library Science)", "Diploma Courses", "Certificate Programs"],
                accent: "accent"
              },
              {
                title: "Research & Distance Education",
                icon: <Globe size={20} />,
                items: ["Ph.D. (Doctoral Research)", "M.Phil. (Research)", "D.Sc. / D.Litt.", "Post Doctoral Research", "Distance UG Programs", "Distance PG Programs"],
                accent: "primary"
              }
            ].map((cat) => (
              <div key={cat.title} className="anu-card p-0 overflow-hidden">
                <div className={`bg-${cat.accent}/10 p-5 flex items-center gap-3`}>
                  <div className={`w-9 h-9 rounded-lg bg-${cat.accent}/20 flex items-center justify-center text-${cat.accent}`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg m-0">{cat.title}</h3>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For a detailed list of all academic programs, visit our <Link to="/academics" className="text-primary font-semibold hover:underline">Academics page</Link>.
          </p>
        </section>

        {/* Section 3: Results */}
        <section className="mb-14" id="results">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <ClipboardList size={22} className="text-accent" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">Acharya Nagarjuna University Results</h2>
          </div>
          <div className="anu-card p-6 md:p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              Checking <strong>ANU exam results</strong> is one of the most common searches by students of Acharya Nagarjuna University. The university publishes semester examination results on its official website and examination portal after each exam cycle.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">How to Check ANU Results</h3>
            <ul className="space-y-3">
              {[
                "Visit the official ANU examination portal or the university's results page.",
                "Select your program type (UG, PG, Professional, or B.Tech).",
                "Enter your hall ticket number or registration number.",
                "View and download your semester results and marks memorandum.",
                "Keep checking the portal regularly during result announcement periods."
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">Tips for ANU Result Updates</h3>
            <p className="text-muted-foreground leading-relaxed">
              ANU results are typically published within 30–45 days after examinations. Students should regularly check the official university website for notifications regarding result announcements, revaluation dates, and supplementary exam schedules. Bookmark the results page to stay updated on the latest <strong>ANU semester results</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you are unable to find your Acharya Nagarjuna University results online, you can also use our <Link to="/student-verify" className="text-primary font-semibold hover:underline">student verification services</Link> to access your academic records. For queries about specific programs, check our <Link to="/academics" className="text-primary font-semibold hover:underline">academic information</Link> page.
            </p>
          </div>
        </section>

        {/* Section 4: Transcripts */}
        <section className="mb-14" id="transcripts">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText size={22} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">ANU Transcripts</h2>
          </div>
          <div className="anu-card p-6 md:p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              <strong>Academic transcripts</strong> are official documents issued by Acharya Nagarjuna University that provide a detailed record of a student's academic performance across all semesters. They include subject-wise marks, grades, credits earned, and the overall GPA or percentage.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">Why Do Students Need ANU Transcripts?</h3>
            <ul className="space-y-3">
              {[
                "Higher education applications – Required for admission to foreign universities and postgraduate programs.",
                "Employment – Many employers request transcripts as part of the recruitment process.",
                "Immigration – Visa applications and credential evaluations often require official transcripts.",
                "Professional licensing – Certain professional bodies require academic records for certification."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">How to Request ANU Transcripts</h3>
            <p className="text-muted-foreground leading-relaxed">
              To request transcripts from Acharya Nagarjuna University, students typically need to submit an application to the examination branch along with copies of their mark sheets, degree certificate, and identification documents. The processing time is usually <strong>15 to 30 working days</strong>. For faster processing and guidance, students can use dedicated student service platforms.
            </p>
          </div>
        </section>

        {/* Section 5: Degree Verification */}
        <section className="mb-14" id="degree-verification">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck size={22} className="text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">ANU Degree Verification</h2>
          </div>
          <div className="anu-card p-6 md:p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              <strong>Degree verification</strong> is the process through which employers, educational institutions, and government agencies confirm the authenticity of a degree issued by Acharya Nagarjuna University. With the increasing need for credential authentication, ANU degree verification has become essential for career progression.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">Why Is Degree Verification Important?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Employers and institutions verify degrees to prevent fraud and ensure that candidates hold legitimate academic qualifications. This is particularly critical for international job applications, immigration processes, and higher education admissions.
            </p>
            <h3 className="font-display text-xl font-bold text-foreground mt-6">How to Request Verification</h3>
            <p className="text-muted-foreground leading-relaxed">
              Students and employers can request degree verification by contacting the ANU examination branch with the student's registration number and relevant documents. For convenient and streamlined verification, you can use our dedicated online service.
            </p>
            <Link
              to="/student-verify"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, hsl(var(--anu-red)), hsl(var(--anu-maroon)))" }}
            >
              Verify Your Degree Online <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Section 6: Student Support */}
        <section className="mb-14" id="student-support">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Users size={22} className="text-secondary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">Student Support Services</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Acharya Nagarjuna University and its affiliated service providers offer a range of support services to help students navigate their academic journey and post-graduation needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: <BookOpen size={20} />, title: "Academic Guidance", desc: "Expert counseling for course selection, program changes, and academic planning throughout your university journey." },
              { icon: <FileText size={20} />, title: "Document Support", desc: "Assistance with obtaining official documents including mark sheets, provisional certificates, and migration certificates." },
              { icon: <ClipboardList size={20} />, title: "Transcript Guidance", desc: "Step-by-step support for requesting and obtaining official ANU transcripts for education and employment purposes." },
              { icon: <ShieldCheck size={20} />, title: "Verification Help", desc: "Streamlined degree verification services for employers, institutions, and students requiring credential authentication." }
            ].map((svc) => (
              <div key={svc.title} className="anu-card p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="mb-14" id="faq">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <HelpCircle size={22} className="text-accent" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground m-0">Frequently Asked Questions</h2>
          </div>
          <div className="anu-card p-1 md:p-2">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                  <AccordionTrigger className="px-4 text-left text-foreground hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-14">
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(var(--anu-maroon)), hsl(var(--anu-dark)))" }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Need Transcript Support or Degree Verification?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Students needing transcript support, document verification, or academic record assistance can use our Student Verification service for quick and reliable help.
              </p>
              <Link
                to="/student-verify"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: "hsl(var(--anu-gold))", color: "hsl(var(--anu-dark))" }}
              >
                Go to Student Verification <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/student-verify" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
              <ShieldCheck size={16} /> Student Verification
            </Link>
            <Link to="/academics" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
              <BookOpen size={16} /> Academics
            </Link>
            <Link to="/administration" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
              <Building2 size={16} /> Administration
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors">
              <Phone size={16} /> Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AcharyaNagarjunaUniversity;
