(function () {
  // Define an object to hold menu-related functions
  var dc = {};

  // Function to load menu items for a specific category
  dc.loadMenuItems = function (categoryShortName) {
    // Implement this function according to the assignment instructions
    // You need to change the behavior so that it loads menu items for a random category
    // Generate a random index to select a category from the list
    var categories = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = categories[randomIndex];

    // Log the selected category to the console
    console.log("Loading menu items for category: " + randomCategoryShortName);
  };

  // Function to initialize the page
  dc.initialize = function () {
    // Retrieve the Specials tile element
    var specialsTile = document.getElementById("specials");

    // Add an event listener to the Specials tile
    specialsTile.addEventListener("click", function () {
      // Call the loadMenuItems function with a random category short name
      dc.loadMenuItems();
    });
  };

  // Call the initialize function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", function () {
    dc.initialize();
  });

  // Assign the dc object to the global window object
  window.$dc = dc;
})();
