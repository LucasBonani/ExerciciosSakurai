/*--------------------INÍCIO DO SCRIPT QUESTÃO 1--------------------------*/
    //função para retornar Id de elementos html
    function id(id){    
        return document.getElementById(id)    
    }   
    //função para transformar em valor reservado na variável em float
    function getValor(val){    
        var valor = id(val).value.replace(',','.')    
        return parseFloat(valor)    
    }    
    //função para calcular média de valor e lançar resposta no input indicado
    function clicar(){    
        var total = (getValor('minima')+getValor('maxima')) / 2    
        id('medio').value = total    
    }
/*----------------------FIM DO SCRIPT QUESTÃO 1---------------------------*/
/*--------------------INÍCIO DO SCRIPT QUESTÃO 2--------------------------*/
    //função para reseervar cotação do dólar em relação ao real
    function conversor(){
        var real = getValor('cotacaoDolar') * getValor('dolar')
        id('convertidoReal').value = real 
    }
/*----------------------FIM DO SCRIPT QUESTÃO 2---------------------------*/
