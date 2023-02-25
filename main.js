let boton = document.querySelector('.btn-enviar')
boton.addEventListener('click',(e) => {
    e.preventDefault()
   let usuario = document.querySelector('.usuario').value
   let password =  document.querySelector('.password').value
   let valdacion =/^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    if(usuario === '' || password === ''){
        alert('Por favor llene todos los campos')
    }if(valdacion.test(usuario)){
            alert('El usuario es correcto')
        }else{
            alert('El usuario no es correcto')
        }
    

})
