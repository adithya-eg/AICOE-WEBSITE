import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sasha from "./pages/Sasha";
import AIAssistant from "./pages/AIAssistant";
import Jasmin from "./pages/Jasmin";
import JiraStoryGauge from "./pages/JiraStoryGauge";
import TextToSQL from "./pages/TextToSQL";
import AmplifyArena from "./pages/AmplifyArena";
import DocTrans from "./pages/DocTrans";
import InvoiceAssistant from "./pages/InvoiceAssistant";
import FeasibilityReportDetail from "./pages/FeasibilityReportDetail";
import BUInteractionDetail from "./pages/BUInteractionDetail";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sasha" element={<Sasha />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/jasmin" element={<Jasmin />} />
          <Route path="/jira-story-gauge" element={<JiraStoryGauge />} />
          <Route path="/text-to-sql" element={<TextToSQL />} />
          <Route path="/amplify-arena" element={<AmplifyArena />} />
          <Route path="/doc-trans" element={<DocTrans />} />
          <Route path="/invoice-assistant" element={<InvoiceAssistant />} />
          <Route path="/feasibility/:id" element={<FeasibilityReportDetail />} />
          <Route path="/bu-interaction/:id" element={<BUInteractionDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
