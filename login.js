var reproducir;
function iniciar(){
    reproducir = document.getElementById('reproducir');

    reproducir.addEventListener('click', go);
}
function go(){
    if (document.form.password.value=='testProximate' && document.form.login.value=='1075258635'){ 
        location.href="aplicacion.html";
        document.form.submit(location.href);
    } 
    else{ 
         alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 
}
addEventListener('load', iniciar);
