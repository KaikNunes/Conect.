

// ------Botões Programação
let btnProgramacao = document.getElementById('Programacao')
let btnSite = document.getElementById('Site')

// ------Botões Suporte Técnico
let btnSuporte = document.getElementById('Suporte')
let btnSoftware = document.getElementById('Software')
let btnHardware = document.getElementById('Hardware')
let btnMontagem = document.getElementById('Montagem')
let btnManutencaoPreventiva = document.getElementById('ManutencaoPreventiva')
let btnSubstituicaoPecas = document.getElementById('SubstituicaoPecas')
let btnRecuperacaoPecas = document.getElementById('RecuperacaoPecas')
let btnDiagnostico = document.getElementById('Diagnostico')

// ------Botões Redes
let btnRedes = document.getElementById('Redes')
let btnInfraestrutura = document.getElementById('Infraestrutura')

// ------Botões Gerenciamento de Sistemas
let btnGerencSistemas = document.getElementById('Gerenciamento')
let btnGerencConfiguracao = document.getElementById('GerenciamentoConfiguracao')
let btnGerencCapacidade = document.getElementById('GerenciamentoCapacidade')
let btnGerencDesempenho = document.getElementById('GerenciamentoDesempenho')
let btnGerencIncidentes = document.getElementById('GerenciamentoIncidentes')
let btnGerencOutros = document.getElementById('GerenciamentoOutros')

// ------Botões Consultoria
let btnConsultoria = document.getElementById('Consultoria')
let btnImplementacaoSoftware = document.getElementById('ImplementacaoSoftware')
let btnSegurancaInformacao = document.getElementById('SegurancaInformacao')
let btnTransformacaoDigital = document.getElementById('TransformacaoDigital')
let btnRedesComputadores = document.getElementById('RedesComputadores')
let btnGerenciamentoProjetosTI = document.getElementById('GerenciamentoProjetosTI')

// ------Botões LGPD
let btnTreinamento = document.getElementById('Treinamento')
let btnPacoteOffice = document.getElementById('TreinPacoteOffice')
let btnSistemas = document.getElementById('TreinSistemas')
let btnMontagemManutencao = document.getElementById('TreinMontagemManutencao')
let btnTreinProgramacao = document.getElementById('TreinProgramacao')
let btnTreinRedes = document.getElementById('TreinRedes')

// ------Botões Treinamento
let btnLGPD = document.getElementById('LGPD')
let btnConformidadeLGPD = document.getElementById('ConformidadeLGPD')
let btnSegurancaInfoProtecaoDados = document.getElementById('SegurancaInfoProtecaoDados')
let btnGestaoRiscos = document.getElementById('GestaoRiscos')
let btnPrivacidadeProtecaoTerceiros = document.getElementById('PrivacidadeProtecaoTerceiros')
let btnProcessosAuditoria = document.getElementById('ProcessosAuditoria')


// ------Função para desaparecer os botões
function someBotoes (um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez, onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte, vinteum, vintedois, vintetres, vintequatro, vintecinco, vinteseis, vintesete, vinteoito, vintenove, trinta) {
    um.style.display = "none";
    dois.style.display = "none";
    tres.style.display = "none";
    quatro.style.display = "none";
    cinco.style.display = "none";
    seis.style.display = "none";
    sete.style.display = "none";
    oito.style.display = "none";
    nove.style.display = "none";
    dez.style.display = "none";
    onze.style.display = "none";
    doze.style.display = "none";
    treze.style.display = "none";
    quatorze.style.display = "none";
    quinze.style.display = "none";
    dezesseis.style.display = "none";
    dezessete.style.display = "none";
    dezoito.style.display = "none";
    dezenove.style.display = "none";
    vinte.style.display = "none";
    vinteum.style.display = "none";
    vintedois.style.display = "none";
    vintetres.style.display = "none";
    vintequatro.style.display = "none";
    vintecinco.style.display = "none";
    vinteseis.style.display = "none";
    vintesete.style.display = "none";
    vinteoito.style.display = "none";
    vintenove.style.display = "none";
    trinta.style.display = "none";
}

btnProgramacao.onclick = ()=> {
    btnSite.style.display = "block";

    someBotoes (btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnSuporte.onclick = () => {
    btnSoftware.style.display = "block";
    btnHardware.style.display = "block";

    someBotoes (btnSite, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnHardware.onclick = () => {
    btnMontagem.style.display = "block";
    btnManutencaoPreventiva.style.display = "block";
    btnSubstituicaoPecas.style.display = "block";
    btnRecuperacaoPecas.style.display = "block";
    btnDiagnostico.style.display = "block";

}

btnRedes.onclick = ()=> {
    btnInfraestrutura.style.display = "block";

    someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnGerencSistemas.onclick = () => {
    btnGerencConfiguracao.style.display = "block";
    btnGerencCapacidade.style.display = "block";
    btnGerencDesempenho.style.display = "block";
    btnGerencIncidentes.style.display = "block";
    btnGerencOutros.style.display = "block";

    someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnConsultoria.onclick = () => {
    btnImplementacaoSoftware.style.display = "block";
    btnSegurancaInformacao.style.display = "block";
    btnTransformacaoDigital.style.display = "block";
    btnTransformacaoDigital.style.display = "block";
    btnRedesComputadores.style.display = "block";
    btnGerenciamentoProjetosTI.style.display = "block";

    someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnLGPD.onclick = () => {
    btnConformidadeLGPD.style.display = "block";
    btnSegurancaInfoProtecaoDados.style.display = "block";
    btnGestaoRiscos.style.display = "block";
    btnPrivacidadeProtecaoTerceiros.style.display = "block";
    btnProcessosAuditoria.style.display = "block";

    someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
}

btnTreinamento.onclick = () =>{
    btnPacoteOffice.style.display = "block";
    btnSistemas.style.display = "block";
    btnMontagemManutencao.style.display = "block";
    btnTreinProgramacao.style.display = "block";
    btnTreinRedes.style.display = "block";

    someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria)
}


// someBotoes (btnSite, btnSoftware, btnHardware, btnMontagem, btnManutencaoPreventiva, btnRecuperacaoPecas, btnSubstituicaoPecas, btnDiagnostico, btnInfraestrutura, btnGerencConfiguracao, btnGerencCapacidade, btnGerencDesempenho, btnGerencIncidentes, btnGerencOutros, btnImplementacaoSoftware, btnSegurancaInformacao, btnTransformacaoDigital, btnRedesComputadores, btnGerenciamentoProjetosTI, btnConformidadeLGPD, btnSegurancaInfoProtecaoDados, btnGestaoRiscos, btnPrivacidadeProtecaoTerceiros, btnProcessosAuditoria, btnPacoteOffice, btnSistemas, btnMontagemManutencao, btnTreinProgramacao, btnTreinRedes)
