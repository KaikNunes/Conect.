src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">




$(document).ready(function() {
  $('#action_menu_btn').click (function() {
    $('.action_menu').toggle();
  });
});

  $(document).ready(function() {
    $('.send_btn').on('click', function() {
      sendMessage();
    });
    
    $('.type_msg').on('keydown', function(event) {
      if (event.keyCode === 13) {
        sendMessage();
      }
    });
    

    function sendMessage() {
      var message = $('.type_msg').val();
      var fileInput = document.getElementById('fileInput');
      var file = fileInput.files[0];
      fileInput.value = null;
      // fileInput.files[0] = undefined;

      if (file) {
        // Faça o upload do arquivo para o servidor ou realize as ações necessárias
        // Aqui você pode chamar uma função ou fazer uma requisição AJAX para enviar o arquivo para o servidor
        console.log('Arquivo selecionado:', file.name);
      }
      // Verifica se o arquivo selecionado é uma imagem
      if (file && file.type.startsWith('image/')) {
        var reader = new FileReader();

        reader.onload = function(event) {
          var imageDataURL = event.target.result;

          // Aqui você pode exibir a imagem na janela do chat
          addImageToChat('user', imageDataURL);

          // Faça o upload da imagem para o servidor ou realize as ações necessárias
          // Aqui você pode chamar uma função ou fazer uma requisição AJAX para enviar a imagem para o servidor
          console.log('Imagem selecionada:', file.name);
          console.log('Imagem em formato de URL:', imageDataURL);
        };

        // Lê o arquivo como uma URL de dados
        reader.readAsDataURL(file);
      }

      if (message.trim() !== '') {
        addMessageToChat('user', message);
        $('.type_msg').val('');
        scrollChatToBottom();

        // Simulando uma resposta do outro usuário após um breve atraso
        setTimeout(function() {
          receiveMessage(getRandomResponse());
        }, 1000);
      }
    }
    function addImageToChat(sender, imageURL) {
      var imageContainer = $('<div class="d-flex justify-content-' + (sender === 'user' ? 'end' : 'start') + ' mb-4">');
      var userImage = $();
      var imageElement = $('<img class="imagem_enviada' + (sender === 'user' ? '_send' : '') + '">').attr('src', imageURL);
      var messageTime = $('<span class="msg_time' + (sender === 'user' ? '_send' : '') + '">').text(getCurrentTime());
      imageElement.append(messageTime);
      imageContainer.append(userImage).append(imageElement);
      $('.msg_card_body').append(imageContainer);
    }
    

    function receiveMessage(message) {
      addMessageToChat('other', message);
      scrollChatToBottom();
    }

    function addMessageToChat(sender, message) {
      var messageContainer = $('<div class="d-flex justify-content-' + (sender === 'user' ? 'end' : 'start') + ' mb-4">');
      var userImage = $();
      var messageBox = $('<div class="msg_cotainer' + (sender === 'user' ? '_send' : '') + '">').text(message);
      var messageTime = $('<span class="msg_time' + (sender === 'user' ? '_send' : '') + '">').text(getCurrentTime());
      messageBox.append(messageTime);
      messageContainer.append(userImage).append(messageBox);
      $('.msg_card_body').append(messageContainer);
    }

    function getRandomResponse() {
      var responses = [
        'Obrigado pela mensagem! Estou aqui para ajudar.',
        'Desculpe, mas não tenho informações sobre isso.',
        'Posso verificar isso para você. Aguarde um momento.',
        'Que bom que você entrou em contato! Em que posso ajudar?',
        'Desculpe, mas estou ocupado no momento. Podemos conversar mais tarde?',
        'Claro! Vou verificar a resposta para você.',
        'Tenho uma solução para o seu problema. Vamos lá!',
        'Não se preocupe, eu posso te ajudar com isso.',
        'Hmm, isso é interessante. Deixe-me pesquisar sobre isso.'
      ];
      var randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }

    function getCurrentTime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return hours + ':' + minutes + ', ' + 'Hoje';
    }

    function scrollChatToBottom() {
      var chatBody = $('.msg_card_body');
      chatBody.scrollTop(chatBody[0].scrollHeight);
    }
  });

  (function() {
    var chat = {
      messageToSend: '',
      messageResponses: [
        'Why did the web developer leave the restaurant? Because of the table layout.',
        'How do you comfort a JavaScript bug? You console it.',
        'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
        'What is the most used language in programming? Profanity.',
        'What is the object-oriented way to become wealthy? Inheritance.',
        'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
      ],
      init: function() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
      },
      cacheDOM: function() {
        this.$chatHistory = $('.chat-history');
        this.$button = $('button');
        this.$textarea = $('#message-to-send');
        this.$chatHistoryList = this.$chatHistory.find('ul');
      },
      bindEvents: function() {
        this.$button.on('click', this.addMessage.bind(this));
        this.$textarea.on('keyup', this.addMessageEnter.bind(this));
      },
      render: function() {
        this.scrollToBottom();
        if (this.messageToSend.trim() !== '') {
          var template = Handlebars.compile($("#message-template").html());
          var context = {
            messageOutput: this.messageToSend,
            time: this.getCurrentTime()
          };

          this.$chatHistoryList.append(template(context));
          this.scrollToBottom();
          this.$textarea.val('');

          // Respostas
          var templateResponse = Handlebars.compile($("#message-response-template").html());
          var contextResponse = {
            response: this.getRandomItem(this.messageResponses),
            time: this.getCurrentTime()
          };

          setTimeout(function() {
            this.$chatHistoryList.append(templateResponse(contextResponse));
            this.scrollToBottom();
          }.bind(this), 1500);

        }

      },

      addMessage: function() {
        this.messageToSend = this.$textarea.val();
        this.render();
      },
      addMessageEnter: function(event) {
        // Enter foi pressionado
        if (event.keyCode === 13) {
          this.addMessage();
        }
      },
      scrollToBottom: function() {
        this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
      },
      getCurrentTime: function() {
        return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
      },
      getRandomItem: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

    };

    chat.init();

    var searchFilter = {
      options: {
        valueNames: ['name']
      },
      init: function() {
        var userList = new List('people-list', this.options);
        var noItems = $('<li id="no-items-found">No items found</li>');

        userList.on('updated', function(list) {
          if (list.matchingItems.length === 0) {
            $(list.list).append(noItems);
          } else {
            noItems.detach();
          }
        });
      }
    };

    searchFilter.init();

  })();
