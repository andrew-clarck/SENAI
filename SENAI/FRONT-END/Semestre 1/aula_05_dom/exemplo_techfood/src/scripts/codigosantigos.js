// SELETORES ANTIGOS - NÃO UTILIZADOS MAIS
// Buscando o cabeçalho pelo ID único
const topo = document.getElementById("cabecalho");

// Buscando todos os cards de uma vez pela classe --> elementos das classes são tratadas como listas
const listaCards = document.getElementsByClassName("card");

// Buscando todos os links do menu
const links = document.getElementsByTagName("a"); // Também tratado como listas

console.log("1. O elemento topo:", topo);
console.log("2. O primeiro card da lista:", listaCards[0]);
console.log("3. A lista completa de links:", links);
console.log("4. O endereço (URL) do primeiro link:", links[0].href);
console.log("5. A cor do cabeçalho: ", topo.style.backgroundColor); // Não mostra o estilo, pois não está definido no HTML, mas no CSS
