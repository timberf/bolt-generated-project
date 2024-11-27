import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const ApiDocumentation = () => {
      const [apiDocs, setApiDocs] = useState(null);

      useEffect(() => {
        // Fetch API documentation from the server and update the state
        axios.get('/api/docs').then((res) => setApiDocs(res.data));
      }, []);

      return (
        <div>
          {/* Display API documentation in a more user-friendly format */}
          {/* ... */}
        </div>
      );
    };

    export default ApiDocumentation;
