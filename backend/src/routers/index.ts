import * as route from 'restify-router'
import initRouter from './init.route'
const Route =  route.Router
const router = new Route()
const routerConfig = deps => {
    const { app } = deps
    router.add('/', initRouter)
    router.applyRoutes(app)

}

export default routerConfig