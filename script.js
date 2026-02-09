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
    const season = document.getElementById("Season").value;
    const description = document.getElementById("Description").value; }
