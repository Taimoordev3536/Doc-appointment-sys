import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SPECIALTIES = [
  { name: 'General physician', path: 'General physician' },
  { name: 'Gynecologist', path: 'Gynecologist' },
  { name: 'Dermatologist', path: 'Dermatologist' },
  { name: 'Pediatricians', path: 'Pediatricians' },
  { name: 'Neurologist', path: 'Neurologist' },
  { name: 'Gastroenterologist', path: 'Gastroenterologist' },
];

function Doctors() {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter]=useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  const handleSpecialtyClick = (path) => {
    if (speciality === path) {
      navigate('/doctors');
    } else {
      navigate(`/doctors/${path}`);
    }
  };

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''  }`} onClick={()=>setShowFilter(prev=> !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' :'hidden sm:flex'}`}>
          {SPECIALTIES.map((specialty) => (
            <p
              key={specialty.path}
              onClick={() => handleSpecialtyClick(specialty.path)}
              className={`w-full sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === specialty.path ? 'bg-indigo-100 text-black' : ''
              }`}
            >
              {specialty.name}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
