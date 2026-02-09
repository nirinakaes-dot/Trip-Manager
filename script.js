// Trip constructor function

function Trip(Country,Landmark,Season,Description){
    this.country = Country;
    this.landmark =Landmark;
    this.season = Season;
    this.description = Description;
}

// Function to add a trip to the log
function AddTrip()
{    // Get input values
    const country = document.getElementById("Countrys").value;
    const Landmark = document.getElementById("Landmarks").value;
    const season = document.getElementById("Seasons").value;
    const description = document.getElementById("Description").value; }

    // Create a new trip object
    const newTrip = new Trip(country, Landmark, season, description);

    // Attach the new trip to the AddTrip function for access outside
    AddTrip.newTrip = newTrip;
    //array to store trips
    const tripLog= AddTrip.newTrip;
    


    // Clear input fields after adding the trip
    document.getElementById("Countrys").value = "";
    document.getElementById("Landmarks").value = "";
    document.getElementById("Seasons").value = "";
    document.getElementById("Description").value = "";

    //delete trip




    // Add the new trip to the log (you can implement this as needed, e.g., by storing it in an array or displaying it on the page)
    console.log(AddTrip); // For demonstration, log the new trip to the console
    console.log("Trip added successfully!"); // Confirmation message

