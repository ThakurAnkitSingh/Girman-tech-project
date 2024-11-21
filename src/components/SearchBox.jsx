import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { toast } from 'react-toastify';

import SearchResults from '../pages/SearchResults';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  // Handle search submission
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Check if searchQuery is empty or just spaces
      if (!searchQuery.trim()) {
        // Show error toast if query is invalid
        toast.error('Please enter a valid user name');
        return;
      }

      setSubmittedQuery(searchQuery);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <img
          src={require('../assests/backGroundLogo.png')}
          alt="Girman Logo"
          className="navbar__logo-img"
        />
      </div>

      <div className="flex justify-center mt-10">
        <TextField
          label="Search user..."
          variant="outlined"
          className="w-1/2 border-2 border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex justify-center mt-10">
        {/* Only trigger the search when the query is submitted */}
        <SearchResults searchQuery={submittedQuery} />
      </div>
    </div>
  );
};
export default SearchBox;