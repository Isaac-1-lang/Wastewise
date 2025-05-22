function ActivityLog() {
  const activities = [
    { id: 1, action: "User Alice Johnson submitted a request", time: "3 hours ago" },
    { id: 2, action: "Request #112 status changed to Completed", time: "5 hours ago" },
    { id: 3, action: "New partner company Waste Wise added", time: "1 day ago" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map(({ id, action, time }) => (
          <li key={id} className="flex items-start space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-gray-800">{action}</p>
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ActivityLog;