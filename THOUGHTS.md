# Thoughts on Ticktail Team Page Design

## Commands
First:
* `npm install` - Install all dependecies.

And then:
- `npm start` - Fires up python server.
- `npm run watch` - To keep watching build files.

## Including
Including following:
- React Router
- Styled Components.
- Babel to transpile ES2015 and Eslint to complain on bad stuff.
- Image, URL, File loaders
- etc ...

## Keep Things Simple
Nothing to much fancy, just used flat Tictails Flat Color Yellowish with Black.

## Pages (Admin, Team)
- Responsiveness for both Mobil & Desktop and minmal
- Animations
- Form validation
-
## Technologies
- Reactjs
- React Rounter for Dynamic Routing
- Styled Component
- Webpack with (Loaders)
- Axios the reason why I used this, because :
	- If you use .fetch() there is a two-step process when handing JSON data. The first is to make the actual request and then the second is to call the .json() method on the response. So by using axios you can cut out the middle step of passing the results of the http request to the .json() method. Axios just returns the data object you would expect.
	- The second issue .fetch() handles error responses. Logically you would think that if .fetch() gets an error it would enter the .catch() block and return anything there, right? Not necessarily.

## Thanks ;)



