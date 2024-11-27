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
          {/* Display API documentation */}
          {apiDocs && <pre>{JSON.stringify(apiDocs, null, 2)}</pre>}
        </div>
      );
    };

    export default ApiDocumentation;
