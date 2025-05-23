import { FaUsers, FaInbox, FaCheckCircle, FaHandshake } from "react-icons/fa";
import OverviewCard from "../components/dashboard/OverviewCards";
import CarouselTables from "../components/dashboard/CompaniesTable";
import GarbageChart from "../components/dashboard/graph";
import Footer from "../components/Footer";
import RwandaMap from "./CollectionPoints";
import RwandaWasteMap from "../components/dashboard/MapView";
import ActivityLog from "../components/dashboard/NotificationsPanel";
function Dashboard() {
    return (
   
      <>
        <RwandaWasteMap />
        <GarbageChart />
       <Footer />
      </>    
  
  );
}

export default Dashboard;
