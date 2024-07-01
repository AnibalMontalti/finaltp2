import Sonda from "../models/Sonda.js"

class SondaService{
    sondaModel = new Sonda();

    insertarSonda = async(id,temperatura) => {
        try{                      
            if(!/^\d+$/.test(id)) throw error
            if(!/^\d+$/.test(temperatura)) throw error

            const idNumber = parseInt(id);
            const tempNumber = parseInt(temperatura);

            if(idNumber < 0 || idNumber > 5) throw error
            if(tempNumber < -20 || tempNumber > 100) throw error
            
            var date = new Date();
            var fecha = date.toTimeString();            
            const sonda = {id,temperatura,fecha}                        
            const data = await this.sondaModel.insertarSonda(sonda);
            return data
        }catch(error){
            throw error
        }
    }

    listarSondas = async() => {
        try{
            const data = await this.sondaModel.listarSondas();
            return data
        }catch(error){
            throw error
        }
    }

    obtenerSonda = async(id) => {
        try{
            if(!/^\d+$/.test(id)) throw error

            const idNumber = parseInt(id);
            if(idNumber < 0 || idNumber > 5) throw error

            const data = await this.sondaModel.obtenerSonda(id);
            return data
        }catch(error){
            throw error
        }
    }
}

export default SondaService