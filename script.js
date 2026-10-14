// Atualiza automaticamente o ano no rodapé do portfólio.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
