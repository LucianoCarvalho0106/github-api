let inputPesquisar = document.getElementById("pesquisa")
let bntPesquisar = document.getElementById("btn-pesquisar")
let foto = document.getElementById("foto")
let nome1 = document.getElementById("nome")
let bio = document.getElementById("descricao")
let repositorio = document.getElementById("repositorio")
let seguidores = document.getElementById("seguidores")
let seguindo = document.getElementById("seguindo")



const pesquisarNome = ()=>{
bntPesquisar.addEventListener('click',()=>{
    
    fetch(`https://api.github.com/users/${inputPesquisar.value}`)
    .then(data=> data.json())
    //.then(dado=>console.log(dado))
    .then((dado)=> {
        nome1.innerHTML = dado.name;
       
    })
   
})
   
}

const pesquisarFoto = ()=>{
    bntPesquisar.addEventListener('click',()=>{
        
        fetch(`https://api.github.com/users/${inputPesquisar.value}`)
        .then(data=> data.json())
        .then((data)=> {
            foto.src=`https://avatars.githubusercontent.com/u/${data.id}?v=4`
            console.log(data)
        })
       
    })
       
    }

    const pesquisarDescricao = ()=>{
        bntPesquisar.addEventListener('click',()=>{
            
            fetch(`https://api.github.com/users/${inputPesquisar.value}`)
            .then(data=> data.json())
            .then((data)=> {
                bio.innerHTML = data.bio
            }) 
           
        })
           
        }

        const pesquisarRepositorio = ()=>{
            bntPesquisar.addEventListener('click',()=>{
                
                fetch(`https://api.github.com/users/${inputPesquisar.value}`)
                .then(data=> data.json())
                .then((data)=> {
                    repositorio.innerHTML = data.public_repos
                }) 
               
            })
               
            } 

            const pesquisarSeguidores = ()=>{
                bntPesquisar.addEventListener('click',()=>{
                    
                    fetch(`https://api.github.com/users/${inputPesquisar.value}`)
                    .then(data=> data.json())
                    .then((data)=> {
                        seguidores.innerHTML = data.followers

                    }) 
                   
                })
                   
                } 

                const pesquisarSeguindo = ()=>{
                    bntPesquisar.addEventListener('click',()=>{
                        
                        fetch(`https://api.github.com/users/${inputPesquisar.value}`)
                        .then(data=> data.json())
                        .then((data)=> {
                            seguindo.innerHTML = data.following
    
                        }) 
                       
                    })
                       
                    } 

pesquisarNome()
pesquisarFoto()
pesquisarDescricao()
pesquisarRepositorio()
pesquisarSeguidores()
pesquisarSeguindo()

//Lucianocarvalho0106
//rafaballerini

