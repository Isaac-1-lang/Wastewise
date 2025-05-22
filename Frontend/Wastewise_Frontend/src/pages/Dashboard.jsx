import { FaUsers, FaInbox, FaCheckCircle, FaHandshake } from "react-icons/fa";
import OverviewCard from "../components/dashboard/OverviewCards";
import CarouselTables from "../components/dashboard/CompaniesTable";
import GarbageChart from "../components/dashboard/graph";
import Footer from "../components/Footer";
import RwandaMap from "./CollectionPoints";
import ActivityLog from "../components/dashboard/NotificationsPanel";
function Dashboard() {
    return (
        <>
        <h1 className="text-1xl font-bold text-gray-900 mb-1 text-center">
  Dashboard
</h1>

    <div className="relative overflow-hidden bg-gray-100  mt-1 w-[97%] text-center mx-auto rounded-2xl shadow-md inner-shadow">
      <div className="flex gap-4 w-max scroll-left">
        {/* Duplicate cards for smooth infinite scroll */}
        <OverviewCard title="Total Users" value={134} icon={<FaUsers />} bgColor="bg-green-700" />
        <OverviewCard title="Total Requests" value={112} icon={<FaInbox />} bgColor="bg-green-800" />
        <OverviewCard title="Completed Requests" value={54} icon={<FaCheckCircle />} bgColor="bg-green-600" />
        <OverviewCard title="Total Partners" value={6} icon={<FaHandshake />} bgColor="bg-green-900" />

        {/* Duplicate again for continuous effect */}
        <OverviewCard title="Total Users" value={134} icon={<FaUsers />} bgColor="bg-green-700" />
        <OverviewCard title="Total Requests" value={112} icon={<FaInbox />} bgColor="bg-green-800" />
        <OverviewCard title="Completed Requests" value={54} icon={<FaCheckCircle />} bgColor="bg-green-600" />
        <OverviewCard title="Total Partners" value={6} icon={<FaHandshake />} bgColor="bg-green-900" />
      </div>
            </div>
           <div className="flex flex-col md:flex-row gap-6 p-6">
  <div className="w-full md:w-1/2 mt--6">
                    <CarouselTables />
                    <RwandaMap />
                    <ActivityLog/>
  </div>
  <div className="w-full md:w-1/2">
    <GarbageChart />
  </div>
</div>
 
            <Footer />
            
    </>
  );
}

export default Dashboard;
