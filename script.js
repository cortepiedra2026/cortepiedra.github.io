window.onload = () => {
setTimeout(() => {
document.getElementById("loader").style.display = "none";
}, 2000);
};

function mostrarMenu(){
document.getElementById("menu").style.display = "block";
}

function mostrarCalificacion(){
document.getElementById("calificacion").style.display = "block";
}

function cerrar(){
document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
}

document.querySelectorAll(".stars").forEach(container => {
for(let i=1;i<=5;i++){
let star = document.createElement("span");
star.innerHTML = "⭐";
star.onclick = () => {
container.setAttribute("data-value", i);
}
container.appendChild(star);
}
});

function enviar(){
emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
nombre: document.getElementById("nombre").value,
comida: document.querySelector('[data-type="comida"]').dataset.value,
atencion: document.querySelector('[data-type="atencion"]').dataset.value,
ambiente: document.querySelector('[data-type="ambiente"]').dataset.value,
comentario: document.getElementById("comentario").value
}).then(() => {
alert("Calificación enviada 🔥");
});
}
