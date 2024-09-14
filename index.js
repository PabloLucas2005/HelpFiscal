

// Adicionar cor branca para o icone svg e para o texto ao passar o mouse

let p = document.querySelectorAll("section.botoes ul li a p");
let a = document.querySelectorAll("section.botoes ul li a");
let svg = document.querySelectorAll("section.botoes ul li a svg");

a.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    p[index].classList.toggle("branco");
    svg[index].style.stroke = "#FAFAFA";
  });
});

a.forEach((item, index) => {
  item.addEventListener("mouseout", () => {
    p[index].classList.toggle("branco");
    svg[index].style.stroke = "#000000";
  });
});

// Verificar data e horário
let dataCompleta = new Date();
let dataAtual = dataCompleta.toLocaleDateString();

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let time;
let h = addZero(dataCompleta.getHours());
let m = addZero(dataCompleta.getMinutes());
  document.querySelector(".data").innerHTML = dataAtual;

let hora = document.querySelector(".hora");

function mudarHora() {
  dataCompleta = new Date();
  h = addZero(dataCompleta.getHours());
  m = addZero(dataCompleta.getMinutes());
  time = h + ":" + m;
  hora.innerHTML = time;
}

setInterval(mudarHora, 0);



// Verificar o horário para saber se deve ser bom dia, boa tarde ou boa noite
if(document.title === 'Tarefas Mensais'){

let saudacaoPorHora;

async function verificarHorario() {
  if (h < 12) {
    saudacaoPorHora = "Bom dia";
  } else if (h >= 12 && h < 18) {
    saudacaoPorHora = "Boa tarde";
  } else if (h >= 18) {
    saudacaoPorHora = "Boa noite";
  }
}

let competencia = dataAtual.split("/");
competencia = "0" + (competencia[1] - 1) + "/" + competencia[2];
let contatos = document.querySelector("select#contatos");
let campoPedidoFaturamento = document.querySelector("p.pedidoFaturamento");

async function verificarMudancaOpcao() {
  await verificarHorario();
  let mensagemFranco = `${saudacaoPorHora},<br><br>Solicitamos os recebimentos das empresas FFX ENGENHARIA, FFX AGRONÉGOCIO e CONSORCIO ASSU, da competência ${competencia}, para fins de apuração do simples nacional. `;
  let mensagemDarlon = `${saudacaoPorHora},<br><br>Solicitamos o faturamento da TOPNET da competência ${competencia}, para fins de apuração do simples nacional. `;
  let mensagemTales = `${saudacaoPorHora},<br><br>Solicitamos o faturamento da TS TECNOLOGIA da competência ${competencia}, para fins de apuração do simples nacional. `;
  let mensagemKleber = `${saudacaoPorHora},<br><br>Solicitamos o faturamento de telecomunição da K.M TELECOMUNICAÇÕES da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemAnaCristina = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da ACA SERVIÇOS MEDICOS da competência ${competencia}, se possível encaminhar extrato de recebimento por favor.`;
  let mensagemDrReinaldo = `${saudacaoPorHora},<br><br>Solicitamos o faturamento da EQUIPAOBRA LOCAÇÃO da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemLoyanna = `${saudacaoPorHora},<br><br>Solicitamos o faturamento da FRANCA E SILVA da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemGildo = `${saudacaoPorHora},<br><br>Solicitamos o faturamento de locação da GLF ENGENHARIA da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemCibele = `${saudacaoPorHora},<br><br>Solicitamos o faturamento da KARIRI CONSTRUÇÕES da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemNewton = `${saudacaoPorHora},<br><br>Solicitamos o faturamento de locação da NCA LOCAÇÃO da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemLucyany = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da PAV DO BRASIL da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemIslania = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da PETRUS LOCAÇÕES da competência ${competencia}, para fins de apuração do simples nacional.`;
  let mensagemBill = `Perguntar para ele se a STEIG INDUSTRIA emitiu nota de mercadoria, ele que emite.`;
  let mensagemRejane = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da FOB PAVIMENTAÇÃO da competência ${competencia}, para fins de apuração do simples nacional, enviar extrato e caso aja antecipação de titulo, encaminhar somente os referente a competência.`;
  let mensagemDuduJato = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da METRODATA ENGENHARIA da competência ${competencia}.`;
  let mensagemHigor = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da PROJETCONS da competência ${competencia}.`;
  let mensagemCeca = `${saudacaoPorHora},<br><br>Solicitamos o recebimento das empresas SN SINALIZADORA, VIACON CONSTRUCOES, VIAENCOSTA ENGENHARIA e VIALIM ENGENHARIA da competência ${competencia}.`;
  let mensagemHernani = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da STEIG ENGENHARIA da competência ${competencia}.`;
  let mensagemMarcio = `${saudacaoPorHora},<br><br>Solicitamos o recebimento da TERESINHA MARIA da competência ${competencia}.`;

  switch (contatos.selectedOptions[0].value) {
    case "Franco":
      campoPedidoFaturamento.innerHTML = mensagemFranco;
        break;
    case "Darlon":
      campoPedidoFaturamento.innerHTML = mensagemDarlon;
        break;
    case "Tales":
      campoPedidoFaturamento.innerHTML = mensagemTales;
        break;
    case "Kleber":
      campoPedidoFaturamento.innerHTML = mensagemKleber;
        break;
    case "Ana Cristina":
      campoPedidoFaturamento.innerHTML = mensagemAnaCristina;
        break;
    case "Dr Reinaldo":
      campoPedidoFaturamento.innerHTML = mensagemDrReinaldo;
        break;
    case "Loyanna":
      campoPedidoFaturamento.innerHTML = mensagemLoyanna;
        break;
    case "Gildo":
      campoPedidoFaturamento.innerHTML = mensagemGildo;
        break;
    case "Cibele":
      campoPedidoFaturamento.innerHTML = mensagemCibele;
        break;
    case "Newton":
      campoPedidoFaturamento.innerHTML = mensagemNewton;
        break;
    case "Lucyany":
      campoPedidoFaturamento.innerHTML = mensagemLucyany;
        break;
    case "Islania":
      campoPedidoFaturamento.innerHTML = mensagemIslania;
        break;
    case "Bill":
      campoPedidoFaturamento.innerHTML = mensagemBill;
        break;
    case "Rejane":
      campoPedidoFaturamento.innerHTML = mensagemRejane;
        break;
    case "Dudu Jato":
      campoPedidoFaturamento.innerHTML = mensagemDuduJato;
        break;
    case "Higor":
      campoPedidoFaturamento.innerHTML = mensagemHigor;
        break;
    case "Ceca":
      campoPedidoFaturamento.innerHTML = mensagemCeca;
        break;
    case "Hernani":
      campoPedidoFaturamento.innerHTML = mensagemHernani;
        break;
    case "Marcio":
      campoPedidoFaturamento.innerHTML = mensagemMarcio;
        break;
      }
  }


setInterval(verificarMudancaOpcao, 0);

// Pedido Dsre

let textoDsre = document.querySelector('div.textoEnvio p.pedidoDsre')

function verificarHorarioDsre(){
  textoDsre.innerHTML = `${saudacaoPorHora},<br><br>

Solicitamos o envio das notas fiscais de serviço tomado para a realização da DSRE. Lembramos que o prazo para entrega da DSRE é até o 5º dia do mês subsequente à prestação do serviço contratado (5º dia do mês atual). O e-mail para o envio das notas fiscais de serviço tomado é: fiscal01@officecont.cnt.br e pablo.lucas@officecontpe.com.br.`
}
  setInterval(verificarHorarioDsre, 0)
}

