Open-source React Web Application that explores some interesting Star Wars data from GraphQL server. Live url: https://starwars-app-bg.netlify.com/

## Data

### 1. API

Data is fetched from GraphQL Server via Apollo client

### 2. Authorisation

There is only one user available with the following credentials:

+ Email: demo@st6.io 
+ Password: demo1234

### 3. Authenticating GraphQL queries

Authenticating the queries happens by adding Authorization header (jwt token) to the request with value Bearer <token>

## Routes

Routes are implemented via react-router-dom.

### 1. Routes that don't require authentication

If the user is not registered, he is always redirected to the login page.

### 2. Routes that require authentication
If the user has been registered, he can see the following pages:

+ :/episodes 
+ :/episodes/id, 
+ :/characters, 
+ :/characters/id
+ + :/starships/id

## UI/UX

### 1. Dark Mode
The user can choose between a light and a dark theme.
The selected theme is stored across sessions, i.e. if the user opted for
the dark theme and closes the window, once she reopens it, the dark theme
will still be applied.
### 2. Error handling
If there is some kind of an error during login, an appropriate info message is shown on the frontend (‘Invalid Credentials’)
### 3. Responsive design
The app is fully responsive. Without the use of any frameworks. Custom mobile menu toggle functionality is implemented
### 4. Pagination 
The app has pagination that loads more data wherever applicable (List characters page and in Single episode page)

## Testing

The components are unit-tested with jest and enzyme.