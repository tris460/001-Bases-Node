//let base = 3; //Mejor manera de declarar variables, reemplaza a var

//Aplicación para mostrar tabla de multiplicar
//const fs = require('fs'); //importa el paquete de manipulacion 
const argv = require('yargs')
    .command('listar','Imprime en pantalla la lista de multiplicar', {
        base:{
            demand: true, //demand es obligatorio
            alias: 'b'
        },
        limite:{
            demand: false, //linea opcional
            alias: 'l',
            default: 10
        }
    })
    .command('crear','Crea un archivo con la tabla de multiplicar', {
        base:{
            demand: true, 
            alias: 'b'
        },
        limite:{
            demand: false,
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const multiplicar = require('./multiplicacion/multiplicacion');
let comando=argv._[0];
switch(comando){
    case 'listar':
        let base=argv.base;
        let limite=argv.limite;
        multiplicar.listarTabla(base,limite)
            .then()
            .catch(error => console.log('Ocurrió un error: '+ error));
    break;
    case 'crear':
        multiplicar
            .crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con éxito`)) //then: porque tenia promesa, lo que pasa si estuvo bien todo
            .catch(error => console.log('Ocurrió un error: '+ error)); //que pasa si hubo error, un reject en la promesa
    break;
    default:
        console.log('Comando no reconocido');
}

/*console.log('Base: ',argv.base);
console.log('Límite: ',argv.limite);
console.log('La opción del menú seleccionado es: ', argv._[0]);
console.log(argv);

const { CLIENT_RENEG_LIMIT } = require('tls');

let base = 2;
let tabla = '';

for(let i=1; i<11; i++){
    //console.log(base+' x '+i+' = '+base*i); //Imprime en consola las variables
    tabla += `${base} x ${i} = ${base*i}\n`;
    //console.log(`${base} x ${i} = ${base*i}`);
}

fs.writeFile(`tablas/tabla-${base}.txt`,tabla,(err) => {
    if(err) throw err;
    console.log(`El archivo tabla-${base} ha sido generado con éxito`);
});*/
