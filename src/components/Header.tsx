import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
import anuLogo from "@/assets/anu-logo.png";
import azadiImg from "@/assets/azadi-mahotsav.png";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About ANU",
    href: "/about",
    children: [
      { label: "Profile", href: "/about" },
      { label: "History", href: "/about#history" },
      { label: "Location", href: "/about#location" },
      { label: "Vision & Mission", href: "/about#vision" },
    ],
  },
  {
    label: "Administration",
    href: "/administration",
    children: [
      { label: "Chancellor", href: "/chancellor" },
      { label: "Vice-Chancellor", href: "/vice-chancellor" },
      { label: "Registrar", href: "/registrar" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Courses Offered", href: "/academics" },
      { label: "Affiliated Colleges", href: "/academics#affiliated-colleges" },
      { label: "University Colleges", href: "/university-colleges" },
    ],
  },
  { label: "ANUDOA", href: "/anudoa" },
  { label: "R & D Cell", href: "/rd-cell" },
  {
    label: "Ranking",
    href: "/ranking",
    children: [
      { label: "Rankings Overview", href: "/ranking" },
      { label: "NIRF", href: "/ranking/nirf" },
      { label: "Green Metric Rankings", href: "/ranking/green-metric" },
      { label: "Impact Ranking", href: "/ranking/impact" },
      { label: "World University Ranking", href: "/ranking/world-university" },
    ],
  },
  {
    label: "Results",
    href: "/results",
    children: [
      { label: "PG and Professional courses", href: "/results" },
      { label: "UG", href: "/results?tab=ug" },
      { label: "B.Tech and B.Arch", href: "/results?tab=btech" },
      { label: "M.Tech", href: "/results?tab=mtech" },
      { label: "Pharmacy", href: "/results?tab=pharmacy" },
    ],
  },
  { label: "Placements Gallery", href: "/placements-gallery" },
  { label: "Student Verify", href: "/student-verify" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [pdfModal, setPdfModal] = useState<{ title: string; src: string } | null>(null);
  const [secondaryDropdown, setSecondaryDropdown] = useState<string | null>(null);
  const secondaryNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        secondaryNavRef.current &&
        !secondaryNavRef.current.contains(event.target as Node)
      ) {
        setSecondaryDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
    <header>
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="bg-[hsl(15,80%,60%)] px-4 py-2 flex items-center gap-2 text-primary-foreground text-sm font-medium whitespace-nowrap">
          <Mail size={16} />
          <span>Email Now : <a href="mailto:registrar@anueducation.in" className="font-bold hover:underline">registrar@anueducation.in</a></span>
        </div>
        <div className="flex-1 bg-[hsl(190,60%,30%)] px-4 py-2 flex items-center justify-center text-primary-foreground text-center">
          <p className="text-sm md:text-base font-bold leading-tight">
            Accredited by NAAC with "A+ Grade (With 3.46 Outstanding Score in Dual Mode Category - First in the State &amp; Country)"
          </p>
        </div>
        <div className="bg-[hsl(190,60%,30%)] px-4 py-2 flex items-center gap-3 justify-end">
          <a href="mailto:registrar@anueducation.in" className="text-primary-foreground hover:text-anu-gold transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* University Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={anuLogo} alt="ANU Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-wide text-anu-maroon uppercase">
                Acharya Nagarjuna University
              </h1>
              <p className="font-telugu text-lg text-anu-red">
                ఆచార్య నాగార్జున విశ్వవిద్యాలయం
              </p>
              <p className="text-xs text-muted-foreground">
                Accredited by NAAC with 'A' Grade | Nagarjuna Nagar, Guntur, A.P.
              </p>
            </div>
          </Link>
          <div className="hidden lg:flex items-center">
            <img src={azadiImg} alt="Azadi Ka Amrit Mahotsav" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Navigation — left aligned */}
      <nav className="bg-anu-nav relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <ul className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="anu-nav-link flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <ChevronDown size={12} />}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <ul className="absolute top-full left-0 bg-background shadow-lg rounded-b-md min-w-[200px] py-1 z-50 border border-border">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button
              className="lg:hidden p-2 text-primary-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-anu-nav border-t border-border/20">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-primary-foreground text-sm hover:bg-primary/20 border-b border-border/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-foreground border-t border-border/10" ref={secondaryNavRef}>
        <div className="container mx-auto px-4 overflow-x-auto overflow-y-visible">
          <ul className="flex items-center whitespace-nowrap min-w-max">
            {[
              { label: "R & D Cell", href: "/rd-cell" },
              { label: "Research Cell", href: "/research-cell" },
              { label: "NSS", href: "/nss" },
              { label: "ANU Grievances", href: "#" },
              {
                label: "ANU Policies",
                children: [
                  { label: "Consultancy Policy", pdf: "/documents/consultancy-policy.pdf" },
                  { label: "IT Policy", pdf: "/documents/it-policy.pdf" },
                  { label: "Research Policy" },
                  { label: "Plastic free Policy" },
                  { label: "Green Environment Policy" },
                ],
              },
              { label: "ANU Regulations", href: "#" },
              { label: "News Letters", href: "#" },
              { label: "Web Mail", href: "#" },
              { label: "ANU Radio 91.2", href: "#" },
              { label: "NCC", href: "#" },
              { label: "ELC", href: "#" },
              { label: "Others", href: "#" },
              { label: "SSR", href: "#" },
              { label: "Pensioner Details", href: "#" },
            ].map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setSecondaryDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                    className={`flex items-center gap-1 px-3 py-2 text-xs font-medium hover:text-background hover:bg-primary/20 transition-colors border-r border-background/10 ${
                      secondaryDropdown === item.label
                        ? "text-anu-red border-b-2 border-anu-red"
                        : "text-background/80"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={12} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-xs font-medium text-background/80 hover:text-background hover:bg-primary/20 transition-colors border-r border-background/10 last:border-r-0"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && secondaryDropdown === item.label && (
                  <ul className="absolute top-full left-0 bg-background shadow-lg min-w-[250px] z-50 border-l-4 border-l-anu-red border border-border">
                    {item.children.map((child) => {
                      const hasPdf = Boolean(child.pdf);

                      return (
                        <li key={child.label} className="border-b border-border last:border-b-0">
                          <button
                            type="button"
                            disabled={!hasPdf}
                            onClick={() => {
                              if (!hasPdf) return;
                              setPdfModal({ title: child.label, src: child.pdf });
                              setSecondaryDropdown(null);
                            }}
                            className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                              hasPdf
                                ? "text-foreground hover:bg-muted"
                                : "text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-anu-gold/10 border-b border-border overflow-hidden py-1">
        <div className="animate-marquee flex whitespace-nowrap">
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 M.Phil. Part-1/ Pre.Ph.D-2025 Exams Notification
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Advertisement for Research Project Fellowship
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Skill Training Programme for students
          </span>
          <span className="anu-marquee-item text-sm text-anu-maroon font-medium">
            📢 Applications invited for UG/PG Admissions 2025-26
          </span>
        </div>
      </div>
    </header>

      <Dialog open={!!pdfModal} onOpenChange={() => setPdfModal(null)}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{pdfModal?.title}</DialogTitle>
          </DialogHeader>
          {pdfModal && (
            <iframe
              src={pdfModal.src}
              className="w-full flex-1 h-full rounded border border-border"
              title={pdfModal.title}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;