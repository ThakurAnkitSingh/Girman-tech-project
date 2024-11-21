import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DialogContainer from './Dialog';

const Card = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white space-y-4">
      <div className="flex flex-col items-start space-x-4">
      <div className="flex justify-center">
        <img src={user.avatar} alt="User" className="w-20 h-20 rounded-full" />
      </div>

      <h3 className="text-xl font-semibold text-center mt-2">{user.first_name} {user.last_name}</h3>

      <div className="flex items-center justify-center text-gray-600 text-sm">
        <LocationOnIcon fontSize="small" className="mr-1" />
        <span>{user.city || 'Unknown City'}</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center">
        <div className="mr-8 flex items-center text-gray-700 font-medium">
          <CallIcon fontSize="small" className="mr-2 text-black" />
          {user.contact_number}
        </div>

        <button
          className="p-2 px-4 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition duration-200"
          onClick={() => setIsOpen(true)}
        >
          Fetch Details
        </button>
      </div>

      {isOpen && <DialogContainer user={user} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;