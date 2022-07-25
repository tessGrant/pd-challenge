# Welcome to PlanDay Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To be able to run the project, In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

WARNING! to be able to manupulate with data(see, add, delete), in separated terminal run this script:

### `yarn data`

Launches the data server, it was built with [json-server ](https://www.npmjs.com/package/json-server) package;
you can check the data structure open: [http://localhost:3001](http://localhost:3001)


## The Assesment

Build a grid view using all the data we’ve provided in a JSON structure below.
You have full creative freedom – so go wild. There’s a catch though!

Try your best to include:

Pagination
A search function
A ‘no results found’ state on search
Make it accessible and keyboard friendly
Feeling extra fancy? Want to make a lasting impression? Bored and hungry for a challenge? Then go ahead and create your own tile builder using a simple form.
Inputs could include label, description, and image.

Show us what you got!


Please make sure your solution is accessible online


## The implementation

/src/components - folder with all small functional components, elements;
/src/sections - folder with all more complecated components, built with elements;
/scr/utils - folder with all hooks, services

1. The Planday Challenge app can display the array of default Cards;
2. Pagination set via React Query request for specific amount of items per page;
3. "Add New Card" option allows to add a new Card directly to the data, the updates of data structure can be checked in db.json file, and also the new Card is visible on page no.3. This feature implemented with form from [Formik](https://formik.org/) package;
4. "Delete" card option is posible via icon-button on the top of each card. This option implemented with React Query Mutation.
5. "Search" function allows user to search card by title, allows to put only full title. Feature implemented with React Query filtering query.

## Future improvements

1. Better handling of the array manipulations states: probably by changing of queryOptions, or via cooperation with Redux;
2. Validation for the input fields;
3. Search function should have more flexible option for searching.
4. All query should be covered by Jest unit-tests;
