import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DialogContainer = ({ user, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="text-start text-2xl font-bold">Fetch Details</DialogTitle>
      
      <DialogContent>
        <p className="text-sm text-start">Here are the details of the following employee:</p>

        <div className="flex flex-col space-x-6 mt-6">

          <div className="flex-1">
            <p className="font-semibold">Name: {user.first_name} {user.last_name}</p>
            <p className="font-semibold">Location: {user.city || 'Unknown Location'}</p>
            <p className="font-semibold">Contact Number: {user.contact_number}</p>
            <p className="font-semibold mt-6 mb-2">Profile Image:</p>
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-60 h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </DialogContent>

      <DialogActions className="justify-between">
        <div></div>
        
        <Button
          onClick={onClose}
          color="white"
          variant="contained"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContainer;
