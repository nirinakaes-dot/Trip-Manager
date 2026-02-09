// Trip constructor function

function Trip(Country,Landmark,Season,Description){
    this.Country = Country;
    this.Landmark =Landmark;
    this.Season = Season;
    this.Description = Description;
}

// Function to add a trip to the log
function AddTrip()
{    // Get input values
    const country = document.getElementById("Countrys").value;
    const city = document.getElementById("Landmarks").value;
    const season = document.getElementById("Seasons").value;
    const description = document.getElementById("Description").value; }

    // Create a new trip object
    const newTrip = new Trip(country, city, season, description);
    // Add the new trip to the log (you can implement this as needed, e.g., by storing it in an array or displaying it on the page)
    console.log(newTrip); // For demonstration, log the new trip to the console
    console.log("Trip added successfully!"); // Confirmation message

