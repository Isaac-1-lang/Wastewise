import { FaRecycle } from "react-icons/fa";

function OverviewCard({ title, value, icon,bgColor }) {
  return (
    <div className="bg-gray-200 p-5 rounded-lg w-52 shadow-md flex  items-center gap-4 m-5">
  <div className={`${bgColor} rounded-full w-12 h-12 flex justify-center items-center text-white text-2xl`}>         {icon}
      </div>
      <div>
        <h3 className="text-gray-700 text-sm font-semibold">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default OverviewCard;