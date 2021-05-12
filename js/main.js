/**
 * Project main script
 */
//Changing tabs in wine description
const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active")
    })
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")
    target.classList.add("active")
  })
})

//Request API
const apiURL = "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines";

function showWines(wines, list) {
  //Affichage des vins
  list.innerHTML = '';

  let strWines = '';
  let winesArr = Object.values(wines);

  winesArr.forEach(wine => {
    strWines += '<li class="list-group-item" data-id="' + wine.id + '" >' + wine.name + '</li>';
  });

  list.innerHTML = strWines;

  //Gestion des clicks
  let listLIs = document.querySelectorAll('ul#list li');
  //console.log(listLIs)
  listLIs.forEach(li => {
    li.onclick = function () {
      let idWine = this.getAttribute('data-id');
      listLIs.forEach(li => {
        li.classList.remove('active');
      })
      li.classList.add('active');

      fetch(apiURL + '/' + idWine)
        .then(function (response) {
          response.json().then(function (wines) {
            //console.log(wines);

            if (wines.length > 0) {
              let idLI = document.getElementById('idWine');
              let nameLI = document.getElementById('nameWine');
              let grapesLI = document.getElementById('grapesWine');
              let yearLI = document.getElementById('yearWine');
              let countryLI = document.getElementById('countryWine');
              let regionLI = document.getElementById('regionWine');
              let capacityLI = document.getElementById('capacityWine');
              let colorLI = document.getElementById('colorWine');
              let priceLI = document.getElementById('priceWine');
              let pictureWine = document.getElementById('pictureWine');
              let descriptionWine = document.getElementById('descriptionWine');
              
              idLI.innerHTML = "&#35;"+wines[0].id;
              nameLI.innerHTML = wines[0].name;
              grapesLI.innerHTML = "<strong>Grapes: </strong>" + wines[0].grapes;
              yearLI.innerHTML = "<strong>Year: </strong>" + wines[0].year
              countryLI.innerHTML =
                "<strong>Country: </strong>" + wines[0].country
              regionLI.innerHTML = "<strong>Region: </strong>" + wines[0].region
              capacityLI.innerHTML =
                "<strong>Capacity: </strong>" + wines[0].capacity + "cl";
              colorLI.innerHTML = "<strong>Color: </strong>" + wines[0].color
              priceLI.innerHTML =
                "<strong>Price: </strong>" + wines[0].price + "€";
              pictureWine.src = '/images/' + wines[0].picture;
              descriptionWine.innerHTML = wines[0].description;
            }
          })
        })
        .catch(function (error) {
          document.write('An error ocurred: ' + error)
      })
    }
  })
}

let listUL = document.getElementById('list');
  //console.log(listUL)

window.onload = function () {
    fetch(apiURL)
      .then(function (response) {
        response.json().then(function (wines) {
          //console.log(wines)

          showWines(wines, listUL)
        })
      })
      .catch(function (error) {
        document.write("An error ocurred: " + error)
      })
  }
  