# CryptoCurr Assignment
## Installation (NPM)

### Frontend Installation
- Install Nodejs (if not already installed on your system)
- Download/clone project
- Open terminal and cd into project dir (e.g. "cd path/to/project/cryptos")
- Install packages with "npm install" command
- Start project with "npm start" command
- Type "http://localhost:3000" into your web browser's address bar
- Now you should start backend installation by following the comands in following section

### Backend Installation
- cd into backend dir (e.g. "cd path/to/project/cryptos/backend")
- Install packages with "npm install" command
- Start backend with "npm start" command
- Application is ready to use now

## Installation (Docker)
- Install Docker Desktop (if not already installed)
- cd into cryptos/backend dir
- Run "docker build --tag node-rest-api ." command
- Run "docker run -p 8000:8000 node-rest-api" command
- cd into cryptos dir (e.d "cd ..")
- Run "docker build --tag crypto-frontend ." command
- Run "docker run -d -p 3000:3000 crypto-frontend" command
- Type "http://localhost:3000" into your web browser's address bar to see the working app

## Stopping Docker Containers & Deleting Images
- Run "docker ps" command
- You will see something similar to:

some_container_id_1&emsp;crypto-frontend&emsp;...

some_container_id_2&emsp;node-rest-api&emsp;...

- Run "docker kill fd3 some_container_id_1 some_container_id_2" to stop the containers
- Run "docker images" to list images on your system
- You will see something similar to:

REPOSITORY&emsp;TAG&emsp;IMAGE ID       

crypto-frontend&emsp;latest&emsp;some_image_id_1&emsp;...

node-rest-api&emsp;latest&emsp;some_image_id_2   ...


- Run "docker  rmi -f some_image_id_1 some_image_id_2" to remove the images

## About the App
This application has the following features/functionalities complying with the assignment requirements doc:


- It is responsive (try resizing the browser's width to see UI changes). Responsiveness is implemented by using css grids and media queries. No additional css framework was used in this project except the hamburger icon and its animation (see src/sass/vendors/hamburger.scss by Jonathan Suh). 
- Home screen is shown in desktop view:

![Home light web](ui_demo_images/home_light_web.jpg)

- Here is the mobile views of the home page:

![Home light mobile](ui_demo_images/home_light_mobile.jpg)

![Home mobile nav](ui_demo_images/home_mobile_nav.jpg)

- It has light and dark modes

![Home dark web](ui_demo_images/home_dark_web.jpg)

- Home page has dynamic filtering capabilities. Just type your filter query into the text box having "Filter crypto currencies..." placeholder. Both name filters like "Bitcoin" and symbol filters "BTC" will work.
- To prevent excessive filtering, which might be a costly operation on large datasets, debouncing is implemented. That is, a timer suspends the filtering operation until an interval of at least 250ms occur since the last client keypress event.
- Exchange rates can be changed from the dropdown located in the top-right side of the UI.
- There are 2 addition links in sidebar navigating to 2 empty pages.
- List component also limits fetching at most 40 assets from the API at a time. This is imlemented by using the "react-infinite-scroll-component". When user scrolls to bottom of the page the batch of 40 assets are fetched from the API. This behaviour can be easily observed with activating the "network throttling" functionality of browser's developer tools.
- Clicking to any asset in homepage will redirect to asset's details page.

![Home light web](ui_demo_images/crypto_details.jpg)

- Details page connects to an express server to get asset details such as rank, supply, market cap, etc. Even though this step is not necessary, it is implemented this way to demonstrate a basic express.js usage. Frontend app sends a GET request to express server with the id parameter of asset to be shown; express server sends a GET request to CoinCap API with the same asset id nd forwards the result to frontend.

- Overall, all requirements, hints, bonus points given in the assignment doc are implemented. 
- Cheers! 






