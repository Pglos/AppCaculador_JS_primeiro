// comentario usados para fiquisação de conteudo


function calcular(tipo , valor){

    if(tipo === 'ac'){

        if(valor === 'c'){
            // limpar visor
            document.getElementById('res').value =''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' ||valor === '.' ){

            document.getElementById('res').value += valor
        }

        if(valor === '='){

            //eval = processa o valor string no interpretador 
            let valorCampo = eval(document.getElementById('res').value)

            //pegar o resultado processado no interpretador e mostra 
            document.getElementById('res').value = valorCampo


        }

    }else if(tipo === 'valor'){

        //document = entra na documentação html

        //getElementById = entra na id res para pegar o valor

        //value = pega o valor

        // += = concatena o valores digitados 

        // valor = mostra o valor no input

        document.getElementById('res').value += valor

    }
    
}