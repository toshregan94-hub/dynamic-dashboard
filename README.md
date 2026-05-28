# Dynamic Product Dashboard
- A React-based product dashboard that displays a list of products 
with real-time stock status, conditional styling, and the ability 
to remove products from the view.

## Project Description
 It demonstrates core React concepts including component composition, 
props, state management, conditional rendering, and CSS Modules 
for styling. The app renders a list of products on a dashboard, 
visually distinguishes out-of-stock items, and allows users to 
remove products dynamically.

## Setup Instructions
1. Clone the repository
- Through using git clone in the terminal.

2. Install dependencies.
- Through running npm install in the terminal.

3. Start the development server:
- Using npm run dev

4. Open your browser and visit the local host provided in the terminal. 

## Running the Tests
- This project uses Vitest and React Testing Library.

To run the tests:
- Run npm test.


The test suite covers:
- Rendering the Product Dashboard title
- Displaying all products on load
- Applying out-of-stock styling conditionally
- Removing a product when the Remove button is clicked

## Key Features Applied

- Component-based architecture 
- Dynamic rendering using .map()
- Conditional styling for out-of-stock products
- Remove functionality using React "useState"
- CSS Modules for scoped styling

## Technologies Used

- React 
- Vite
- CSS Modules
- React Testing Library
- Jest