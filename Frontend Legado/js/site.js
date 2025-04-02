function validaFaleConosco(){
    if(document.frmfaleconosco.txtnome.value == ""){
        alert("Preencha o campo de nome!");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    if(document.frmfaleconosco.txtfone.value == ""){
        alert("Preencha o campo de telefone!");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    if(document.frmfaleconosco.txtemail.value == ""){
        alert("Preencha o campo de email!");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    if(document.frmfaleconosco.selmotivo.value == ""){
        alert("Preencha o motivo!");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }
    if(document.frmfaleconosco.selmotivo.value == "PR" && 
       (!document.frmfaleconosco.selproduto || document.frmfaleconosco.selproduto.value == "")){
        alert("Selecione um produto!");
        document.frmfaleconosco.selproduto.focus();
        return false;
    }
    if(document.frmfaleconosco.txacomentario.value == ""){
        alert("Preencha o campo de comentário!");
        document.frmfaleconosco.txacomentario.focus();
        return false;
    }

    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if(!expRegNome.test(nome)){
        alert("Nome inválido!");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!expRegFone.test(fone)){
        alert("Telefone inválido!");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    return true;
}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");

    if(motivo == "PR"){
        var select = document.createElement("select");
        select.setAttribute("name", "selproduto");

        var option = document.createElement("option");
        option.setAttribute("value", "");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "FR");
        var texto = document.createTextNode("Freezer");
        option.appendChild(texto);
        select.appendChild(option);

        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createTextNode("Geladeira");
        option.appendChild(texto);
        select.appendChild(option);

        elemento.appendChild(select);
    }else{
        if (elemento.firstChild){
            elemento.removeChild(elemento.firstChild);
        }
    }
}