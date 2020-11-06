import * as restifyRouter from 'restify-router'
import repoController from '../api/controllers/repo.controller'


const Router = restifyRouter.Router




const initRouter = new Router()

initRouter.get('', (req, res, next) =>{
    res.send( {msg: 'TOPi Api'} )
})


initRouter.post('search', repoController.pesquisar)

export default initRouter