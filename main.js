let boton = document.querySelector('.btn-enviar')
boton.addEventListener('click',(e) => {
    e.preventDefault()
   let usuario = document.querySelector('.usuario').value
   let password =  document.querySelector('.password').value
    let valdacion = /^[a-zA-Z0-9]*$/
    if(usuario === '' || password === ''){
        alert('Por favor llene todos los campos')
    }if(!valdacion.test(password)){
            alert('El usuario es correcto')
        }else if(!valdacion.test(usuario)  ){
            alert('el nombre usuario es correcto')
        }else{
            alert('El usuario no es correcto')
        }
    

})
