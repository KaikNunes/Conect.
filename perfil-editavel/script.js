  // Obtém o elemento do input de arquivo
  var inputElement = document.getElementById("edita");

  // Define um ouvinte de eventos para o input de arquivo
  inputElement.addEventListener("change", handleFiles, false);

  // Função para lidar com a seleção de arquivos
  function handleFiles() {
    var fileList = this.files; // Obter a lista de arquivos selecionados
    var file = fileList[0]; // Obter o primeiro arquivo da lista

    // Verifica se um arquivo foi selecionado
    if (file) {
      var reader = new FileReader();

      // Define uma função para ser executada quando o arquivo for carregado
      reader.onload = function (e) {
        var imageElement = document.getElementById("fototeste");
        imageElement.src = e.target.result; // Define a imagem de perfil para a imagem carregada
      };

      // Lê o arquivo como um URL de dados
      reader.readAsDataURL(file);
    }}
