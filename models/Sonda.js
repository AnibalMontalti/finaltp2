class Sonda{    
    sondas = []

    insertarSonda = async(sonda) => {
        this.sondas.push(sonda);     
        return this.sondas[this.sondas.length-1]   
    }
    
    listarSondas = async() => {
        return this.sondas
    }

    obtenerSonda = async(id) => {
        const sondasFilter = this.sondas.filter(obj => obj.id == id);       
        return sondasFilter
    }
}

export default Sonda