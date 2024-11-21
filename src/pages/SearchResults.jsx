import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { toast } from 'react-toastify';

const SearchResults = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/data/users.json')
      .then((response) => response.json())
      .then((data) => {
        if (searchQuery) {
          const filteredUsers = data.filter((user) =>{
            console.log(searchQuery, user, "searchQuery, user");
            return user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
          });
          if(!filteredUsers.length){
            toast.error('No user found');
          }else{
            toast.success('User found');
            setUsers(filteredUsers);
          }
        } else {
          setUsers([]);
        }
      });
  }, [searchQuery]);

  return (
    <div className="p-4">
      {searchQuery && (
        <h1 className="text-xl font-bold">Search Results for "{searchQuery}"</h1>
      )}
      {users.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {users.map((user, index) => (
            <Card key={index} user={user} />
          ))}
        </div>
      ) : (
        searchQuery && (
          <img
            src={require('../assests/Group.png')}
            alt="No Results"
            className="w-1/2 mx-auto"
          />
        )
      )}
    </div>
  );
};

export default SearchResults;
