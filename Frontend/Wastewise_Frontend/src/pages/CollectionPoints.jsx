import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useNavigate } from 'react-router-dom';

const SearchControl = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: { countrycodes: 'RW' },
    });

    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      autoComplete: true,
      autoCompleteDelay: 200,
      showMarker: true,
      showPopup: true,
      marker: {
        icon: new L.Icon({
          iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
          shadowSize: [41, 41],
        }),
        draggable: false,
      },
      popupFormat: ({ query, result }) => `Searched: ${result.label}`,
      maxMarkers: 1,
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: true,
      searchLabel: 'Search for a location in Rwanda',
      keepResult: true,
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);

  return null;
};

const RwandaMap = () => {
  const navigate = useNavigate();

  const rwandaCenter = [-1.9403, 29.8739];

  const wastePoints = [
    { id: 1, name: 'Nyarugenge Waste Hub', district: 'Nyarugenge', sector: 'Gitega', coords: [-1.9477, 30.0567], types: ['Recyclable wastes', 'Plastic', 'Paper', 'Metal'], hours: 'Mon-Sat: 7:00 AM - 6:00 PM', contact: '+250 788 123 456', capacity: 'High', status: 'Operational', description: 'Central hub in Kigali for multiple waste streams.', manager: 'Rukundo Furaha Divin' },
    { id: 2, name: 'Gasabo Collection Point', district: 'Gasabo', sector: 'Kacyiru', coords: [-1.9333, 30.0800], types: ['Organic', 'Plastic'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 789 012', capacity: 'Medium', status: 'Operational', description: 'Urban collection point for organic and plastic waste.', manager: 'Marie Mukiza' },
    { id: 3, name: 'Kicukiro Recycling Center', district: 'Kicukiro', sector: 'Niboye', coords: [-1.9750, 30.1100], types: ['Paper', 'Glass', 'Electronic'], hours: 'Tue-Sun: 9:00 AM - 4:00 PM', contact: '+250 788 345 678', capacity: 'Medium', status: 'Operational', description: 'Recycling facility for paper, glass, and e-waste.', manager: 'Paul Kagame' },
    { id: 4, name: 'Huye Waste Station', district: 'Huye', sector: 'Ngoma', coords: [-2.5967, 29.7400], types: ['Organic', 'Plastic'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 901 234', capacity: 'Medium', status: 'Operational', description: 'Southern collection point for community waste.', manager: 'Aline Niyitegeka' },
    { id: 5, name: 'Muhanga Depot', district: 'Muhanga', sector: 'Nyamabuye', coords: [-2.0800, 29.7500], types: ['Organic', 'Metal'], hours: 'Mon-Fri: 8:00 AM - 3:00 PM', contact: '+250 788 567 890', capacity: 'Low', status: 'Operational', description: 'Depot for agricultural and metal waste.', manager: 'Emmanuel Hakizimana' },
    { id: 6, name: 'Rubavu Waste Point', district: 'Rubavu', sector: 'Gisenyi', coords: [-1.6833, 29.2833], types: ['Plastic', 'Glass'], hours: 'Tue-Sun: 9:00 AM - 4:00 PM', contact: '+250 788 234 567', capacity: 'Low', status: 'Limited', description: 'Station near Lake Kivu for plastic and glass.', manager: 'Clare Akamanzi' },
    { id: 7, name: 'Musanze Recycling Hub', district: 'Musanze', sector: 'Muhoza', coords: [-1.5087, 29.6347], types: ['Paper', 'Textile'], hours: 'Mon-Sat: 7:30 AM - 5:30 PM', contact: '+250 788 678 901', capacity: 'Medium', status: 'Operational', description: 'Eco-friendly center for textile and paper recycling.', manager: 'David Niyonzima' },
    { id: 8, name: 'Nyagatare Waste Depot', district: 'Nyagatare', sector: 'Nyagatare', coords: [-1.2967, 30.3267], types: ['Organic', 'Metal'], hours: 'Mon-Fri: 8:00 AM - 3:00 PM', contact: '+250 788 456 789', capacity: 'Low', status: 'Operational', description: 'Rural depot for agricultural waste.', manager: 'Grace Uwimana' },
    { id: 9, name: 'Rwamagana Collection', district: 'Rwamagana', sector: 'Kigabiro', coords: [-1.9500, 30.4333], types: ['Organic', 'Plastic'], hours: 'Mon-Sat: 7:00 AM - 5:00 PM', contact: '+250 788 123 789', capacity: 'Medium', status: 'Operational', description: 'Eastern collection point for organic and plastic waste.', manager: 'Joseph Rurangwa' },
    { id: 10, name: 'Kayonza Waste Point', district: 'Kayonza', sector: 'Mukarange', coords: [-1.9000, 30.5167], types: ['Paper', 'Glass'], hours: 'Tue-Sun: 8:00 AM - 4:00 PM', contact: '+250 788 234 890', capacity: 'Low', status: 'Operational', description: 'Recycling point for paper and glass waste.', manager: 'Annette Mukamana' },
    { id: 11, name: 'Gatsibo Recycling', district: 'Gatsibo', sector: 'Kiziguro', coords: [-1.6667, 30.3333], types: ['Organic', 'Textile'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 345 901', capacity: 'Medium', status: 'Operational', description: 'Textile and organic waste recycling center.', manager: 'Vincent Ndayisenga' },
    { id: 12, name: 'Kirehe Waste Station', district: 'Kirehe', sector: 'Kirehe', coords: [-2.2667, 30.6667], types: ['Plastic', 'Metal'], hours: 'Mon-Sat: 7:00 AM - 4:00 PM', contact: '+250 788 456 012', capacity: 'Low', status: 'Operational', description: 'Station for plastic and metal waste in the east.', manager: 'Rose Uwamariya' },
    { id: 13, name: 'Ngoma Collection', district: 'Ngoma', sector: 'Kibungo', coords: [-2.1667, 30.5333], types: ['Organic', 'Paper'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 567 123', capacity: 'Medium', status: 'Operational', description: 'Collection point for organic and paper waste.', manager: 'Peter Gasana' },
    { id: 14, name: 'Bugesera Waste Point', district: 'Bugesera', sector: 'Nyamata', coords: [-2.1333, 30.1000], types: ['Plastic', 'Electronic'], hours: 'Tue-Sun: 9:00 AM - 4:00 PM', contact: '+250 788 678 234', capacity: 'Low', status: 'Operational', description: 'E-waste and plastic collection near Nyamata.', manager: 'Christine Nyirahuku' },
    { id: 15, name: 'Gicumbi Recycling', district: 'Gicumbi', sector: 'Byumba', coords: [-1.5833, 30.0667], types: ['Organic', 'Textile'], hours: 'Mon-Sat: 7:30 AM - 5:00 PM', contact: '+250 788 789 345', capacity: 'Medium', status: 'Operational', description: 'Northern center for organic and textile waste.', manager: 'Jean Bosco Tuyisenge' },
    { id: 16, name: 'Rulindo Waste Depot', district: 'Rulindo', sector: 'Base', coords: [-1.7167, 29.9167], types: ['Metal', 'Paper'], hours: 'Mon-Fri: 8:00 AM - 3:00 PM', contact: '+250 788 890 456', capacity: 'Low', status: 'Operational', description: 'Depot for metal and paper recycling.', manager: 'Felicien Nkurunziza' },
    { id: 17, name: 'Burera Collection', district: 'Burera', sector: 'Ruhunde', coords: [-1.5000, 29.8333], types: ['Organic', 'Plastic'], hours: 'Mon-Sat: 7:00 AM - 5:00 PM', contact: '+250 788 901 567', capacity: 'Medium', status: 'Operational', description: 'Collection point in northern Rwanda.', manager: 'Agnes Mukarugema' },
    { id: 18, name: 'Nyabihu Waste Point', district: 'Nyabihu', sector: 'Mukamira', coords: [-1.6167, 29.5667], types: ['Glass', 'Paper'], hours: 'Tue-Sun: 8:00 AM - 4:00 PM', contact: '+250 788 012 678', capacity: 'Low', status: 'Operational', description: 'Western point for glass and paper waste.', manager: 'Patrick Habimana' },
    { id: 19, name: 'Ngororero Recycling', district: 'Ngororero', sector: 'Kageyo', coords: [-1.8667, 29.6333], types: ['Organic', 'Textile'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 123 789', capacity: 'Medium', status: 'Operational', description: 'Recycling center for organic and textile waste.', manager: 'Solange Uwimana' },
    { id: 20, name: 'Rusizi Waste Station', district: 'Rusizi', sector: 'Kamembe', coords: [-2.4833, 28.9000], types: ['Plastic', 'Metal'], hours: 'Mon-Sat: 7:00 AM - 4:00 PM', contact: '+250 788 234 890', capacity: 'Medium', status: 'Operational', description: 'Station near Lake Kivu for plastic and metal.', manager: 'Eric Niyitegeka' },
    { id: 21, name: 'Nyamasheke Collection', district: 'Nyamasheke', sector: 'Shangi', coords: [-2.3667, 29.1833], types: ['Organic', 'Paper'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 345 901', capacity: 'Low', status: 'Operational', description: 'Collection point for organic and paper waste.', manager: 'Marie Claire Uwase' },
    { id: 22, name: 'Ruhango Waste Point', district: 'Ruhango', sector: 'Mbuye', coords: [-2.2333, 29.7667], types: ['Plastic', 'Electronic'], hours: 'Tue-Sun: 9:00 AM - 4:00 PM', contact: '+250 788 456 012', capacity: 'Low', status: 'Operational', description: 'E-waste and plastic collection in the south.', manager: 'Thomas Rukundo' },
    { id: 23, name: 'Nyanza Recycling', district: 'Nyanza', sector: 'Busasamana', coords: [-2.3500, 29.7333], types: ['Organic', 'Textile'], hours: 'Mon-Sat: 7:30 AM - 5:00 PM', contact: '+250 788 567 123', capacity: 'Medium', status: 'Operational', description: 'Southern center for organic and textile waste.', manager: 'Jeanne d’Arc Mukamana' },
    { id: 24, name: 'Gisagara Waste Depot', district: 'Gisagara', sector: 'Ndora', coords: [-2.6167, 29.8333], types: ['Metal', 'Paper'], hours: 'Mon-Fri: 8:00 AM - 3:00 PM', contact: '+250 788 678 234', capacity: 'Low', status: 'Operational', description: 'Depot for metal and paper recycling.', manager: 'Alphonse Nkurikiyimana' },
    { id: 25, name: 'Nyaruguru Collection', district: 'Nyaruguru', sector: 'Kibeho', coords: [-2.6333, 29.5667], types: ['Organic', 'Plastic'], hours: 'Mon-Sat: 7:00 AM - 5:00 PM', contact: '+250 788 789 345', capacity: 'Medium', status: 'Operational', description: 'Southern collection point for organic and plastic waste.', manager: 'Esperance Mukarutesi' },
    { id: 26, name: 'Kamonyi Waste Point', district: 'Kamonyi', sector: 'Runda', coords: [-2.0000, 29.9167], types: ['Glass', 'Paper'], hours: 'Tue-Sun: 8:00 AM - 4:00 PM', contact: '+250 788 890 456', capacity: 'Low', status: 'Operational', description: 'Collection point for glass and paper waste.', manager: 'Pierre Niyonzima' },
    { id: 27, name: 'Rutsiro Recycling', district: 'Rutsiro', sector: 'Mushubati', coords: [-1.9000, 29.3667], types: ['Organic', 'Textile'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 901 567', capacity: 'Medium', status: 'Operational', description: 'Recycling center for organic and textile waste.', manager: 'Veronica Nyiransabimana' },
    { id: 28, name: 'Karongi Waste Station', district: 'Karongi', sector: 'Rubengera', coords: [-2.1667, 29.3167], types: ['Plastic', 'Metal'], hours: 'Mon-Sat: 7:00 AM - 4:00 PM', contact: '+250 788 012 678', capacity: 'Medium', status: 'Operational', description: 'Station for plastic and metal waste near Lake Kivu.', manager: 'Martin Habumugisha' },
    { id: 29, name: 'Nyamagabe Collection', district: 'Nyamagabe', sector: 'Gasaka', coords: [-2.4833, 29.6667], types: ['Organic', 'Paper'], hours: 'Mon-Fri: 8:00 AM - 5:00 PM', contact: '+250 788 123 789', capacity: 'Medium', status: 'Operational', description: 'Collection point for organic and paper waste in the south.', manager: 'Elise Mukamana' },
    { id: 30, name: 'Gakenke Waste Depot', district: 'Gakenke', sector: 'Ruli', coords: [-1.7167, 29.8333], types: ['Metal', 'Plastic'], hours: 'Mon-Sat: 7:00 AM - 4:00 PM', contact: '+250 788 234 890', capacity: 'Low', status: 'Operational', description: 'Northern depot for metal and plastic waste.', manager: 'Francois Niyibizi' },
  ];

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
    className: 'custom-icon',
  });

  const handleMarkerClick = (point) => {
    navigate('/home', { state: { point } });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <MapContainer
        center={rwandaCenter}
        zoom={8}
        style={{ height: '100vh', width: '100%' }}
        maxBounds={[[-2.9, 28.8], [-1.0, 30.9]]}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />
        <SearchControl />
        {wastePoints.map((point) => (
          <Marker key={point.id} position={point.coords} icon={customIcon}>
            <Popup>
              <div className="p-4 max-w-xs">
                <h3 className="text-lg font-bold text-emerald-700">{point.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{point.description}</p>
                <p className="mt-2"><strong>District:</strong> {point.district}</p>
                <p><strong>Sector:</strong> {point.sector}</p>
                <p><strong>Waste Types:</strong> {point.types.join(', ')}</p>
                <p><strong>Hours:</strong> {point.hours}</p>
                <p><strong>Contact:</strong> {point.contact}</p>
                <p><strong>Capacity:</strong> {point.capacity}</p>
                <p><strong>Status:</strong> {point.status}</p>
                <p><strong>Manager:</strong> {point.manager}</p>
                <button
                  onClick={() => handleMarkerClick(point)}
                  className="mt-3 w-full p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  aria-label={`View details for ${point.name}`}
                >
                 Join
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute top-4 left-4 bg-white p-4 rounded-2xl shadow-lg z-10">
        <h2 className="text-xl font-semibold text-emerald-800">Rwanda Waste Collection Map</h2>
        <p className="text-sm text-gray-600">Click a point to Join center</p>
      </div>
    </div>
  );
};

export default RwandaMap;