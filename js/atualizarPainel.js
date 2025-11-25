function atualizarPainel(senha) {
    painelChamadas.unshift(senha);

    if (painelChamadas.length > 5)
        painelChamadas.pop();

    let painel = document.getElementById("painel");
    painel.innerHTML = "";

    painelChamadas.forEach(s => {
        let li = document.createElement("li");
        li.innerText = s;
        painel.appendChild(li);
    });
}