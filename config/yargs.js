const descripcion = {
    demand: true,
    alias : 'd',
    desc: 'Descripcion de la tarea'

};
 const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea',{
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}
