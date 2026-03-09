export interface SubjectMark {
  subject: string;
  passedIn: string;
  maxMarks: number;
  secured: string;
}

export interface StudentData {
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

export const MOCK_STUDENTS: Record<string, StudentData> = {
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
