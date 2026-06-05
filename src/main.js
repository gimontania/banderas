let banderas = document.querySelector("#banderas") //busco el elemento id=banderas
const btnDarkMode = document.querySelector("#btnDarkMode");

btnDarkMode.addEventListener("click",() => {
    document.documentElement.classList.toggle("dark");
});



async function traerBanderas() {
    try {
        let response = await fetch("./data.json")
        let data = await response.json()
        return data
    } catch (error) {
        console.error("ups",error)
    }
}          

let dataBanderas = await traerBanderas()

console.log(dataBanderas[1])

for (let i = 0; i < dataBanderas.length; i++) {
            banderas.innerHTML+=  `<div class="max-w-75 bg-white rounded-md  dark:bg-gray-800 dark:text-white mb-3"> 
          <img src="https://s1.significados.com/foto/bandera-de-alemania-og.jpg"> alt="" class="md:w-60 md:h-40 mb-4 object-fill"
          <div class="px-6 py-10">
            <p class="text-xl font-bold mb-4">Germany</p>
            <p><span class="font-semibold">Population:</span> <span>987987</span></p>
            <p><span class="font-semibold">Region:</span> <span>Europe</span></p>
            <p><span class="font-semibold">Capital:</span> <span>Berlin</span></p>
          </div>`

          } //cada vez que se ejecuta banderas.innerHTML +=, agrego contenido dentro del div id="banderas"

          

          