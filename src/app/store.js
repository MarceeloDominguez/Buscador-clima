export class Store {

    constructor(){
        this.ciudad
        this.defaultCiudad = 'Buenos Aires'
    }

    //obtener lo que tenemos dentro del localstorage
    getLocalData(){
        if(localStorage.getItem('ciudad') === null){
            this.ciudad = this.defaultCiudad
        }else{
            this.ciudad = localStorage.getItem('ciudad')
        }

        return {
            ciudad: this.ciudad
        }
    }
    
    //almacenar dentro del localstorage
    setLocalData(ciudad){
        localStorage.setItem('ciudad', ciudad)
    }
}