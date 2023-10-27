function insert(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function x() {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + '*';
}

  function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro"; 
        }
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}



