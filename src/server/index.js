const express = require('express');
    const app = express();
    // ... other middleware and configuration code here ...

    // Import the docs route
    const docsRoute = require('./routes/docs');

    // Mount the docs route at the "/api/docs" endpoint
    app.use('/api/docs', docsRoute);
