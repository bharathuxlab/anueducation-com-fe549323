import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, GraduationCap, User, Calendar, BookOpen, Languages, Hash, FileText, ShieldCheck, Printer } from "lucide-react";
import anuLogo from "@/assets/anu-logo.png";
import studentPhoto from "@/assets/student-photo.png";
import { MOCK_STUDENTS, type StudentData } from "@/data/studentData";

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

      {/* Hero Banner */}
      <div className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--anu-maroon)), hsl(var(--anu-dark)))" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={anuLogo} alt="ANU Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wide">
                ACHARYA NAGARJUNA UNIVERSITY
              </h1>
              <p className="text-white/70 text-sm">NAGARJUNA NAGAR — 522 510, Guntur, Andhra Pradesh</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-6 py-2 rounded-full mt-2">
            <ShieldCheck size={20} className="text-[hsl(var(--anu-gold))]" />
            <span className="text-white font-semibold text-lg">Student Verification Portal</span>
          </div>
          <p className="text-white/60 mt-3 text-sm max-w-lg mx-auto">
            Verify student credentials and academic records by entering the hall ticket number below.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-10 -mt-8 relative z-20">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
            <label className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Search size={16} className="text-[hsl(var(--anu-maroon))]" />
              Enter Hall Ticket Number
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={hallTicket}
                onChange={(e) => setHallTicket(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="e.g. A19RG89741"
                className="flex-1 border-2 border-border rounded-xl px-5 py-3 text-base bg-background text-foreground uppercase font-medium tracking-wider focus:border-[hsl(var(--anu-maroon))] focus:outline-none transition-colors"
              />
              <button
                onClick={handleSearch}
                className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-all flex items-center gap-2 hover:shadow-lg active:scale-95"
                style={{ background: "linear-gradient(135deg, hsl(var(--anu-maroon)), hsl(var(--anu-red)))" }}
              >
                <Search size={18} />
                Verify
              </button>
            </div>
            {error && <p className="text-destructive text-sm mt-3 font-medium">{error}</p>}
          </div>
        </div>

        {/* Results */}
        {searched && result && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              {/* Certificate Header */}
              <div className="p-8 text-center border-b-2" style={{ borderColor: "hsl(var(--anu-gold))", background: "linear-gradient(180deg, hsl(var(--anu-maroon) / 0.03), transparent)" }}>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <img src={anuLogo} alt="ANU Logo" className="h-20 w-20 object-contain" />
                  <div>
                    <h2 className="text-2xl font-heading font-bold tracking-wide" style={{ color: "hsl(var(--anu-maroon))" }}>
                      ACHARYA NAGARJUNA UNIVERSITY
                    </h2>
                    <p className="text-muted-foreground text-sm">(Established by Govt. of A.P. Act No. 29 of 1976)</p>
                    <p className="text-muted-foreground text-xs">NAGARJUNA NAGAR — 522 510, Guntur Dist., Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="mt-4 inline-block px-6 py-2 rounded-lg" style={{ background: "linear-gradient(135deg, hsl(var(--anu-maroon)), hsl(var(--anu-red)))" }}>
                  <h3 className="text-lg font-bold text-white tracking-wider">CONSOLIDATED MARKS MEMORANDUM</h3>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 px-5 py-2 rounded-full text-sm font-semibold">
                  <ShieldCheck size={18} />
                  Verified — {result.status}
                </div>
              </div>

              {/* Student Info with Photo */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  {/* Photo */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-36 h-44 rounded-xl overflow-hidden border-4 shadow-lg" style={{ borderColor: "hsl(var(--anu-maroon))" }}>
                      <img src={studentPhoto} alt={result.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">{result.hallTicketNumber}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-muted/50 border border-border">
                    <InfoField icon={<User size={15} />} label="Name of the Student" value={result.name} />
                    <InfoField icon={<Hash size={15} />} label="Registration No." value={result.regNo} />
                    <InfoField icon={<User size={15} />} label="Son / Daughter of" value={result.fatherName} />
                    <InfoField icon={<Languages size={15} />} label="Languages" value={result.language} />
                    <InfoField icon={<GraduationCap size={15} />} label="Course / Degree" value={result.degree} />
                    <InfoField icon={<BookOpen size={15} />} label="Group" value={result.group} />
                    <InfoField icon={<Calendar size={15} />} label="Period of Study" value={result.studyPeriod} />
                    <InfoField icon={<Calendar size={15} />} label="Month & Year of Passing" value={result.passedOut} />
                  </div>
                </div>

                {/* Semester-wise Marks */}
                {result.semesters.map((sem, si) => (
                  <div key={si} className="mb-6">
                    <h4
                      className="text-sm font-bold uppercase mb-0 px-4 py-2.5 rounded-t-lg text-white tracking-wide"
                      style={{ background: "linear-gradient(90deg, hsl(var(--anu-maroon)), hsl(var(--anu-red)))" }}
                    >
                      {sem.title}
                    </h4>
                    <div className="overflow-x-auto border border-t-0 border-border rounded-b-lg">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted/60">
                            <th className="text-left py-2.5 px-4 font-semibold text-foreground text-xs uppercase tracking-wide">Subject</th>
                            <th className="text-left py-2.5 px-4 font-semibold text-foreground text-xs uppercase tracking-wide">Passed In</th>
                            <th className="text-center py-2.5 px-4 font-semibold text-foreground text-xs uppercase tracking-wide">Max</th>
                            <th className="text-center py-2.5 px-4 font-semibold text-foreground text-xs uppercase tracking-wide">Secured</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sem.subjects.map((sub, subi) => (
                            <tr key={subi} className="border-t border-border hover:bg-muted/30 transition-colors">
                              <td className="py-2 px-4 text-foreground font-medium">{sub.subject}</td>
                              <td className="py-2 px-4 text-muted-foreground">{sub.passedIn}</td>
                              <td className="py-2 px-4 text-center text-foreground">{sub.maxMarks}</td>
                              <td className="py-2 px-4 text-center font-bold" style={{ color: "hsl(var(--anu-maroon))" }}>{sub.secured}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}

                {/* Total Summary */}
                <div className="mt-6 p-6 rounded-xl text-center border-2" style={{ borderColor: "hsl(var(--anu-gold))", background: "hsl(var(--anu-gold) / 0.05)" }}>
                  <p className="text-lg font-bold text-foreground">
                    TOTAL MARKS: <span style={{ color: "hsl(var(--anu-maroon))" }}>{result.totalMarks}</span> — Percentage: <span style={{ color: "hsl(var(--anu-maroon))" }}>{result.percentage}%</span> (A)
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: "hsl(var(--anu-maroon))" }}>
                    Passed Degree of {result.degree} with Regd. No. {result.hallTicketNumber}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Passed languages in First Class in April, 2011 and Group in First Class in {result.passedOut}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <FileText size={12} /> COMPUTER GENERATED DATA — CONTROLLER OF EXAMINATIONS
                  </p>
                  <button
                    onClick={() => window.print()}
                    className="text-xs flex items-center gap-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-muted-foreground"
                  >
                    <Printer size={12} /> Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {searched && !result && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-10">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-amber-600" />
              </div>
              <p className="font-bold text-lg text-foreground">Record Not Found in Our Database</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                We couldn't find a student record matching this hall ticket number in our current database. <strong className="text-foreground">Don't worry — this does not mean the student does not exist.</strong> Our database is being updated regularly, and some records may not yet be available online.
              </p>
              <div className="mt-6 p-5 rounded-xl bg-muted/50 border border-border text-left space-y-3">
                <p className="text-sm font-semibold text-foreground">Need help? Contact us directly:</p>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-primary shrink-0" />
                  <a href="mailto:registrar@anueducation.in" className="text-primary hover:underline">registrar@anueducation.in</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-primary shrink-0" />
                  <a href="mailto:registrar@acharya-nagarjuna-university.org" className="text-primary hover:underline">registrar@acharya-nagarjuna-university.org</a>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Please include your full name, hall ticket number, and degree details in your email for faster assistance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const InfoField = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 shrink-0" style={{ color: "hsl(var(--anu-maroon))" }}>{icon}</span>
    <div>
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground font-medium">{label}</p>
      <p className="font-bold text-foreground text-sm">{value}</p>
    </div>
  </div>
);

export default StudentVerify;
