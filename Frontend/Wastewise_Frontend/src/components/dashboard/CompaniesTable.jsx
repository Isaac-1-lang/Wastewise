import React, { useRef } from "react";

const companiesData = [
  { id: 1, name: "GreenCycle Ltd", location: "Kigali", contact: "info@greencycle.com" },
  { id: 2, name: "EcoTrash Co", location: "Butare", contact: "contact@ecotrash.co" },
  { id: 3, name: "Recycle Rwanda", location: "Musanze", contact: "hello@recyclerw.com" },
  { id: 4, name: "Waste Wise", location: "Kigali", contact: "support@wastewise.com" },
];

const users = [
  { name: "Alice Johnson", status: "Active", email: "alice@gmail.com" },
  { name: "Bob Smith", status: "Inactive", email: "bob@eyahhooo.com" },
  { name: "Charlie Brown", status: "Pending", email: "charlie@wui.com" },
  { name: "Darius Niyonkuru", status: "Pending", email: "daarus@gmail.com" }
];

const requests = [
  { id: "REQ001", status: "Completed" },
  { id: "REQ002", status: "Pending" },
  { id: "REQ003", status: "In Progress" },
];

function CarouselTables() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-6">
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 z-10"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800 z-10"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth w-full snap-x snap-mandatory"
      >
        {/* Users Table */}
        <div className="min-w-full snap-start p-5">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Users</h2>
            <table className="w-full table-auto">
              <thead className="bg-green-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr className="border-b hover:bg-green-50" key={index}>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td
                      className={`px-4 py-2 font-semibold ${
                        user.status === "Active"
                          ? "text-green-600"
                          : user.status === "Inactive"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {user.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Companies Table */}
        <div className="min-w-full snap-start p-5">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Partner Companies</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-100 text-gray-700">
                  <th className="py-2 px-4">No</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Contact Email</th>
                </tr>
              </thead>
              <tbody>
                {companiesData.map((company) => (
                  <tr key={company.id} className="border-b hover:bg-green-50">
                    <td className="py-2 px-4">{company.id}</td>
                    <td className="py-2 px-4 font-medium text-gray-800">{company.name}</td>
                    <td className="py-2 px-4">{company.location}</td>
                    <td className="py-2 px-4 text-blue-600 underline cursor-pointer">
                      {company.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Requests Table */}
        <div className="min-w-full snap-start p-5">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Requests</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-100 text-gray-700">
                  <th className="py-2 px-4">Request ID</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b hover:bg-green-50">
                    <td className="py-2 px-4">{request.id}</td>
                    <td
                      className={`py-2 px-4 font-semibold ${
                        request.status === "Completed"
                          ? "text-green-600"
                          : request.status === "Pending"
                          ? "text-yellow-500"
                          : "text-blue-500"
                      }`}
                    >
                      {request.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselTables;
