"use strict";

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://your-tenant.auth0.com/.well-known/jwks.json' // Remplacez 'your-tenant' par votre locataire Auth0
  }),

  audience: 'https://example.com/api',
  // Remplacez 'https://example.com/api' par votre audience
  issuer: 'https://your-tenant.auth0.com/',
  // Remplacez 'your-tenant' par votre locataire Auth0
  algorithms: ['RS256']
});
module.exports = jwtCheck;