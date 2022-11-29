function agendar(opcao) {
    let dias = prompt("Digite por quantos dias deseja reservar o quarto:");
    let preco = 0;
    let valorTotal = 0;
    let resultado = "";

    if (dias == "") {
        alert("Você deve inserir um valor!");
        return false;
    } else {
        dias = parseInt(dias);
    }

    if (isNaN(dias)) {
        alert("Insira um valor válido!");
        return false;
    }

    if (opcao == 1) {
        preco = 149.99;

        valorTotal = dias * preco;
        valorTotal = Math.ceil(valorTotal);
        resultado = "O valor total para essa reserva será aproximadamente: R$ " + valorTotal + ".";
    } else if (opcao == 2) {
        preco = 109.99;

        valorTotal = dias * preco;
        valorTotal = Math.ceil(valorTotal);
        resultado = "O valor total para essa reserva será aproximadamente: R$ " + valorTotal + ".";
    } else if (opcao == 3) {
        preco = 89.90;

        valorTotal = dias * preco;
        valorTotal = Math.ceil(valorTotal);
        resultado = "O valor total para essa reserva será aproximadamente: R$ " + valorTotal + ".";
    } 

    alert(resultado);
}