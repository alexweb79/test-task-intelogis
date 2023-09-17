# Test task from the company Intelogis

## Description

It is required to implement an application for displaying routes on a map.

Using a given set of routes (Table 1), implement a screen in which there is a table with a list of routes on the left, and a map on the right. When you select a row with a route in the table, the selected row should be highlighted, and the map should display route points in the form of markers and a polyline of the route track along the route points, obtained from the OSRM (or other) road tracking service. When you select a route in the table, the map is centered and scaled so that the entire route should fall within the map's visibility area. Only one route can be displayed on the map at a time - the selected one.

To display the map, it is advisable to use the Leaflet package, for components - AntDesign, to store the state of components and data, be sure to use Redux (redux-toolkit), to react to events - Sagas. You can use React Create App or Vite as the basis of the application. Use only functional components and primarily functional programming. Distribute code into directories based on function membership: components, selectors, reducers, sagas, HTTP-services, helpers, etc. Be sure to use sagas to get the track by points, and also be sure to use any HTTP service to access the track building API. Provide error handling from HTTP services. CSS styles can be written in the SASS/LESS preprocessor.

The solution must be provided in the form of source code, ready for deployment on a web server (attach a file archive or a link to github, for example). The application must be written cleanly and accurately, using known patterns, immediately with refactoring - as if you were writing a production application.

To get route polylines, you can use the OSRM API:
http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service

Table 1 – List of routes

| Routes   | Point 1 (lat, lng)           | Point 2 (lat, lng)           | Point 3 (lat, lng)           |
|----------|------------------------------|------------------------------|------------------------------|
| Route №1 | 59.84660399,<br/>30.29496392 | 59.82934196,<br/>30.42423701 | 59.83567701,<br/>30.38064206 |
| Route №2 | 59.82934196,<br/>30.42423701 | 59.82761295,<br/>30.41705607 | 59.84660399,<br/>30.29496392 |
| Route №3 | 59.83567701,<br/>30.38064206 | 59.84660399,<br/>30.29496392 | 59.82761295,<br/>30.41705607 |

## Demo
https://alexweb79.github.io/test-task-intelogis/

## Usage

### Starter files

Clone the repo test-task-intelogis with the following command:

```git clone git@github.com:alexweb79/test-task-intelogis.git```

### Install dependencies

```yarn install```

### Start development

```yarn start```

### For local usage create `.end` and add local url for data
```.dotenv
REACT_APP_DATA_API_ENDPOINT=http://localhost:3000
```
