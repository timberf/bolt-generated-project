import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const DataModels = () => {
      const [dataModels, setDataModels] = useState([]);

      useEffect(() => {
        // Fetch all data models from the server and update the state
        axios.get('/api/data-models').then((res) => setDataModels(res.data));
      }, []);

      return (
        <div>
          {/* Display a list of all data models with their details */}
          {dataModels.map((model) => (
            <div key={model._id}>{/* Data model details */}</div>
          ))}

          {/* Add/edit/delete data model form */}
        </div>
      );
    };

    export default DataModels;
