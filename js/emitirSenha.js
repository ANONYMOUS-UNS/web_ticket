function emitirSenha(tipo) {
    let senha = gerarNumero(tipo);

    if (tipo === "SP") filaSP.push(senha);
    if (tipo === "SG") filaSG.push(senha);
    if (tipo === "SE") filaSE.push(senha);

    document.getElementById("ultimaSenha").innerText =
        "Última senha emitida: " + senha;
}