const { conexion } = require('../db');

const verDeportes = async function (id) {
    console.log('la id: ' , id)

    var buscarPlan='SELECT * FROM "Servicios" WHERE "id"=$1;'
    var parametros=[id]
    var respuestaPlan;
    try{
        respuestaPlan = await conexion.query(buscarPlan, parametros);
    } catch(err){
        console.log("Error al buscar plan: "+err.message);
        return null;
    }

    if (respuestaPlan.rows.length > 0) {
        const videos = respuestaPlan.rows[0].Link.split(",");
        const cantidad = videos.length
        return videos
      } else {
        // La respuesta de la base de datos está vacía
        return null;
      }
      
      
}

module.exports={verDeportes}