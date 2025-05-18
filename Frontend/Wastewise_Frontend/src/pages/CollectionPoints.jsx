import { useState } from 'react';
import Navbar from '../components/Navbar';

function RwandaWasteCollectionPoints() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDistricts, setExpandedDistricts] = useState({});
  const [expandedSectors, setExpandedSectors] = useState({});
  const districts = [
    {
      id: 1,
      name: "Kigali City",
      sectors: [
        {
          id: 101,
          name: "Nyarugenge",
          villages: [
            { id: 1001, name: "Biryogo", collectionPoints: ["Biryogo Market", "Biryogo Health Center"] },
            { id: 1002, name: "Rwampara", collectionPoints: ["Rwampara Community Center"] }
          ]
        },
        {
          id: 102,
          name: "Gasabo",
          villages: [
            { id: 1003, name: "Remera", collectionPoints: ["Amahoro Stadium", "Remera Commercial Center"] },
            { id: 1004, name: "Kimironko", collectionPoints: ["Kimironko Market", "Kimironko Bus Park"] }
          ]
        },
        {
          id: 103,
          name: "Kicukiro",
          villages: [
            { id: 1005, name: "Gikondo", collectionPoints: ["Gikondo Industrial Park"] },
            { id: 1006, name: "Kagarama", collectionPoints: ["Kagarama School Ground"] }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Eastern Province",
      sectors: [
        {
          id: 201,
          name: "Kayonza",
          villages: [
            { id: 2001, name: "Mukarange", collectionPoints: ["Mukarange Central"] },
            { id: 2002, name: "Nyamirama", collectionPoints: ["Nyamirama Market"] }
          ]
        },
        {
          id: 202,
          name: "Rwamagana",
          villages: [
            { id: 2003, name: "Kigabiro", collectionPoints: ["Kigabiro Town Center"] },
            { id: 2004, name: "Muhazi", collectionPoints: ["Lake Muhazi Shore Point"] }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Northern Province",
      sectors: [
        {
          id: 301,
          name: "Musanze",
          villages: [
            { id: 3001, name: "Muhoza", collectionPoints: ["Muhoza Market", "District Office"] },
            { id: 3002, name: "Kinigi", collectionPoints: ["Volcanoes National Park Entrance"] }
          ]
        },
        {
          id: 302,
          name: "Burera",
          villages: [
            { id: 3003, name: "Cyanika", collectionPoints: ["Cyanika Border"] },
            { id: 3004, name: "Gahunga", collectionPoints: ["Gahunga Center"] }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Western Province",
      sectors: [
        {
          id: 401,
          name: "Rubavu",
          villages: [
            { id: 4001, name: "Gisenyi", collectionPoints: ["Gisenyi Beach", "Gisenyi Market"] },
            { id: 4002, name: "Rugerero", collectionPoints: ["Rugerero Community Center"] }
          ]
        },
        {
          id: 402,
          name: "Nyamasheke",
          villages: [
            { id: 4003, name: "Kagano", collectionPoints: ["Kagano Market"] },
            { id: 4004, name: "Mahembe", collectionPoints: ["Mahembe Center"] }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Southern Province",
      sectors: [
        {
          id: 501,
          name: "Huye",
          villages: [
            { id: 5001, name: "Ngoma", collectionPoints: ["University of Rwanda", "Ngoma Market"] },
            { id: 5002, name: "Tumba", collectionPoints: ["Tumba College"] }
          ]
        },
        {
          id: 502,
          name: "Nyanza",
          villages: [
            { id: 5003, name: "Busasamana", collectionPoints: ["King's Palace Museum"] },
            { id: 5004, name: "Rwabicuma", collectionPoints: ["Rwabicuma Center"] }
          ]
        }
      ]
    }
  ];

  // Toggle district expansion
  const toggleDistrict = (districtId) => {
    setExpandedDistricts({
      ...expandedDistricts,
      [districtId]: !expandedDistricts[districtId]
    });
  };

  // Toggle sector expansion
  const toggleSector = (sectorId) => {
    setExpandedSectors({
      ...expandedSectors,
      [sectorId]: !expandedSectors[sectorId]
    });
  };

  // Filter the data based on search term
  const filteredDistricts = districts.filter(district => {
    if (searchTerm === "") return true;
    
    // Check if district name matches
    if (district.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    
    // Check if any sector, village, or collection point matches
    return district.sectors.some(sector => {
      if (sector.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
      
      return sector.villages.some(village => {
        if (village.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
        
        return village.collectionPoints.some(point => 
          point.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    });
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="bg-emerald-500 text-white p-6 rounded-lg mb-6 text-center">
        <h1 className="text-2xl font-bold">Rwanda Waste Collection Points</h1>
        <p className="mt-2">Find waste collection points organized by district, sector and village</p>
      </header>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search locations or collection points..."
            className="flex-1 min-w-64 p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredDistricts.map(district => (
          <div key={district.id} className="border border-gray-300 rounded-lg overflow-hidden">
            <div 
              className="bg-emerald-500 text-white p-3 flex justify-between items-center cursor-pointer"
              onClick={() => toggleDistrict(district.id)}
            >
              <h2 className="text-lg font-semibold">{district.name}</h2>
              <span>{expandedDistricts[district.id] ? '▼' : '►'}</span>
            </div>
            
            {expandedDistricts[district.id] && (
              <div className="p-3 space-y-3">
                {district.sectors.map(sector => (
                  <div key={sector.id} className="border border-gray-300 rounded overflow-hidden">
                    <div 
                      className="bg-emerald-500 text-white p-2 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSector(sector.id)}
                    >
                      <h3 className="font-medium">{sector.name} Sector</h3>
                      <span>{expandedSectors[sector.id] ? '▼' : '►'}</span>
                    </div>
                    
                    {expandedSectors[sector.id] && (
                      <div className="p-2">
                        {sector.villages.map(village => (
                          <div key={village.id} className="mb-2 last:mb-0 p-2 bg-gray-50 rounded">
                            <h4 className="font-medium text-gray-800">{village.name} Village</h4>
                            <ul className="ml-6 mt-1 list-disc">
                              {village.collectionPoints.map((point, index) => (
                                <li key={index} className="text-gray-700">{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default RwandaWasteCollectionPoints;