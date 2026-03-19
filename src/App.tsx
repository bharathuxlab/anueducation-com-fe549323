import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PasscodeGate from "@/components/PasscodeGate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import About from "./pages/About";
import Administration from "./pages/Administration";
import Chancellor from "./pages/Chancellor";
import ViceChancellor from "./pages/ViceChancellor";
import Registrar from "./pages/Registrar";
import Academics from "./pages/Academics";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import StudentVerify from "./pages/StudentVerify";
import ANUDOA from "./pages/ANUDOA";
import UniversityColleges from "./pages/UniversityColleges";
import PlacementsGallery from "./pages/PlacementsGallery";
import Ranking from "./pages/Ranking";
import RankingNIRF from "./pages/RankingNIRF";
import RankingGreenMetric from "./pages/RankingGreenMetric";
import RankingImpact from "./pages/RankingImpact";
import RankingWorldUniversity from "./pages/RankingWorldUniversity";
import RDCell from "./pages/RDCell";
import ResearchCell from "./pages/ResearchCell";
import NSSCell from "./pages/NSSCell";
import AcharyaNagarjunaUniversity from "./pages/AcharyaNagarjunaUniversity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PasscodeGate>
          <Toaster />
          <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/chancellor" element={<Chancellor />} />
                <Route path="/vice-chancellor" element={<ViceChancellor />} />
                <Route path="/registrar" element={<Registrar />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/results" element={<Results />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/anudoa" element={<ANUDOA />} />
                <Route path="/university-colleges" element={<UniversityColleges />} />
                <Route path="/placements-gallery" element={<PlacementsGallery />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/ranking/nirf" element={<RankingNIRF />} />
                <Route path="/ranking/green-metric" element={<RankingGreenMetric />} />
                <Route path="/ranking/impact" element={<RankingImpact />} />
                <Route path="/ranking/world-university" element={<RankingWorldUniversity />} />
                <Route path="/student-verify" element={<StudentVerify />} />
                <Route path="/rd-cell" element={<RDCell />} />
                <Route path="/research-cell" element={<ResearchCell />} />
                <Route path="/nss" element={<NSSCell />} />
                <Route path="/acharya-nagarjuna-university" element={<AcharyaNagarjunaUniversity />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
        </PasscodeGate>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
