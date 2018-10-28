/*--------------------INÍCIO DO SCRIPT QUESTÃO 1--------------------------*/
    //função para retornar Id de elementos html
    function getId(id){    
        return document.getElementById(id)    
    }   
    function getIdValue(id){    
        return document.getElementById(id).value   
    }   
    //função para transformar em valor reservado no input do html e transformar em float
    function getValor(val){    
        var valor = getId(val).value.replace(',','.')    
        return parseFloat(valor)    
    }    
    //função para calcular média de valor e lançar resposta no input indicado
    function clicar(){    
        var total = (getValor('minima')+getValor('maxima')) / 2    
        getId('medio').value = total    
    }
/*----------------------FIM DO SCRIPT QUESTÃO 1---------------------------*/
/*--------------------INÍCIO DO SCRIPT QUESTÃO 2--------------------------*/
    //função para reseervar cotação do dólar em relação ao real
    function conversor(){
        var real = getValor('cotacaoDolar') * getValor('dolar')
        getId('convertidoReal').value = real 
    }
/*----------------------FIM DO SCRIPT QUESTÃO 2---------------------------*/
/*----------------------INÍCIO DO SCRIPT QUESTÃO 3---------------------------*/
    //função para escrever texto na tela para o usuário visualizar
    
    function addMenssagem(id , texto) {
        var mensagem = getId(id)
        mensagem.textContent = texto
    }

    //função para cálculo de comissão por peça vendida
    function caculaComissao(){
        var porcentagemComissao = 0.05
        var comissao = (getValor('valorUnitario') * getValor('qtdVenda')) * porcentagemComissao
        addMenssagem('comissao' , "O " + getIdValue('idVendedor') + " receberá R$ " + comissao + " de comissão, por ter vendido " + getValor('qtdVenda') + " peças do código: " + getValor('codPeca'))     
    }
/*--------------------FIM DO SCRIPT QUESTÃO 3--------------------------*/
