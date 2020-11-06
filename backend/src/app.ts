import * as restify from 'restify'
import bodyParser from 'body-parser'

import routerConfig from './routers'


import cors from './utils/cors'
import env from './config/environments'
//import cors from './utils/cors';

class Application{
    app: any
    port: any
    connection: any

    constructor(){
        this.app = restify.createServer()
        this.port = env.SERVER_PORT
        
    }

    listen(){
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded( { extended:false } ));
        

        this.configCors()                
        this.routes(  )
        this.app.listen( this.port, () =>{
            console.log(`Api rodando da porta ${this.port}`);
            
        })
                

    }

    configCors(){
        this.app.pre( cors.preflight )
        this.app.use( cors.actual )
        this.app.use( bodyParser.json() )
        this.app.use( bodyParser.urlencoded({extended: true}) )
    }



    routes(  ){
        let deps = {
            app: this.app
            
        }
        //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        routerConfig( deps )
    }
}

export default new Application