let counrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  Iran: ["Tehran", "Ahwaz", "Tabriz"],
  Turkey: ["Istanbule", "Ezmier", "Antalia"],
  US: ["Los Angles", "San diego", "Hawai"],
};

counrySelectBox.addEventListener("change", function () {
    
  if (counrySelectBox.value === "Please Select") {
    (citySelect.innerHTML = ""),
      (citySelect.innerHTML += "<option>Select City</option>");
  } else {

    let mainCountryName = counrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    citySelect.innerHTML = "";
    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";

    });
  }
});
