# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
This web application aka movie platform allows user to look up the currently playing movies and save some oh his/hers favourite movies (realised via local storage see below). It also allows the user to click on the movie poster to see the details about the movies well as the reviews for this movie.

## Table of Contents

1. Installation
2. Technologies Used
3. Architecture
4. Further Improvements

## Installation


```bash
# Clone the repository
git clone https://github.com/ZinaRotgauz/movie-db-test.git

# Navigate to the project directory
cd movie-db-test

# Install dependencies
npm install

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```


# Project Architecture Overview

## Hierarchy
The application follows a hierarchical structure that enhances maintainability and ease of navigation:

- `src/`: Main source directory for development code.
  - `components/`: UI building blocks of the application, each subdirectory represents a self-contained component. It contains components such as<br>
    - "MovieGrid"
      - Props:
      - `movies`: An array of movie objects to be displayed.
      - `onClickFavourite`: A function that handles the event when the favorite button is clicked.
      - `favourites`: An array of IDs representing the user's favorite movies.

      - Functionality:
        - Maps over the `movies` array to render individual `MovieCard` components.
        - Each `MovieCard` receives properties such as the movie's ID, title, dynamically constructed image URL, and a boolean indicating whether the movie is a favorite.
        - An `onClick` event is attached to each `MovieCard` to trigger the `onClickFavourite` function with the corresponding movie's ID.

      - Styling:
        - Also uses styled-components to manage styles, ensuring consistency and modularity in the design.
    - "MovieCard"
      - **Props**:
        - `title`: The title of the movie.
        - `image`: The URL of the movie's poster image.
        - `onClickFavourite`: The function to be called when the favorite icon is clicked.
        - `isFavourite`: A boolean that determines if the movie is marked as a favorite.
        - `id`: The unique identifier for the movie.

      - **Layout**:
        - A wrapping element contains the entire movie card layout, including the favorite icon and movie details.
        - The favorite icon is conditionally styled to indicate whether the movie is a favorite.
        - Includes a clickable link that wraps the movie's image and title, likely leading to a detailed view of the movie.
      - **Styling**:
        - Also uses styled-components to manage styles

    - `pages/`: Represents the  pages "MainPage" "DetailsPage" of the application.
      
    - `services/`: Contains logic for external interactions, such as API calls with `tmdbService.js`.

## Component Reusability
Modularity and reusability are key in our component design. Each component is built to be reused across the application, promoting a consistent user interface and reducing code duplication.

## Custom Service
Instead of depending on npm libraries, the application features a custom service, `tmdbService.js`, to interact with the TMDB API. This approach streamlines the API interaction tailored to the application's specific needs.

## Routing
The application utilizes a routing system that corresponds to the structured pages within the `pages/` directory.

## State Management
To simplify development, the application uses React's `useState` hook for state management within components, opting not to implement a persistent storage solution. This decision was made for development speed and simplicity.

### Summary
Structured with attention to component hierarchy and reusability, the project's architecture is primed for scalability. A custom-built service for API interaction and simplified state management reflect an emphasis on a lightweight code.

# Technologies Used

- **React Framework**: Selected for its wide adoption within the company and the rich ecosystem that facilitates rapid application development.
- **Styled-Components**: Utilized for enhancing code readability and styling components in a modular and maintainable fashion.

# Further Improvements

Future updates could include:

- **Adaptive Design for Mobile**: Allocate approximately 90 minutes to implement responsive design to improve user experience on mobile devices. Right now it is one of my weak sides so I adjust up to 90-120 mnutes
- **Pagination for Movies Now Playing**: Extend functionality to add server-side pagination for the list of currently playing movies. This feature was initially omitted due to the extra time required for setting up an account with the API provider to manage favorite movies persistently. However, pagination has been implemented for reviews as a starting point, and this could be extended to other parts of the application with an estimated time investment of 90-120 minutes.
- - **SearchBar**: Although the logic was relised in the earlier version of this project, I decided to set that aside due to the lack of time



"# movie-db-test" 
