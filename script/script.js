let inputPesquisar = document.getElementById("pesquisa")
let bntPesquisar = document.getElementById("btn-pesquisar")
let foto = document.getElementById("foto")
let nome1 = document.getElementById("nome")
let bio = document.getElementById("descricao")
let repositorio = document.getElementById("repositorio")
let seguidores = document.getElementById("seguidores")
let seguindo = document.getElementById("seguindo")
let perfil = document.getElementById("perfil")
let btnLimpar = document.getElementById('btn-limpar')


function limpar(){
    btnLimpar.addEventListener('click',()=>{
        perfil.classList.remove("exibir")
        inputPesquisar.value=''
    })
}
const pesquisarNome = ()=>{
    
bntPesquisar.addEventListener('click',()=>{
    if(inputPesquisar.value == ""){
        alert('DIGITE UM USUÁRIO PARA PESQUISAR')
        return
    }
    perfil.classList.add("exibir")
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


