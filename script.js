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
    const description = document.getElementById("Description").value; 

    // Create a new trip object
    const newTrip = new Trip(country, Landmark, season, description);


    // Clear input fields after adding the trip
    document.getElementById("Countrys").value = "";
    document.getElementById("Landmarks").value = "";
    document.getElementById("Seasons").value = "";
    document.getElementById("Description").value = "";

    // Add the new trip to the log 
    tripLog.push(newTrip);
    console.log("Trip added successfully!");
 
}
 
 //array to store trips
    const tripLog= [];
    displayTrips();
    
  // Add event listener to the "Add Trip" button
  document.getElementById("Add").addEventListener("click", AddTrip)

  // Function to display all trips in the log
  function displayTrips() {
    const logs = document.getElementById("logs");
    logs.innerHTML = ""; 
    tripLog.forEach((trip, index) => {
        const tripEntry= document.createElement("div");
        
        tripEntry.textContent = `Trip ${index + 1}: Country: ${trip.country}, Landmark: ${trip.landmark}, Season: ${trip.season}, Description: ${trip.description}`;
       logs.appendChild(tripEntry);
    });
    }
