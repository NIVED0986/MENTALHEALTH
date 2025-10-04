import DashboardSidebar from '../DashboardSidebar';
import { Route, Switch } from 'wouter';

export default function DashboardSidebarExample() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
      <DashboardSidebar />
      <div className="ml-20 lg:ml-64 p-8">
        <Switch>
          <Route path="/dashboard/chatbot">
            <div className="text-white">Chatbot Page</div>
          </Route>
          <Route path="/dashboard/mood">
            <div className="text-white">Mood Tracker Page</div>
          </Route>
          <Route>
            <div className="text-white">Dashboard Home</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
