var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 2
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
  }).addTo(myMap);

function markerSize(Population) {
    return Population / 300;
  }


var countries = [{
    name: "Albania",
    location: [41.1533, 20.1683],
    DeathRate: "Low",
    Region: "European",
    Population: 2877000
},
{
    name: "Armenia",
    location: [40.0691, 45.0382],
    DeathRate: "Low",
    Region: "European",
    Population: 2973000
},
{
    name: "Aruba",
    location: [12.5211, -69.9683],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 105264
},
{
    name: "Australia",
    location: [-25.2744, 133.7751],
    DeathRate: "Low",
    Region: "Western Pacific",
    Population: 24600000
},
{
    name: "Austria",
    location: [47.5162, 14.5501],
    DeathRate: "Low",
    Region: "European",
    Population: 8822000
},
{
    name: "Azerbaijan",
    location: [40.1431, 47.5759],
    DeathRate: "Low",
    Region: "European",
    Population: 9898000
},
{
    name: "Bahamas",
    location: [25.0343, -77.3963],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 395361
},
{
    name: "Bangladesh",
    location: [23.6850, 90.3563],
    DeathRate: "High",
    Region: "South-East Asia",
    Population: 164700000
},
{
    name: "Belarus",
    location: [53.7098, 27.9534],
    DeathRate: "Low",
    Region: "European",
    Population: 9508000
},
{
    name: "Belgium",
    location: [50.5039, 4.4699],
    DeathRate: "Low",
    Region: "European",
    Population: 11400000
},
{
    name: "Belize",
    location: [17.1899, -88.4976],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 374681
},
{
    name: "Bolivia",
    location: [-16.2902, -63.5887],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 11050000
},
{
    name: "Bosnia and Herzegovina",
    location: [43.9159, 17.6791],
    DeathRate: "Low",
    Region: "European",
    Population: 3507000
},
{
    name: "Brazil",
    location: [-14.2350, -51.9253],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 203300000
},
{
    name: "Bulgaria",
    location: [42.7339, 25.4858],
    DeathRate: "Low",
    Region: "European",
    Population: 7050000
},
{
    name: "Burkina Faso",
    location: [12.2383, -1.5616],
    DeathRate: "High",
    Region: "African",
    Population: 19190000
},
{
    name: "Canada",
    location: [56.1304, -106.3468],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 37590000
},
{
    name: "Chile",
    location: [-35.6751, -71.5430],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 18050000
},
{
    name: "Colombia",
    location: [4.5709, -74.2973],
    DeathRate: "Meidum",
    Region: "Americas",
    Population: 18050000
},
{
    name: "Costa Rica",
    location: [9.7489, -83.7534],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 4906000
},
{
    name: "Côte d'Ivoire",
    location: [7.5400, -5.5471],
    DeathRate: "High",
    Region: "African",
    Population: 24290000
},
{
    name: "Cuba",
    location: [21.5218, -77.7812],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 11480000
},
{
    name: "Denmark",
    location: [56.2639, 9.5018],
    DeathRate: "Low",
    Region: "European",
    Population: 5603000
},
{
    name: "Dominican Republic",
    location: [18.7357, -70.1627],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 10770000
},
{
    name: "Ecuador",
    location: [-1.8312, -78.1834],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 16620000
},
{
    name: "Egypt",
    location: [26.8206, 30.8025],
    DeathRate: "High",
    Region: "Eastern Mediterranean ",
    Population: 97550000
},
{
    name: "El Salvador",
    location: [13.7942, -88.8965],
     DeathRate: "Medium",
     Region: "Americas",
     Population: 6378000
},
{
    name: "Estonia",
    location: [58.5953, 25.0136],
    DeathRate: "Low",
    Region: "European",
    Population: 1328000
},
{
    name: "Fiji",
    location: [-17.7134, 178.0650],
    DeathRate: "Low",
    Region: "Western Pacific",
    Population: 905502
},
{
    name: "Finland",
    location: [61.9241, 25.7482],
    DeathRate: "Low",
    Region: "European",
    Population: 5513000
},
{
    name: "France",
    location: [46.2276, 2.2137],
    DeathRate: "Low",
    Region: "European",
    Population: 66990000
},
{
    name: "Georgia",
    location: [32.1656, 82.9001],
    DeathRate: "Low",
    Region: "European",
    Population: 10520000
},
{
    name: "Germany",
    location: [51.1657, 10.4515],
    DeathRate: "Low",
    Region: "European",
    Population: 82790000
},
{
    name: "Ghana",
    location: [7.9465, -1.0232],
    DeathRate: "High",
    Region: "African",
    Population: 30000000
},
{
    name: "Greece",
    location: [39.0742, 21.8243],
    DeathRate: "Low",
    Region: "European",
    Population: 10740000
},
{
    name: "Guatemala",
    location: [15.7835, -90.2308],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 16914970
},
{
    name: "Haiti",
    location: [18.9712, -72.2852],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 10980000
},
{
    name: "Honduras",
    location: [15.2000, -86.2419],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 9265000
},
{
    name: "Hungary",
    location: [47.1625, 19.5033],
    DeathRate: "Low",
    Region: "European",
    Population: 9773000
},
{
    name: "Iceland",
    location: [64.9631, -19.0208],
    DeathRate: "Low",
    Region: "European",
    Population: 364260
},
{
    name: "Iraq",
    location: [33.2232, 43.6793],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 38270000
},
{
    name: "Ireland",
    location: [53.1424, -7.6921],
    DeathRate: "Low",
    Region: "European",
    Population: 4830000
},
{
    name: "Israel",
    location: [31.0461, 34.8516],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 8712000
},
{
    name: "Italy",
    location: [41.8719, 12.5674],
    DeathRate: "Low",
    Region: "European",
    Population: 60480000
},
{
    name: "Jamaica",
    location: [18.1096, -77.2975],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 2890000
},
{
    name: "Japan",
    location: [36.2048, 138.2529],
    DeathRate: "Low",
    Region: "Western Pacific",
    Population: 126800000
},
{
    name: "Kazakhstan",
    location: [48.0196, 66.9237],
    DeathRate: "Low",
    Region: "European",
    Population: 18040000
},
{
    name: "Kenya",
    location: [-0.0236, 37.9062],
    DeathRate: "High",
    Region: "African",
    Population: 49700000
},
{
    name: "Kosovo",
    location: [42.6026, 20.9030],
    DeathRate: "Low",
    Region: "European",
    Population: 1831000
},
{
    name: "Kyrgyzstan",
    location: [41.2044, 74.7661],
    DeathRate: "Low",
    Region: "European",
    Population: 6202000
},
{
    name: "Laos",
    location: [19.8563, 102.4955],
    DeathRate: "Low",
    Region: "Western Pacific",
    Population: 6858000
},
{
    name: "Latvia",
    location: [56.8796, 24.6032],
    DeathRate: "Low",
    Region: "European",
    Population: 1920000
},
{
    name: "Lebanon",
    location: [33.8547, 35.8623],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 6082000
},
{
    name: "Lithuania",
    location: [55.1694, 23.8813],
    DeathRate: "Low",
    Region: "European",
    Population: 2794000
},
{
    name: "Luxembourg",
    location: [49.6116, 6.1319],
    DeathRate: "Low",
    Region: "European",
    Population: 602005
},
{
    name: "Madagascar",
    location: [-18.7669, 46.8691],
    DeathRate: "High",
    Region: "African",
    Population: 25570000
},
{
    name: "Mali",
    location: [17.5707, -3.9962],
    DeathRate: "High",
    Region: "African",
    Population: 18540000
},
{
    name: "Mauritania",
    location: [21.0079, -10.9408],
    DeathRate: "High",
    Region: "African",
    Population:1265000
},
{
    name: "Mexico",
    location: [23.6345, -102.5528],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 129200000
},
{
    name: "Montenegro",
    location: [42.7087, 19.3744],
    DeathRate: "Low",
    Region: "European",
    Population: 631219
},
{
    name: "Morocco",
    location: [31.7917, -7.0926],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 35740000
},
{
    name: "Myanmar",
    location: [21.9162, 95.9560],
    DeathRate: "High",
    Region: "South-East Asia",
    Population: 53370000
},
{
    name: "Nepal",
    location: [28.3949, 84.1240],
    DeathRate: "High",
    Region: "South-East Asia",
    Population: 29300000
},
{
    name: "Netherlands",
    location: [52.1326, 5.2913],
    DeathRate: "Low",
    Region: "European",
    Population: 17180000
},
{
    name: "Nicaragua",
    location: [12.8654, -85.2072],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 6218000
},
{
    name: "Norway",
    location: [60.4720, 8.4689],
    DeathRate: "Low",
    Region: "European",
    Population: 5368000
},
{
    name: "Panama",
    location: [8.5380, -80.7821],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 4099000
},
{
    name: "Paraguay",
    location: [-23.4425, -58.4438],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 6811000
},
{
    name: "Poland",
    location: [51.9194, 19.1451],
    DeathRate: "Low",
    Region: "European",
    Population: 37980000
},
{
    name: "Portugal",
    location: [39.3999, -8.2245],
    DeathRate: "Low",
    Region: "European",
    Population: 10290000
},
{
    name: "Qatar",
    location: [25.3548, 51.1839],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 2639000
},
{
    name: "Moldova",
    location: [47.4116, 28.3699],
    DeathRate: "Low",
    Region: "European",
    Population: 3550000
},
{
    name: "Romania",
    location: [45.9432, 24.9668],
    DeathRate: "Low",
    Region: "European",
    Population: 19530000
},
{
    name: "Russia",
    location: [61.5240, 105.3188],
    DeathRate: "Low",
    Region: "European",
    Population: 144500000
},
{
    name: "Saudi Arabia",
    location: [23.8859, 45.0792],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 32940000
},
{
    name: "Serbia",
    location: [44.0165, 21.0059],
    DeathRate: "Low",
    Region: "European",
    Population: 7022000
},
{
    name: "Seychelles",
    location: [-4.6796, 55.4920],
    DeathRate: "High",
    Region: "African",
    Population: 95843
},
{
    name: "Singapore",
    location: [1.3521, 103.8198],
    DeathRate: "Low",
    Region: "Western Pacific",
    Population: 5612000
},
{
    name: "Slovakia",
    location: [48.6690, 19.6990],
    DeathRate: "Low",
    Region: "European",
    Population: 5450000
},
{
    name: "Spain",
    location: [40.4637, -3.7492],
    DeathRate: "Low",
    Region: "European",
    Population: 46660000
},
{
    name: "Sweden",
    location: [60.1282, 18.6435],
    DeathRate: "Low",
    Region: "European",
    Population: 10120000
},
{
    name: "Switzerland",
    location: [46.8182, 8.2275],
    DeathRate: "Low",
    Region: "European",
    Population: 8570000
},
{
    name: "Tajikistan",
    location: [38.8610, 71.2761],
    DeathRate: "Low",
    Region: "European",
    Population: 8921000
},
{
    name: "Togo",
    location: [8.6195, 0.8248],
    DeathRate: "High",
    Region: "African",
    Population: 7798000
},
{
    name: "Tunisia",
    location: [33.8869, 9.5375],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 11530000
},
{
    name: "Turkmenistan",
    location: [38.9697, 59.5563],
    DeathRate: "Low",
    Region: "European",
    Population: 5758000
},
{
    name: "Uganda",
    location: [1.3733, 32.2903],
    DeathRate: "High",
    Region: "African",
    Population: 42860000
},
{
    name: "Ukraine",
    location: [48.3794, 31.1656],
    DeathRate: "Low",
    Region: "European",
    Population: 42220000
},
{
    name: "United Kingdom",
    location: [55.3781, -3.4360],
    DeathRate: "Low",
    Region: "European",
    Population: 66440000
},
{
    name: "United States",
    //location: [37.0902, 95.7129],
    location: [39.8283, -98.5795],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 327200000
},
{
    name: "Uruguay",
    location: [-32.5228, -55.7658],
    DeathRate: "Medium",
    Region: "Americas",
    Population: 3457000
},
{
    name: "Uzbekistan",
    location: [41.3775, 64.5853],
    DeathRate: "Low",
    Region: "European",
    Population: 32390000
},
{
    name: "West Bank",
    location: [31.9466, 35.3027],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 4685000
},
{
    name: "Yemen",
    location: [15.5527, 48.5164],
    DeathRate: "High",
    Region: "Eastern Mediterranean",
    Population: 28250000
},
{
    name: "Zambia",
    location: [-13.1339, 27.8493],
    DeathRate: "High",
    Region: "African",
    Population: 17090000
} 
];

function chooseColor(DeathRate) {
    switch(DeathRate) {
    case "High":
        return 'red';
        break;
    case "Medium":
        return 'green';
        break;
    case "Low":
        return 'blue';
        break;
    default:
        return 'black';
    }
}
for (var i = 0; i < countries.length; i++) {

    L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "pink",
      fillColor: chooseColor(countries[i].DeathRate),
      radius: markerSize(countries[i].Population)
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Death Rate: " + countries[i].DeathRate + "<h3>Region: " + countries[i].Region+ "<h3>Population: " +countries[i].Population + "</h3>").addTo(myMap);
  }
