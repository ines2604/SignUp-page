const login = document.getElementById("login");
const signup = document.getElementById("signup");
const button = document.getElementById("a");

function change() {
    const text = button.textContent;
    if (text === "Login") {
        signup.classList.add('hidden');
        login.classList.remove('hidden');
        button.textContent = "Signup"; // Changer le texte du bouton pour l'option suivante
    } else {
        signup.classList.remove('hidden');
        login.classList.add('hidden');
        button.textContent = "Login"; // Changer le texte du bouton pour l'option suivante
    }
}

button.onclick = change;

function afficherPassword(event) {
    const button = event.currentTarget;
    const container = button.parentElement; // Obtient le conteneur parent

    // Obtient le champ de mot de passe dans le conteneur
    const passwordField = container.querySelector('.input-field');

    if (passwordField) {
        const currentType = passwordField.getAttribute('type');
        const newType = currentType === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', newType);
    } else {
        console.error('Champ de mot de passe non trouvé');
    }
}

// Sélectionne tous les boutons pour basculer le mot de passe
const buttons = document.querySelectorAll('.input-button');
buttons.forEach(button => {
    button.addEventListener('click', afficherPassword);
});
