

Arr = []
function Submit(){

const NameID = document.getElementById("Nome").value
const CPFID = document.getElementById('CPF').value



const User = {
 nome:NameID,
 cpf:CPFID
}

const Resultado ='NOME COMPLETO : ' + User.nome + '\n' + 
'CPF : ' + User.cpf

const Url = `https://wa.me/${5511965404572}?text=${Resultado}`

window.open(Url, '_blank');
}
