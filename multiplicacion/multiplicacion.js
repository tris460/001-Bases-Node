const fs = require('fs'); //importa el paquete de manipulacion 

let crearArchivo = (base,limite) => { //Funcion, se crea igual que una variable
    return new Promise((resolve, reject) => { //Promesa: unna vez que se termine un proceso, se 'promete' que va a iniciar otro proceso
    //Resolve: resuelto, Reject: mensaje de error
        let tabla = '';
        
        if(!Number(base)){ //Funcion de JS para ver si es un número, retorna true o false
            reject('Favor de insertar un número válido');
            return; //Return detiene la ejecución, sino se siguen ejecutando las demas lineas, como un break
        }
        if(!Number(limite)){ 
            reject('Favor de insertar un límite válido');
            return; 
        }
        for(let i=1; i<=limite; i++){
            tabla += `${base} x ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`,tabla,(err) => {
            if(err) reject(err);
            else
            resolve(`tabla-${base}.txt`);
        });
    }); 
};

let listarTabla = (base,limite) => {
    return new Promise((resolve,reject) => {        
        if(!Number(base)){ 
            reject('Favor de insertar un número válido');
            return; 
        }
        if(!Number(limite)){ 
            reject('Favor de insertar un límite válido');
            return; 
        }
        for(let i=1; i<=limite; i++){
            console.log(`${base} x ${i} = ${base*i}`);
        }
    })
};

module.exports = {
    crearArchivo,
    listarTabla
};//Exportarla para usarla en otro archivo, para hacerlo 'publico'
