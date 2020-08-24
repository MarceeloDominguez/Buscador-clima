export class DOM {

    constructor(){
        this.clima = document.getElementById('clima')
        this.descripcion = document.getElementById('descripcion')
        this.string = document.getElementById('string')
        this.humedad = document.getElementById('humedad')
        this.viento = document.getElementById('viento')
    }

    render(clima){
        this.clima.textContent = clima.name
        this.descripcion.textContent = clima.weather[0].description
        this.string.textContent = clima.main.temp + ' °C'
        this.humedad.textContent = 'Humedad: ' + clima.main.humidity + ' %'
        this.viento.textContent = 'Viento: ' + clima.wind.speed + ' m/s'
    }

}