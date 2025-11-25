function gerarNumero(tipo) {
    contador[tipo]++;
    const hoje = new Date();

    let YY = String(hoje.getFullYear()).slice(2);
    let MM = String(hoje.getMonth() + 1).padStart(2, "0");
    let DD = String(hoje.getDate()).padStart(2, "0");
    let SQ = String(contador[tipo]).padStart(3, "0");

    return `${YY}${MM}${DD}-${tipo}${SQ}`;
}