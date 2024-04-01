let contador = 0
let input = document.getElementById('input-tarefas');
let btnadd = document.getElementById('botao');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pega o valores digitados no input
    if ((input.value !== "") && (input.value !== null) && (input.value !== undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item" >
        <div onclick="marcaTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="material-symbols-outlined">
                    radio_button_unchecked
            </i>
        </div>
        <div onclick="marcaTarefa(${contador})" class="item-nome">
            ${input.value}
        </div>
        <div class="item-botao">
            <button onclick="Deletar(${contador})" class="deletar" type="button">
                <i class="material-symbols-outlined">delete</i>
                Deletar
            </button>
        </div>
        </div>`;

        //adiciona outro item na lista
        main.innerHTML += novoItem;

        input.value == "";
        input.focus();
    }
};

function marcaTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    var icone = document.getElementById('icone_'+id);

    if (classe == "item"){
        item.classList.remove;
        item.classList.add('item-clicado');

        icone.innerHTML="check_circle";
        
        item.parentNode.appendChild(item)
    } else {
        item.classList.remove('item-clicado');
        item.classList.add('item');

        icone.innerHTML="radio_button_unchecked";
    };
    
}

function Deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


input.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        btnadd.click();
        
    }
});

