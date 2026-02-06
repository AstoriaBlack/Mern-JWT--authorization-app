## Authentication Flow ##

Initially the client is going to send a login request to server, the server will check the credentials and if they are valid it will return an access token and a refresh token. The access token will be sent with every subsequent request but the refresh token has a path parameter set on it so that it's only sent when we hit the /refresh endpoint and that's going to increase the security of our refresh token because it's only ever sent on this one path so it makes it much less likely to get stolen or tampered with. Then on every subsequent request we are going to send our  access token and the server is going to validate the access token and send back the response after 15 minutes. Our access token will expire and our server is going to send 401 unauthorised.
error. Our front end is then going to check for this specific error and if it recieved the error we are going to hit the refresh end point so it's going to make a request to /refresh but this time its going to send the refresh token then the servr will try to validate this refresh token and if it's valid it will return a new access token. This access token then gets stored in the cookie and with every next request it's going to pass that new access token so again the server will respond with a 200 okay. And let's say after 30 days the refresh token expires so the request will be made to the refresh endpoint and the server is going to return a 401 unauthorized. Our frontend will know when there's a 401 unauthorized error on the refresh endpoint. It's no longer going to retry any requests and just sign the user out.

## API Architecture ##

The API is built using different layers: routes, controllers, services and models.
- Routes are responsible for handling the incoming requests and forwarding them to the appropriate controller.
- Controllers are responsible for validating the request, calling the appropriate service, and sending back the response.
- Services are responsible for handling the business logic. They interact with the database and any external services. Services may also call other services.
- Models are responsible for interacting with the database. They contain the schema and any model utility methods.

*For simple GET or DELETE requests that don't require any business logic, the controller may directly interact with the model.*

**Error Handling**

Errors are handled using a custom error handler middleware. The error handler middleware catches all errors that occur in the application and processes them accordingly. Each controller needs to be wrapped with the errorCatch() utility function to ensure that any errors that are thrown within the controller are caught and passed on to the error handler middleware.