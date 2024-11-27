// Add schema for API endpoints and update the exports object
    const ApiEndpointSchema = new mongoose.Schema({
      name: String,
      allowedActions: { type: [String], enum: ['POST', 'PUT', 'PATCH', 'DELETE'] },
      dataModelFields: [{ fieldName: String, validation: Object }],
      clientAccess: Boolean,
      userAccess: Boolean,
      description: String,
    });

    const ApiEndpoint = mongoose.model('ApiEndpoint', ApiEndpointSchema);

    module.exports = { User, ApiEndpoint };
