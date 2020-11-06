import api from "../../utils/api";


class RepoService {
    

    pesquisar(lang: string, pagina: number){
        return new Promise((resolve, reject)=>{
            let url = this.mountTheURL(lang, pagina)
            console.log(url);
            
            
            api.get( url )
               .then( ( response: any) => {
                   if( response.data.errors ){
                       resolve( [] )
                   }else{
                        resolve(response.data.items )
                   }
               }).catch( e => resolve([]))

        })
         
    }

    mountTheURL(lang: string, pagina: number){
        console.log(lang);
        
        return `/search/repositories?q=language:${lang}&sort=stars&page=${pagina}&per_page=5`
    }

}

export default new RepoService