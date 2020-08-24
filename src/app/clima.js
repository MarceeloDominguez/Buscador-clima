export class Clima {

    constructor(ciudad) {
        this.apikey = 'f7fbb0e6fc24240c73feef1a2838536d'
        this.ciudad = ciudad
    }

    async getClima () {
        const uri = `http://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${this.apikey}&units=metric&lang=es`
        const response = await fetch(uri)
        const data = await response.json(uri)
        return data
    }

    cambiarInput(ciudad){
        this.ciudad = ciudad
    }
}