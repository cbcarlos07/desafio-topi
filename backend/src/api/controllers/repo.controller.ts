import repoService from "../services/repo.service";


class RepoController{

    pesquisar(req, res){
        console.log(req.body);
        
        const { lang, page } = req.body
        repoService
            .pesquisar( lang, page )
            .then( response =>{
                res.send(  response  )
            })
    }

}

export default new RepoController