// Calculadora 

if(document.title === 'Calculadora'){
  function verificarCampos(){

    // Calculadora Pis-Cofins
    let debitoPis
    let debitoCofins
    let faturamentoPisCofins = (document.querySelector('input[name="faturamento"]').value).replaceAll(',','.')
    if(faturamentoPisCofins == ''){
      document.querySelector('input[name="basePisCofins"]').value = ''
      debitoPis = document.querySelector('input[name="debitoPis"]').value = ''
      debitoCofins = document.querySelector('input[name="debitoCofins"]').value = ''
    }else{
      document.querySelector('input[name="basePisCofins"]').value = faturamentoPisCofins
      debitoPis = document.querySelector('input[name="debitoPis"]').value = (faturamentoPisCofins * 0.0065).toFixed(2)
      debitoCofins = document.querySelector('input[name="debitoCofins"]').value = (faturamentoPisCofins * 0.03).toFixed(2)
    }
    
    
    let retencaoPis = document.querySelector('input[name="retencaoPis"]').value.replaceAll(',','.')
    let retencaoCofins = document.querySelector('input[name="retencaoCofins"]').value.replaceAll(',','.')
    
    let valorDevidoPis = (debitoPis - retencaoPis).toFixed(2)
    console.log(debitoPis)
    if(valorDevidoPis < 0){
      document.querySelector('input[name="valorDevidoPis"]').value = 'Insira o faturamento antes'
    } else if(faturamentoPisCofins == ''){
      document.querySelector('input[name="valorDevidoPis"]').value = ''
    }else
      document.querySelector('input[name="valorDevidoPis"]').value = valorDevidoPis

    let valorDevidoCofins = (debitoCofins - retencaoCofins).toFixed(2)

    if(valorDevidoCofins < 0){
      document.querySelector('input[name="valorDevidoCofins"]').value = 'Insira o faturamento antes'
    } else if(faturamentoPisCofins == ''){
      document.querySelector('input[name="valorDevidoCofins"]').value = ''
    } else {
      document.querySelector('input[name="valorDevidoCofins"]').value = valorDevidoCofins
    }
      

    // Calculadora Irpj

    let faturamentoTrimestral = document.querySelector('input[name="faturamentoTrimestral"]').value.replaceAll(',','.')
    let porcentagemBase = document.querySelector('select[name="base"]').value
    let baseIrpj

    if(porcentagemBase === '8%' && faturamentoTrimestral !== ''){
      baseIrpj = document.querySelector('input[name="baseIrpj"]').value = (faturamentoTrimestral * 0.08).toFixed(2)
    }else if(faturamentoTrimestral == ''){
      baseIrpj = document.querySelector('input[name="baseIrpj"]').value = ''
    }else if(porcentagemBase === '32%' && faturamentoTrimestral !== ''){
      baseIrpj = document.querySelector('input[name="baseIrpj"]').value = (faturamentoTrimestral * 0.32).toFixed(2)
    }

    let subTotalIrpj
    if(faturamentoTrimestral == ''){
     subTotalIrpj = (document.querySelector('input[name="subTotalIrpj"]').value = '')
    } else {
     subTotalIrpj = parseFloat(document.querySelector('input[name="subTotalIrpj"]').value = (baseIrpj * 0.15).toFixed(2))
    }
    
    let baseExcedente
    if(baseIrpj > 60000){
      baseExcedente = document.querySelector('input[name="baseExcedente"]').value = (baseIrpj - 60000).toFixed(2)
    } else if(baseIrpj < 60000){
      baseExcedente = document.querySelector('input[name="baseExcedente"]').value = ''
    }
    let subTotalExcedente
    if(baseIrpj > 60000){
      subTotalExcedente = parseFloat(document.querySelector('input[name="subTotalExcedente"]').value = (baseExcedente * 0.10).toFixed(2))
    } else if(baseIrpj < 60000){
      subTotalExcedente = document.querySelector('input[name="subTotalExcedente"]').value = ''
    }
   
    let retencaoIrpj = document.querySelector('input[name="retencaoIrpj"]').value.replaceAll(',','.')
    let valorAntecipadoAnteriormenteIRpj = document.querySelector('input[name="valorAntecipadoAnteriormenteIRpj"]').value.replaceAll(',','.')
    if(faturamentoTrimestral == ''){
      let valorDevidoIrpj = document.querySelector('input[name="valorDevidoIrpj"]').value = ''
    }else{
      let valorDevidoIrpj = document.querySelector('input[name="valorDevidoIrpj"]').value = (subTotalIrpj + subTotalExcedente) - (retencaoIrpj) - (valorAntecipadoAnteriormenteIRpj)
    }
    
   
    // Calculadora Csll
    let baseCsll
    if(porcentagemBase === '8%' && faturamentoTrimestral !== ''){
      baseCsll = document.querySelector('input[name="baseCsll"]').value = (faturamentoTrimestral * 0.12).toFixed(2)
    }else if(faturamentoTrimestral === ''){
      baseCsll = document.querySelector('input[name="baseCsll"]').value = ''
    }else if(porcentagemBase === '32%' && faturamentoTrimestral !== ''){
      baseCsll = document.querySelector('input[name="baseCsll"]').value = (faturamentoTrimestral * 0.32).toFixed(2)
    }
    let subTotalCsll;
    if(faturamentoTrimestral === ''){
      subTotalCsll = document.querySelector('input[name="subTotalCsll"]').value = ''
    }else if(faturamentoTrimestral > 0){
      subTotalCsll = document.querySelector('input[name="subTotalCsll"]').value = (baseCsll * 0.09).toFixed(2)
    }
    let retencaoCsll = document.querySelector('input[name="retencaoCsll"]').value.replaceAll(',','.')
    let valorAntecipadoAnteriormenteCsll = document.querySelector('input[name="valorAntecipadoAnteriormenteCsll"]').value.replaceAll(',','.')
    if(faturamentoTrimestral == ''){
      let valorDevidoCsll = document.querySelector('input[name="valorDevidoCsll"]').value = ''
    }else{
      let valorDevidoCsll = document.querySelector('input[name="valorDevidoCsll"]').value = (subTotalCsll - retencaoCsll - valorAntecipadoAnteriormenteCsll).toFixed(2)
    }
    
    
  }

  setInterval(verificarCampos,0)
}

// Certidões

function navigateToURL(selectElement) {
  var url = selectElement.value;
  if (url) {
      window.location.href = url;
  }
}


