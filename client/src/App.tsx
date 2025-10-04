import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import ChatbotPage from "@/pages/ChatbotPage";
import MoodTrackerPage from "@/pages/MoodTrackerPage";
import HabitTrackerPage from "@/pages/HabitTrackerPage";
import VoiceJournalPage from "@/pages/VoiceJournalPage";
import TodoListPage from "@/pages/TodoListPage";
import ExercisePage from "@/pages/ExercisePage";
import SettingsPage from "@/pages/SettingsPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/chatbot" component={ChatbotPage} />
      <Route path="/dashboard/mood" component={MoodTrackerPage} />
      <Route path="/dashboard/habits" component={HabitTrackerPage} />
      <Route path="/dashboard/journal" component={VoiceJournalPage} />
      <Route path="/dashboard/todos" component={TodoListPage} />
      <Route path="/dashboard/exercise" component={ExercisePage} />
      <Route path="/dashboard/settings" component={SettingsPage} />
      <Route path="/dashboard/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
