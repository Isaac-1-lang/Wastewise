import { useEffect, useState } from 'react';
import { MapPin, Recycle, Clock, Phone, User, Building, TrendingUp, Filter, X } from 'lucide-react';

const RwandaWasteMap = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced waste collection data with production metrics
  const wastePoints = [
    { 
      id: 1, 
      name: 'Nyarugenge Waste Hub', 
      district: 'Nyarugenge', 
      sector: 'Gitega', 
      coords: [-1.9477, 30.0567], 
      types: ['Recyclable wastes', 'Plastic', 'Paper', 'Metal'], 
      hours: 'Mon-Sat: 7:00 AM - 6:00 PM', 
      contact: '+250 788 123 456', 
      capacity: 'High', 
      status: 'Operational', 
      description: 'Central hub in Kigali for multiple waste streams.',
      manager: 'Rukundo Furaha Divin',
      monthlyCapacity: '500 tons',
      currentProduction: '425 tons',
      efficiency: '85%',
      employees: 45,
      established: '2018'
    },
    { 
      id: 2, 
      name: 'Gasabo Collection Point', 
      district: 'Gasabo', 
      sector: 'Kacyiru', 
      coords: [-1.9333, 30.0800], 
      types: ['Organic', 'Plastic'], 
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM', 
      contact: '+250 788 789 012', 
      capacity: 'Medium', 
      status: 'Operational', 
      description: 'Urban collection point for organic and plastic waste.',
      manager: 'Marie Mukiza',
      monthlyCapacity: '300 tons',
      currentProduction: '270 tons',
      efficiency: '90%',
      employees: 28,
      established: '2019'
    },
    { 
      id: 3, 
      name: 'Kicukiro Recycling Center', 
      district: 'Kicukiro', 
      sector: 'Niboye', 
      coords: [-1.9750, 30.1100], 
      types: ['Paper', 'Glass', 'Electronic'], 
      hours: 'Tue-Sun: 9:00 AM - 4:00 PM', 
      contact: '+250 788 345 678', 
      capacity: 'Medium', 
      status: 'Operational', 
      description: 'Recycling facility for paper, glass, and e-waste.',
      manager: 'Paul Kagame',
      monthlyCapacity: '280 tons',
      currentProduction: '245 tons',
      efficiency: '87%',
      employees: 32,
      established: '2020'
    },
    { 
      id: 4, 
      name: 'Huye Waste Station', 
      district: 'Huye', 
      sector: 'Ngoma', 
      coords: [-2.5967, 29.7400], 
      types: ['Organic', 'Plastic'], 
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM', 
      contact: '+250 788 901 234', 
      capacity: 'Medium', 
      status: 'Operational', 
      description: 'Southern collection point for community waste.',
      manager: 'Aline Niyitegeka',
      monthlyCapacity: '320 tons',
      currentProduction: '298 tons',
      efficiency: '93%',
      employees: 35,
      established: '2017'
    },
    { 
      id: 5, 
      name: 'Muhanga Depot', 
      district: 'Muhanga', 
      sector: 'Nyamabuye', 
      coords: [-2.0800, 29.7500], 
      types: ['Organic', 'Metal'], 
      hours: 'Mon-Fri: 8:00 AM - 3:00 PM', 
      contact: '+250 788 567 890', 
      capacity: 'Low', 
      status: 'Operational', 
      description: 'Depot for agricultural and metal waste.',
      manager: 'Emmanuel Hakizimana',
      monthlyCapacity: '150 tons',
      currentProduction: '135 tons',
      efficiency: '90%',
      employees: 18,
      established: '2019'
    },
    { 
      id: 6, 
      name: 'Rubavu Waste Point', 
      district: 'Rubavu', 
      sector: 'Gisenyi', 
      coords: [-1.6833, 29.2833], 
      types: ['Plastic', 'Glass'], 
      hours: 'Tue-Sun: 9:00 AM - 4:00 PM', 
      contact: '+250 788 234 567', 
      capacity: 'Low', 
      status: 'Limited', 
      description: 'Station near Lake Kivu for plastic and glass.',
      manager: 'Clare Akamanzi',
      monthlyCapacity: '120 tons',
      currentProduction: '85 tons',
      efficiency: '71%',
      employees: 15,
      established: '2021'
    }
  ];

  const getCapacityColor = (capacity) => {
    switch(capacity) {
      case 'High': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Operational': return 'text-green-600';
      case 'Limited': return 'text-yellow-600';
      case 'Maintenance': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const filteredPoints = wastePoints.filter(point => {
    const matchesSearch = point.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         point.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || point.capacity.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalCapacity = wastePoints.reduce((sum, point) => 
    sum + parseInt(point.monthlyCapacity), 0
  );
  
  const totalProduction = wastePoints.reduce((sum, point) => 
    sum + parseInt(point.currentProduction), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 p-4">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500 rounded-xl">
              <Recycle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Rwanda Waste Collection Dashboard</h1>
              <p className="text-gray-600">Comprehensive waste management network across Rwanda</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">{wastePoints.length}</div>
            <div className="text-sm text-gray-600">Active Centers</div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-6 bg-gray-50 p-5 rounded-2xl overflow-hidden" style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)' }}>
          <div className="scroll-left flex gap-6" style={{
            animation: 'scroll-left 20s linear infinite',
            whiteSpace: 'nowrap'
          }}>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Capacity</p>
                  <p className="text-2xl font-bold">{totalCapacity.toLocaleString()} tons/month</p>
                </div>
                <TrendingUp className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-emerald-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Current Production</p>
                  <p className="text-2xl font-bold">{totalProduction.toLocaleString()} tons/month</p>
                </div>
                <Building className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Avg Efficiency</p>
                  <p className="text-2xl font-bold">{Math.round((totalProduction / totalCapacity) * 100)}%</p>
                </div>
                <Recycle className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-700 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Employees</p>
                  <p className="text-2xl font-bold">{wastePoints.reduce((sum, p) => sum + p.employees, 0)}</p>
                </div>
                <User className="w-8 h-8 opacity-80" />
              </div>
            </div>
            {/* Duplicate cards for seamless loop */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Capacity</p>
                  <p className="text-2xl font-bold">{totalCapacity.toLocaleString()} tons/month</p>
                </div>
                <TrendingUp className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-emerald-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Current Production</p>
                  <p className="text-2xl font-bold">{totalProduction.toLocaleString()} tons/month</p>
                </div>
                <Building className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Avg Efficiency</p>
                  <p className="text-2xl font-bold">{Math.round((totalProduction / totalCapacity) * 100)}%</p>
                </div>
                <Recycle className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-700 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Employees</p>
                  <p className="text-2xl font-bold">{wastePoints.reduce((sum, p) => sum + p.employees, 0)}</p>
                </div>
                <User className="w-8 h-8 opacity-80" />
              </div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Capacity</p>
                  <p className="text-2xl font-bold">{totalCapacity.toLocaleString()} tons/month</p>
                </div>
                <TrendingUp className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-emerald-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Current Production</p>
                  <p className="text-2xl font-bold">{totalProduction.toLocaleString()} tons/month</p>
                </div>
                <Building className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Avg Efficiency</p>
                  <p className="text-2xl font-bold">{Math.round((totalProduction / totalCapacity) * 100)}%</p>
                </div>
                <Recycle className="w-8 h-8 opacity-80" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-700 to-green-900 rounded-xl p-4 text-white flex-shrink-0" style={{ width: '280px' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Employees</p>
                  <p className="text-2xl font-bold">{wastePoints.reduce((sum, p) => sum + p.employees, 0)}</p>
                </div>
                <User className="w-8 h-8 opacity-80" />
              </div>
                      </div>
                      
                  </div>
                  
                  
              </div>
              

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name or district..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="all">All Capacities</option>
              <option value="high">High Capacity</option>
              <option value="medium">Medium Capacity</option>
              <option value="low">Low Capacity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Map View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6 h-96 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 opacity-50"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Visual representation of all waste collection points across Rwanda
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">High Capacity</span>
                    </div>
                    <span className="text-gray-600">500+ tons/month</span>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">Medium Capacity</span>
                    </div>
                    <span className="text-gray-600">200-499 tons/month</span>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-medium">Low Capacity</span>
                    </div>
                    <span className="text-gray-600">Below 200 tons/month</span>
                  </div>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="font-medium">Under Maintenance</span>
                    </div>
                    <span className="text-gray-600">Temporarily closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Points List */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Collection Points</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                onClick={() => setSelectedPoint(point)}
                className="p-4 border border-gray-100 rounded-xl hover:bg-emerald-50 cursor-pointer transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${getCapacityColor(point.capacity)}`}></div>
                      <h4 className="font-semibold text-gray-800">{point.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{point.district} - {point.sector}</p>
                    <p className="text-xs text-gray-500">{point.types.slice(0, 2).join(', ')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-emerald-600">{point.currentProduction}</p>
                    <p className="text-xs text-gray-500">monthly</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedPoint && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${getCapacityColor(selectedPoint.capacity)}`}></div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedPoint.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedPoint(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedPoint.district}, {selectedPoint.sector}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedPoint.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedPoint.manager}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedPoint.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Waste Types Handled</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPoint.types.map((type, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Production Metrics */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Production Metrics</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Monthly Capacity</span>
                          <span className="font-semibold text-emerald-700">{selectedPoint.monthlyCapacity}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Current Production</span>
                          <span className="font-semibold text-blue-700">{selectedPoint.currentProduction}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Efficiency Rate</span>
                          <span className="font-semibold text-purple-700">{selectedPoint.efficiency}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Employees</span>
                          <span className="font-semibold text-orange-700">{selectedPoint.employees}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Status</h4>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getCapacityColor(selectedPoint.capacity)}`}></div>
                      <span className={`font-medium ${getStatusColor(selectedPoint.status)}`}>
                        {selectedPoint.status}
                      </span>
                      <span className="text-sm text-gray-500">• Est. {selectedPoint.established}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-700">{selectedPoint.description}</p>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-emerald-500 text-white py-3 px-6 rounded-xl hover:bg-emerald-600 transition-colors font-medium">
                  Contact Center
                </button>
                <button className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors font-medium">
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RwandaWasteMap;