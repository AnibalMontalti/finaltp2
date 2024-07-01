import SondaService from "../services/SondaService.js"

class SondaController{

    sondaService = new SondaService();
    
    insertarSonda = async(req,res) => {
        try{            
            const {id, temperatura} = req.body;
            if(!id || !temperatura) throw error;
            const data = await this.sondaService.insertarSonda(id,temperatura);
            res.status(201).send({success: true, return: data, message: "Sonda creada con éxito"});
        }catch(error){
            res.status(400).send({success:false, errorMsg: "Datos no válidos"})
        }
    }

    listarSondas = async(req,res) => {
        try{
            const data = await this.sondaService.listarSondas();            
            res.status(200).send({success: true, return: data, message: "Sondas obtenidas con éxito"});
        }catch(error){
            res.status(400).send({success:false, errorMsg: "Ocurrió un error inesperado"})
        }
    }

    obtenerSonda = async(req,res) => {
        try{
            const {id} = req.params
            const data = await this.sondaService.obtenerSonda(id);
            res.status(200).send({success: true, return: data, message: "Sonda obtenida con éxito"});
        }catch(error){
            res.status(404).send({success:false, errorMsg: "Número de sonda incorrecto"})
        }
    }
}

export default SondaController