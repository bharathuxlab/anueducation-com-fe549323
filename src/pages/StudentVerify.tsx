import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, GraduationCap, User, Calendar, BookOpen, Languages, Hash, Award, FileText } from "lucide-react";

interface SubjectMark {
  subject: string;
  passedIn: string;
  maxMarks: number;
  secured: string;
}

interface StudentData {
  name: string;
  fatherName: string;
  hallTicketNumber: string;
  regNo: string;
  degree: string;
  specialization: string;
  passedOut: string;
  percentage: number;
  totalMarks: string;
  studyPeriod: string;
  language: string;
  group: string;
  status: string;
  semesters: { title: string; subjects: SubjectMark[] }[];
}

const MOCK_STUDENTS: Record<string, StudentData> = {
  A19RG89741: {
    name: "SALLA BHARATH KUMAR",
    fatherName: "SALLA PRASADA RAO",
    hallTicketNumber: "A19RG89741",
    regNo: "877654",
    degree: "BACHELOR OF SCIENCE <COMPUTERS>",
    specialization: "Computer Science",
    passedOut: "MAY, 2012",
    percentage: 81.0,
    totalMarks: "4400/3564",
    studyPeriod: "2009 - 2012",
    language: "FIRST (English)",
    group: "FIRST",
    status: "Passed",
    semesters: [
      {
        title: "FIRST YEAR — I Semester",
        subjects: [
          { subject: "ENGLISH - I", passedIn: "DEC - 2009", maxMarks: 100, secured: "78 P" },
          { subject: "MATHEMATICS - I", passedIn: "DEC - 2009", maxMarks: 100, secured: "82 P" },
          { subject: "PHYSICS - I", passedIn: "DEC - 2009", maxMarks: 50, secured: "45 P" },
          { subject: "BASICS OF COMPUTER SCIENCE - I", passedIn: "DEC - 2009", maxMarks: 100, secured: "80 P" },
          { subject: "ENVIRONMENTAL SCIENCE", passedIn: "DEC - 2009", maxMarks: 100, secured: "78 P" },
          { subject: "INTRODUCTION TO DIGITAL ELECTRONICS", passedIn: "DEC - 2009", maxMarks: 100, secured: "82 P" },
          { subject: "PHYSICS - I PRACTICAL", passedIn: "DEC - 2009", maxMarks: 50, secured: "44 P" },
          { subject: "CHEMISTRY - I", passedIn: "DEC - 2009", maxMarks: 100, secured: "76 P" },
        ],
      },
      {
        title: "FIRST YEAR — II Semester",
        subjects: [
          { subject: "ENGLISH - II", passedIn: "MAR - 2010", maxMarks: 100, secured: "79 P" },
          { subject: "MATHEMATICS - II", passedIn: "MAR - 2010", maxMarks: 100, secured: "83 P" },
          { subject: "PHYSICS - II", passedIn: "MAR - 2010", maxMarks: 50, secured: "44 P" },
          { subject: "HUMAN VALUES & PROFESSIONAL ETHICS", passedIn: "MAR - 2010", maxMarks: 100, secured: "76 P" },
          { subject: "HERITAGE AND CULTURE", passedIn: "MAR - 2010", maxMarks: 100, secured: "80 P" },
          { subject: "COMPUTER SCIENCE - II", passedIn: "MAR - 2010", maxMarks: 50, secured: "41 P" },
          { subject: "PHYSICS - II PRACTICAL", passedIn: "MAR - 2010", maxMarks: 50, secured: "44 P" },
          { subject: "CHEMISTRY - II", passedIn: "MAR - 2010", maxMarks: 50, secured: "41 P" },
        ],
      },
      {
        title: "SECOND YEAR — III Semester",
        subjects: [
          { subject: "ENGLISH - III", passedIn: "DEC - 2010", maxMarks: 100, secured: "76 P" },
          { subject: "MATHEMATICS - III", passedIn: "DEC - 2010", maxMarks: 100, secured: "85 P" },
          { subject: "PHYSICS - III", passedIn: "DEC - 2010", maxMarks: 50, secured: "46 P" },
          { subject: "NUMERICAL COMPUTING", passedIn: "DEC - 2010", maxMarks: 100, secured: "82 P" },
          { subject: "ENVIRONMENTAL STUDIES", passedIn: "DEC - 2010", maxMarks: 100, secured: "78 P" },
          { subject: "COMPUTER SCIENCE - III", passedIn: "DEC - 2010", maxMarks: 100, secured: "85 P" },
          { subject: "PHYSICS - III PRACTICAL", passedIn: "DEC - 2010", maxMarks: 50, secured: "45 P" },
          { subject: "COMPUTER SCIENCE - III PRACTICAL", passedIn: "DEC - 2010", maxMarks: 50, secured: "44 P" },
          { subject: "CHEMISTRY - III", passedIn: "DEC - 2010", maxMarks: 100, secured: "78 P" },
        ],
      },
      {
        title: "SECOND YEAR — IV Semester",
        subjects: [
          { subject: "ENGLISH - IV", passedIn: "MAR - 2011", maxMarks: 100, secured: "78 P" },
          { subject: "MATHEMATICS - IV", passedIn: "MAR - 2011", maxMarks: 100, secured: "82 P" },
          { subject: "PHYSICS - IV", passedIn: "MAR - 2011", maxMarks: 50, secured: "44 P" },
          { subject: "SCIENCE AND CIVILIZATION", passedIn: "MAR - 2011", maxMarks: 100, secured: "79 P" },
          { subject: "WAVE AND OPTICS", passedIn: "MAR - 2011", maxMarks: 100, secured: "80 P" },
          { subject: "COMPUTER SCIENCE - IV", passedIn: "MAR - 2011", maxMarks: 100, secured: "83 P" },
          { subject: "PHYSICS - IV PRACTICAL", passedIn: "MAR - 2011", maxMarks: 50, secured: "45 P" },
          { subject: "COMPUTER SCIENCE - IV PRACTICAL", passedIn: "MAR - 2011", maxMarks: 50, secured: "46 P" },
          { subject: "CHEMISTRY - IV", passedIn: "MAR - 2011", maxMarks: 100, secured: "77 P" },
        ],
      },
      {
        title: "THIRD YEAR — V Semester",
        subjects: [
          { subject: "MATHEMATICS - V", passedIn: "DEC - 2011", maxMarks: 100, secured: "82 P" },
          { subject: "NUMERICAL ANALYSIS", passedIn: "DEC - 2011", maxMarks: 100, secured: "80 P" },
          { subject: "ELEMENTS OF MODERN PHYSICS", passedIn: "DEC - 2011", maxMarks: 100, secured: "78 P" },
          { subject: "MATHEMATICAL PHYSICS", passedIn: "DEC - 2011", maxMarks: 100, secured: "81 P" },
          { subject: "OPERATING SYSTEMS", passedIn: "DEC - 2011", maxMarks: 100, secured: "80 P" },
          { subject: "CRYPTOGRAPHY", passedIn: "DEC - 2011", maxMarks: 100, secured: "78 P" },
          { subject: "OPERATING SYSTEMS PRACTICAL", passedIn: "DEC - 2011", maxMarks: 100, secured: "85 P" },
          { subject: "NUMERICAL METHODS PRACTICAL", passedIn: "DEC - 2011", maxMarks: 100, secured: "86 P" },
          { subject: "CRYPTOGRAPHY PRACTICAL", passedIn: "DEC - 2011", maxMarks: 50, secured: "44 P" },
          { subject: "ELECTRICAL CIRCUITS & NETWORK ANALYSIS PRACTICAL", passedIn: "DEC - 2011", maxMarks: 100, secured: "82 P" },
          { subject: "CHEMISTRY - V", passedIn: "DEC - 2011", maxMarks: 100, secured: "78 P" },
        ],
      },
      {
        title: "THIRD YEAR — VI Semester",
        subjects: [
          { subject: "LINEAR ALGEBRA", passedIn: "MAR - 2012", maxMarks: 100, secured: "84 P" },
          { subject: "MATRICES", passedIn: "MAR - 2012", maxMarks: 100, secured: "82 P" },
          { subject: "QUANTUM MECHANICS", passedIn: "MAR - 2012", maxMarks: 100, secured: "81 P" },
          { subject: "NUCLEAR & PARTICLE PHYSICS", passedIn: "MAR - 2012", maxMarks: 100, secured: "83 P" },
          { subject: "SOLID STATE PHYSICS", passedIn: "MAR - 2012", maxMarks: 100, secured: "80 P" },
          { subject: "INFORMATION SECURITY", passedIn: "MAR - 2012", maxMarks: 100, secured: "78 P" },
          { subject: "DATABASE APPLICATIONS", passedIn: "MAR - 2012", maxMarks: 100, secured: "76 P" },
          { subject: "LINEAR ALGEBRA PRACTICAL", passedIn: "MAR - 2012", maxMarks: 50, secured: "42 P" },
          { subject: "NUCLEAR & PARTICLE PHYSICS PRACTICAL", passedIn: "MAR - 2012", maxMarks: 100, secured: "85 P" },
          { subject: "SOLID STATE PHYSICS PRACTICAL", passedIn: "MAR - 2012", maxMarks: 100, secured: "83 P" },
          { subject: "INFORMATION SECURITY PRACTICAL", passedIn: "MAR - 2012", maxMarks: 100, secured: "80 P" },
          { subject: "COMPUTER NETWORK PRACTICAL", passedIn: "MAR - 2012", maxMarks: 100, secured: "78 P" },
          { subject: "CHEMISTRY PRACTICAL", passedIn: "MAR - 2012", maxMarks: 100, secured: "77 P" },
        ],
      },
    ],
  },
};

