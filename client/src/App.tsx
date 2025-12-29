import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "@/hooks/use-theme";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Developers from "@/pages/developers";
import Company from "@/pages/company";
import CaseStudy from "@/pages/case-study";
import Login from "@/pages/login";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/developers" component={Developers} />
      <Route path="/company" component={Company} />
      <Route path="/case-study/uofsc-pilot" component={CaseStudy} />
      <Route path="/login" component={Login} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  useTheme(); // Initialize theme
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppContent;
