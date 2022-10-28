let cities = {
    Khozestan: ['Ahaz', 'Shoush', 'Andimeshk', 'Dezful'],
    Tehran: ['Tehran', 'Damavand', 'Shemran', 'Shahryar'],
    Esfahan: ['ShahinShahr', 'FoladShahr', 'Mobarakeh'],
    Shiraz: ['Norabad', 'Shiraz', 'Tos'],
    Mashhad: ['Sabzevar', 'Tabas']
}
let travel = prompt("Enter your province")
let compare = cities[travel]
compare.forEach(function (city) {

    console.log(city)
});