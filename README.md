# GameHub

A video game discovery web application built for practicing how to use state, data fetching, and component architecture in React. 

**[View Live Demo]](https://game-hub-xi-five-23.vercel.app/)**

## Overview
I built GameHub to familiarize myself with React concepts and gain a preview building a real-world frontend that relies on a third-party API. The application pulls data from the RAWG Video Games Database, you can browse, search, and filter through all the of the games on the API. 

## Features
* **Dynamic Filtering:** Filter games by platform (PC, PlayStation, Xbox, etc.) and genre.
* **Search & Sort:** Search for specific titles and sort results by date added, name, release date, popularity, or average rating.
* **Combined Queries:** Search, sort, and filter parameters all stack together accurately to narrow down results.
* **Responsive UI:** A clean, grid-based layout that adapts to mobile, tablet, and desktop screens, complete with a dark mode toggle.
* **Optimized Loading:** Uses skeleton loaders to improve the perceived performance while fetching data.

## What I Learned
This project was a massive boost for my frontend skills. Specifically, it taught me:

* **Managing Complex State:** figuring out how to keep multiple filters (search input, selected genre, selected platform, and sort order) in sync was a bit exhausting than I taught. Instead of creating a messy web of individual state variables, I learned how to play with hooks, the state and pass a single query object around the application.
* **Connecting to External APIs:** Working with the RAWG API taught me how to properly handle asynchronous data fetching using Axios. I learned the importance of handling loading states, catching errors gracefully, and using AbortControllers to cancel requests if the user navigates away before the fetch completes.
* **Type Safety:** Using TypeScript alongside React forced me to define the exact shape of my API responses and component props. I wouldn't have noticed it but it probably prevented countless runtime errors and have a well structured code. Imagine if it was a larger project, Enough typescript compliments.
* **Component Abstraction:** I got much better at breaking down a large UI into small, reusable, and maintainable components rather than stuffing everything into a few massive files. Divide and conquer :)

## Tech Stack
* **Framework:** React
* **Language:** TypeScript
* **Styling:** Chakra UI
* **Data Fetching:** Axios
* **Build Tool:** Vite
* **API:** RAWG Video Games Database
