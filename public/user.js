const button = document.querySelector('.label')
const query = document.querySelector('.searchBox')
const loc = document.querySelector('.loc')
const temp = document.querySelector('.temp-data')
const pressure = document.querySelector('.pressure-data')
const wind = document.querySelector('.wind-data')
const rain = document.querySelector('.rain-data')
const humidity = document.querySelector('.humidity-data')

console.log('js loaded')
const response = function () {
    fetch(`/weather?place=${query.value}`).then((response) => {
        response.json().then((data) => {
                document.querySelector('.result').style.display = 'inline-block'
                query.style.display = 'none'
                button.style.display = 'none'
                data = data.data
                loc.textContent = query.value
                temp.textContent = data.current.temperature + '\xB0 Celcius'
                pressure.textContent = data.current.pressure + 'bar'
                wind.textContent = data.current.wind_speed +'km/hr'
                rain.textContent = data.current.precip + 'mm'
                humidity.textContent = data.current.humidity + '%'
            }
        )
        })
    }
document.addEventListener('keydown', (e)=>{
    if (e.keyCode == 13){
        response()
    }
})
button.addEventListener('click', response)

   

