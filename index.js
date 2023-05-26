
let testData = [];
fetch("https://datahub.io/core/airport-codes/r/airport-codes.json").then(response => {

    const test = [];
    response.json().then(jsonData => {
        for (var j = 0; j < 10; j++) {
            
            const element = jsonData[j];
            test.push(element);
            
            // element[headerTexts[j]];
        }

        console.log(test)

        testData = jsonData.filter(e => e.type === "large_airport")

        generateTable(testData);
        
        // data.forEach(e => console.log(e))
    });

})

// const testData = [
//     {
//         "continent": "NA",
//         "coordinates": "-74.93360137939453, 40.07080078125",
//         "elevation_ft": "11",
//         "gps_code": "00A",
//         "iata_code": null,
//         "ident": "00A",
//         "iso_country": "US",
//         "iso_region": "US-PA",
//         "local_code": "00A",
//         "municipality": "Bensalem",
//         "name": "Total Rf Heliport",
//         "type": "heliport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-101.473911, 38.704022",
//         "elevation_ft": "3435",
//         "gps_code": "00AA",
//         "iata_code": null,
//         "ident": "00AA",
//         "iso_country": "US",
//         "iso_region": "US-KS",
//         "local_code": "00AA",
//         "municipality": "Leoti",
//         "name": "Aero B Ranch Airport",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-151.695999146, 59.94919968",
//         "elevation_ft": "450",
//         "gps_code": "00AK",
//         "iata_code": null,
//         "ident": "00AK",
//         "iso_country": "US",
//         "iso_region": "US-AK",
//         "local_code": "00AK",
//         "municipality": "Anchor Point",
//         "name": "Lowell Field",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-86.77030181884766, 34.86479949951172",
//         "elevation_ft": "820",
//         "gps_code": "00AL",
//         "iata_code": null,
//         "ident": "00AL",
//         "iso_country": "US",
//         "iso_region": "US-AL",
//         "local_code": "00AL",
//         "municipality": "Harvest",
//         "name": "Epps Airpark",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-91.254898, 35.6087",
//         "elevation_ft": "237",
//         "gps_code": null,
//         "iata_code": null,
//         "ident": "00AR",
//         "iso_country": "US",
//         "iso_region": "US-AR",
//         "local_code": null,
//         "municipality": "Newport",
//         "name": "Newport Hospital & Clinic Heliport",
//         "type": "closed"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-97.8180194, 34.9428028",
//         "elevation_ft": "1100",
//         "gps_code": "00AS",
//         "iata_code": null,
//         "ident": "00AS",
//         "iso_country": "US",
//         "iso_region": "US-OK",
//         "local_code": "00AS",
//         "municipality": "Alex",
//         "name": "Fulton Airport",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-112.16500091552734, 34.305599212646484",
//         "elevation_ft": "3810",
//         "gps_code": "00AZ",
//         "iata_code": null,
//         "ident": "00AZ",
//         "iso_country": "US",
//         "iso_region": "US-AZ",
//         "local_code": "00AZ",
//         "municipality": "Cordes",
//         "name": "Cordes Airport",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-116.888000488, 35.350498199499995",
//         "elevation_ft": "3038",
//         "gps_code": "00CA",
//         "iata_code": null,
//         "ident": "00CA",
//         "iso_country": "US",
//         "iso_region": "US-CA",
//         "local_code": "00CA",
//         "municipality": "Barstow",
//         "name": "Goldstone /Gts/ Airport",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-121.763427, 39.427188",
//         "elevation_ft": "87",
//         "gps_code": "00CL",
//         "iata_code": null,
//         "ident": "00CL",
//         "iso_country": "US",
//         "iso_region": "US-CA",
//         "local_code": "00CL",
//         "municipality": "Biggs",
//         "name": "Williams Ag Airport",
//         "type": "small_airport"
//     },
//     {
//         "continent": "NA",
//         "coordinates": "-116.4597417, 32.7273736",
//         "elevation_ft": "3350",
//         "gps_code": "00CN",
//         "iata_code": null,
//         "ident": "00CN",
//         "iso_country": "US",
//         "iso_region": "US-CA",
//         "local_code": "00CN",
//         "municipality": "Pine Valley",
//         "name": "Kitchen Creek Helibase Heliport",
//         "type": "heliport"
//     }
// ]
var columns = 12;
var rows = testData.length;

var table = document.getElementById("myTable");

var headerRow = document.createElement("tr");
var headerTexts = ["ident", "type", "name", "elevation_ft", "continent", "iso_country", "iso_region", "municipality", "gps_code", "iata_code", "local_code", "coordinates"];

for (var j = 0; j < columns; j++) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headerTexts[j];
    headerRow.appendChild(headerCell);
}

table.appendChild(headerRow);

function generateTable(data) {
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        row.classList.add("location-row"); 

        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");
            var header = headerTexts[j];

            if (data[i].hasOwnProperty(header)) {
                var value = data[i][header];
                cell.textContent = value;

                if (header === "coordinates") {
                    var coordsArray = value.split(","); 

                    if (coordsArray.length === 2) {
                        var latitude = coordsArray[0].trim(); 
                        var longitude = coordsArray[1].trim(); 
                        var googleMapsLink = "https://www.google.com/maps?q=" + encodeURIComponent(longitude + "," + latitude);
                        cell.innerHTML = '<a href="' + googleMapsLink + '" target="_blank">' + value + '</a>';
                    }
                }
            }

            row.appendChild(cell);
        }

        // row.addEventListener("click", function() {
        //     var coordinatesCell = this.querySelector('td:nth-child(12)');
        //     var latitude = coordinatesCell.querySelector('a').textContent.split(",")[0].trim();
        //     var longitude = coordinatesCell.querySelector('a').textContent.split(",")[1].trim();
        //     var googleMapsLink = "https://www.google.com/maps?q=" + encodeURIComponent(longitude+ "," + latitude);
        //     window.open(googleMapsLink, "_blank");
        // });

        table.appendChild(row);
    }
}

var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    var query = this.value.toLowerCase();
    var filteredData = testData.filter(function(item) {
        return item.name.toLowerCase().includes(query);
    });

    table.innerHTML = "";
    table.appendChild(headerRow);
    generateTable(filteredData);
});






