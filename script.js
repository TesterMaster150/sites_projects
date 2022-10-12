function visualizarSenha(){
    var x = document.getElementById("user_pass");
    if (x.type === "password"){
    x.type = "text";
    } else {
    x.type = "password";
    }
}

function darkMode (){
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function onClick(event){
        document.body.style.backgroundColor = 'grey';
    })
}