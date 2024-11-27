const express = require('express');
    const router = express.Router();
    const swaggerJSDoc = require('swagger-jsdoc');

    // Define Swagger options
    const swaggerOptions = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Managed JSON API Server',
          version: '1.0.0',
          description: 'API documentation for Managed JSON API Server',
        },
      },
      apis: ['./src/server/routes/*.js'], // Path to the API docs
    };

    // Generate Swagger specification
    const swaggerSpec = swaggerJSDoc(swaggerOptions);

    // Define route for generating API documentation in JSON format
    router.get('/json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(swaggerSpec));
    });

    // Define route for generating API documentation in YAML format
    router.get('/yaml', (req, res) => {
      const yaml = require('json2yaml');
      res.setHeader('Content-Type', 'text/yaml');
      res.send(yaml.stringify(swaggerSpec));
    });

    module.exports = router;
