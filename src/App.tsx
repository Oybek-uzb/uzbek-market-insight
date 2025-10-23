import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Manufacturers from "./pages/Manufacturers";
import ImportCountries from "./pages/ImportCountries";
import ExportCountries from "./pages/ExportCountries";
import ImportedProducts from "./pages/ImportedProducts";
import ExportedProducts from "./pages/ExportedProducts";
import ImportUpload from "./pages/ImportUpload";
import ExportUpload from "./pages/ExportUpload";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/manufacturers" element={<AppLayout><Manufacturers /></AppLayout>} />
          <Route path="/import-countries" element={<AppLayout><ImportCountries /></AppLayout>} />
          <Route path="/export-countries" element={<AppLayout><ExportCountries /></AppLayout>} />
          <Route path="/imported-products" element={<AppLayout><ImportedProducts /></AppLayout>} />
          <Route path="/exported-products" element={<AppLayout><ExportedProducts /></AppLayout>} />
          <Route path="/import-upload" element={<AppLayout><ImportUpload /></AppLayout>} />
          <Route path="/export-upload" element={<AppLayout><ExportUpload /></AppLayout>} />
          <Route path="/ai-assistant" element={<AppLayout><AIAssistant /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
