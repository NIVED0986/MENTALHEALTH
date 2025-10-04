import DashboardHeader from '../DashboardHeader';

export default function DashboardHeaderExample() {
  return (
    <div className="relative min-h-[200px] bg-gradient-to-br from-purple-900 to-blue-900">
      <DashboardHeader
        onSettingsClick={() => console.log('Settings clicked')}
        onProfileClick={() => console.log('Profile clicked')}
        onLogout={() => console.log('Logout clicked')}
      />
    </div>
  );
}
