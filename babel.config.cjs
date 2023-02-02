module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],

    //? solucion para hacer uso de las variables de entorno tanto en testig como en dessarrollo 
    plugins:[
        function(){
            return {
                visitor :{
                    MetaProperty(path){
                        path.replaceWithSourceString('process');
                    }
                }
            }
        }
    ]
}