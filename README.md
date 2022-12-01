# Development

### Link to Deployed Website

https://icygoblin001.github.io/development/

### Goal and Value of the Application

This application is used to browse through a selection of curated literary works. Users have the opportunity to favorite ones that catch their eye.

### Usability Principles Considered

I avoided excessive colors and instead opted for bolded and underlined text to emphasize important details. There is a clear and consistent row system, which allows for top-down scanning.
Buttons change color when they are active, and clickable links alter how the cursor looks.

### Organization of Components

Favorites:
Displays favorited works and contains aggregator logic. Takes in list of favorited works as props.
Main:
Displays all works, handles filtering and sorting logic. Takes in list of favorited works, the poem data file, adding and removing functions, and all state variables for sorting and filtering.
Poem:
Represents each card, lays out information and enables favoriting. Takes in representation of favorited items, the poem data file, and adding and removing functions.

### How Data is Passed Down Through Components

My data is stored in data.js, which I read into App. From here, it is passed unadulterated to Main.js, while only favorited works are passed to Favorites.js. Within Main, as the poems are being mapped, the relevant data for each literary work being displayed is passed into Poem.js to display.

### How the User Triggers State Changes

Users trigger state changes by interacting with filters, sorts, and reset. For each filter and sort, I use a state variable to keep track of whether a particular data manipulation is active or not.
