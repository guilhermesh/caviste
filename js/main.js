/**
 * Project main script
 */
/*const wineData = [
{
id: "1",
name: "CHATEAU DE SAINT COSME",
year: "2009",
grapes: "Grenache / Syrah",
country: "France",
region: "Southern Rhone / Gigondas",
description: "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
picture: "saint_cosme.jpg",
price: "36",
capacity: "75",
color: "red",
extra: null,
},
{
id: "2",
name: "LAN RIOJA CRIANZA",
year: "2006",
grapes: "Tempranillo",
country: "Spain",
region: "Rioja",
description: "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
picture: "lan_rioja.jpg",
price: "0",
capacity: "0",
color: "red",
extra: null
},
{
id: "3",
name: "MARGERUM SYBARITE",
year: "2010",
grapes: "Sauvignon Blanc",
country: "USA",
region: "California Central Cosat",
description: "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
picture: "margerum.jpg",
price: "0",
capacity: "0",
color: "white",
extra: null
},
{
id: "4",
name: "OWEN ROE \"EX UMBRIS\"",
year: "2009",
grapes: "Syrah",
country: "USA",
region: "Washington",
description: "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss this award-winning taste sensation.",
picture: "ex_umbris.jpg",
price: "0",
capacity: "0",
color: "red",
extra: null
},
{
id: "5",
name: "REX HILL",
year: "2009",
grapes: "Pinot Noir",
country: "USA",
region: "Oregon",
description: "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
picture: "rex_hill.jpg",
price: "0",
capacity: "0",
color: "white",
extra: null
},
{
id: "6",
name: "VITICCIO CLASSICO RISERVA",
year: "2007",
grapes: "Sangiovese Merlot",
country: "Italy",
region: "Tuscany",
description: "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
picture: "viticcio.jpg",
price: "0",
capacity: "0",
color: "pink",
extra: null
},
{
id: "7",
name: "CHATEAU LE DOYENNE",
year: "2005",
grapes: "Merlot",
country: "France",
region: "Bordeaux",
description: "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
picture: "le_doyenne.jpg",
price: "0",
capacity: "0",
color: "pink",
extra: null
},
{
id: "8",
name: "DOMAINE DU BOUSCAT",
year: "2009",
grapes: "Merlot",
country: "France",
region: "Bordeaux",
description: "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
picture: "bouscat.jpg",
price: "0",
capacity: "0",
color: "white",
extra: null
},
{
id: "9",
name: "BLOCK NINE",
year: "2009",
grapes: "Pinot Noir",
country: "USA",
region: "California",
description: "With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.",
picture: "block_nine.jpg",
price: "0",
capacity: "0",
color: "white",
extra: null
},
{
id: "10",
name: "DOMAINE SERENE",
year: "2007",
grapes: "Pinot Noir",
country: "USA",
region: "Oregon",
description: "Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.",
picture: "domaine_serene.jpg",
price: "0",
capacity: "0",
color: "pink",
extra: null
},
{
id: "11",
name: "BODEGA LURTON",
year: "2011",
grapes: "Pinot Gris",
country: "Argentina",
region: "Mendoza",
description: "Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.",
picture: "bodega_lurton.jpg",
price: "0",
capacity: "0",
color: "red",
extra: null
},
{
id: "12",
name: "LES MORIZOTTES",
year: "2009",
grapes: "Chardonnay",
country: "France",
region: "Burgundy",
description: "Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.",
picture: "morizottes.jpg",
price: "0",
capacity: "0",
color: "red",
extra: null
}
]
*/
/*
function wineTemplate(wine) {
  return `
    <div class = "col-3 wine-block m-2">
      <div class="p-2">
        <a href="wine.html"><img src = "./images/${wine.picture}" alt="${wine.id}""></a>
      </div>
      <div>
      <p>${wine.country}, ${wine.region}</p>
      <h6><a href="#">${wine.name}</a></h6>
      <p>${wine.grapes}, ${wine.year}</p>
      </div>
    </div>
  `
}

document.getElementById("wines").innerHTML = `${wineData.map(wineTemplate).join('')}`
*/
let wineList = document.getElementById("wines");
let wineStructure = "";

const xhr = new XMLHttpRequest() //console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let data = xhr.responseText //console.log(data);

    wines = JSON.parse(data);
    let winesArr = Object.values(wines);
    
    //console.log(winesArr);console.log(wines);console.log(Object.keys(wines).length);
    for (let i = 0; i < Object.keys(wines).length; i++) {
      wineStructure += "<div class = \"col-3 wine-block m-2\">"+"<div class=\"p-2\">" + "<a href=\"wine.html\">" + "<img src = \"./images/" + winesArr[i].picture + "\">" + "</a>" + "</div>"+"<div>"+"<p>" + winesArr[i].country + "," + winesArr[i].region + "</p>" + "<h6>" + "<a href=\"wine.html\">" + winesArr[i].name + "</a>" + "</h6>" + "<p>" + winesArr[i].grapes + "," + winesArr[i].year + "</p>" + "</div>" + "</div>";
    }

    wineList.innerHTML = wineStructure;
    
  }
}

xhr.open(
  "GET",
  "https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines",
  true
);
xhr.send();