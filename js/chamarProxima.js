function chamarProxima() {
    let senhaChamado = "";

    // Primeiro tenta SP (caso não tenha sido a última)
    if (ultimoTipoChamado !== "SP") {
        if (filaSP.length > 0) {
            senhaChamado = filaSP.shift();
            ultimoTipoChamado = "SP";
        }
    }

    // SE → SG
    if (!senhaChamado) {
        if (filaSE.length > 0) {
            senhaChamado = filaSE.shift();
            ultimoTipoChamado = "SE";
        }
        else if (filaSG.length > 0) {
            senhaChamado = filaSG.shift();
            ultimoTipoChamado = "SG";
        }
    }

    // Nenhuma senha
    if (!senhaChamado) {
        document.getElementById("chamadaAtual").innerText =
            "Nenhuma senha na fila.";
        return;
    }

    document.getElementById("chamadaAtual").innerText =
        "Chamando senha: " + senhaChamado;

    atualizarPainel(senhaChamado);
}
