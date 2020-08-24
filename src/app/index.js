require('./index.css')
const { Clima } = require('./clima')
const { DOM } = require('./dom')
const { Store } = require('./store')

//const clima = new Clima('buenos aires')
const dom = new DOM()

const store = new Store()
const { ciudad } = store.getLocalData()
const clima = new Clima(ciudad)

const obtenerClima = async () => {
    const data = await clima.getClima()
    console.log(data)
    dom.render(data)
}

document.getElementById('boton').addEventListener('click', (e) => {
    const ciudad = document.getElementById('ciudad').value 
    const form = document.getElementById('form')
    //console.log(ciudad)
    clima.cambiarInput(ciudad)
    store.setLocalData(ciudad)
    obtenerClima()

    form.reset()
    e.preventDefault()
})

document.addEventListener('DOMContentLoaded', obtenerClima())