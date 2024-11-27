import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const Users = () => {
      const [users, setUsers] = useState([]);

      useEffect(() => {
        // Fetch all users from the server and update the state
        axios.get('/api/users').then((res) => setUsers(res.data));
      }, []);

      return (
        <div>
          {/* Display a list of all users with their details */}
          {users.map((user) => (
            <div key={user._id}>{/* User details */}</div>
          ))}

          {/* Add/edit/delete user form */}
        </div>
      );
    };

    export default Users;
