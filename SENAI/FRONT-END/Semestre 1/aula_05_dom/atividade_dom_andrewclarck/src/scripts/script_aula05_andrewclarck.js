// Identidade
const nome = document.querySelector("#nome-usuario");

nome.textContent = "Andrew Clarck";

// Avatar
const avatar = document.querySelector("#foto-perfil");

avatar.src = "https://avatars.githubusercontent.com/u/205620854?v=4&size=64";

// Personalização
const containerPerfil = document.querySelector("#container-perfil");

containerPerfil.style.backgroundColor = "#f5f5f5";

// Status Real
const statusReal = document.querySelector("#badge-status");

statusReal.classList.add("online");
statusReal.textContent = "Status: Ativo";

// Auditoria
const skills = document.querySelectorAll(".skill");

console.log(`O usuário tem ${skills.length} skills.`);