const StudentVerify = () => {
  const [hallTicket, setHallTicket] = useState("");
  const [result, setResult] = useState<StudentData | null>(null);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const trimmed = hallTicket.trim().toUpperCase();
    if (!trimmed) {
      setError("Please enter a hall ticket number");
      return;
    }
    setSearched(true);
    setError("");
    const found = MOCK_STUDENTS[trimmed] || null;
    setResult(found);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <h1 className="anu-section-title text-3xl">Student Verification</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Verify student credentials by entering the hall ticket number below.
        </p>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="anu-card p-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Hall Ticket Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hallTicket}
                onChange={(e) => setHallTicket(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Enter Hall Ticket Number"
                className="flex-1 border border-input rounded-md px-4 py-2 text-sm bg-background text-foreground uppercase"
              />
              <button
                onClick={handleSearch}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Search size={16} />
                Verify
              </button>
            </div>
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
          </div>
        </div>

        {/* Results */}
        {searched && result && (
          <div className="max-w-4xl mx-auto">
            <div className="anu-card p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold uppercase tracking-wide" style={{ color: "hsl(var(--anu-maroon))" }}>
                  ACHARYA NAGARJUNA UNIVERSITY
                </h2>
                <p className="text-sm text-muted-foreground">NAGARJUNA NAGAR - 525 510</p>
                <h3 className="text-lg font-bold mt-2 text-foreground">CONSOLIDATED MARKS MEMORANDUM</h3>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mt-2">
                  <GraduationCap size={18} />
                  Verified — {result.status}
                </div>
              </div>

              {/* Student Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 rounded-md" style={{ background: "hsl(var(--muted))" }}>
                <div className="flex items-start gap-3">
                  <User size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Transcript of</p>
                    <p className="font-bold text-foreground">{result.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hash size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Reg No</p>
                    <p className="font-bold text-foreground">{result.hallTicketNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Son/Daughter of</p>
                    <p className="font-bold text-foreground">{result.fatherName}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Languages</p>
                    <p className="font-bold text-foreground">{result.language}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Course</p>
                    <p className="font-bold text-foreground">{result.degree}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Group</p>
                    <p className="font-bold text-foreground">{result.group}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Period of Study</p>
                    <p className="font-bold text-foreground">{result.studyPeriod}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Month & Year of Passing</p>
                    <p className="font-bold text-foreground">{result.passedOut}</p>
                  </div>
                </div>
              </div>

              {/* Semester-wise Marks */}
              {result.semesters.map((sem, si) => (
                <div key={si} className="mb-6">
                  <h4 className="text-sm font-bold uppercase mb-2 px-2 py-1 rounded" style={{ background: "hsl(var(--anu-maroon))", color: "hsl(var(--primary-foreground))" }}>
                    {sem.title}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b-2" style={{ borderColor: "hsl(var(--border))" }}>
                          <th className="text-left py-1 px-2 font-semibold text-foreground">Subject</th>
                          <th className="text-left py-1 px-2 font-semibold text-foreground">Passed In</th>
                          <th className="text-center py-1 px-2 font-semibold text-foreground">Max</th>
                          <th className="text-center py-1 px-2 font-semibold text-foreground">Secured</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sem.subjects.map((sub, subi) => (
                          <tr key={subi} className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
                            <td className="py-1 px-2 text-foreground">{sub.subject}</td>
                            <td className="py-1 px-2 text-muted-foreground">{sub.passedIn}</td>
                            <td className="py-1 px-2 text-center text-foreground">{sub.maxMarks}</td>
                            <td className="py-1 px-2 text-center font-semibold text-foreground">{sub.secured}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="mt-4 p-4 rounded-md text-center" style={{ background: "hsl(var(--muted))" }}>
                <p className="text-sm font-bold text-foreground">
                  TOTAL MARKS: {result.totalMarks} — Percentage: {result.percentage}% (A)
                </p>
                <p className="text-sm font-semibold mt-1" style={{ color: "hsl(var(--anu-maroon))" }}>
                  Passed Degree of {result.degree} with Regd. No. {result.hallTicketNumber}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Passed languages in First Class in April, 2011 and Group in First Class in {result.passedOut}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: "hsl(var(--border))" }}>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <FileText size={12} /> NOTE: COMPUTER GENERATED DATA — FOR CONTROLLER OF EXAMINATIONS
                </p>
              </div>
            </div>
          </div>
        )}

        {searched && !result && (
          <div className="max-w-xl mx-auto text-center">
            <div className="anu-card p-8">
              <p className="text-destructive font-medium">No student record found for this hall ticket number.</p>
              <p className="text-sm text-muted-foreground mt-2">Please check the number and try again.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StudentVerify;