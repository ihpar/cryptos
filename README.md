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

some_container_id_1   crypto-frontend   ...

some_container_id_2    node-rest-api     ...

- Run "docker kill fd3 some_container_id_1 some_container_id_2" to stop the containers
- Run "docker images" to list images on your system
- You will see something similar to:

REPOSITORY        TAG       IMAGE ID       

crypto-frontend   latest    some_image_id_1   ...

node-rest-api     latest    some_image_id_2   ...


- Run "docker  rmi -f some_image_id_1 some_image_id_2" to remove the images

## About the App
This application has the following features complying with the assignment requirements doc:
- It is responsive (try resizing the browser's width to see UI changes)
![Home light web](demo/home_light_web.png?raw=true "Home")
- It has light and dark modes
- It has a sidebar






