function login(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    if (emailInput && passwordInput) {
        var email = emailInput.value;
        var password = passwordInput.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            window.location.href = "../../pagina-inicial-freelancer/inicial.html";
        })
        .catch(error => {
            alert('Usuário não encontrado');
        });
    }
}
