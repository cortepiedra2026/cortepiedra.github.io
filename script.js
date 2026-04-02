window.onload = function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none"

},2000)

}


/* REVIEW */

function openReview(){

document.getElementById("reviewBox").style.display="block"

}

function closeReview(){

document.getElementById("reviewBox").style.display="none"

}


/* EMAILJS */

(function(){
emailjs.init("TU_PUBLIC_KEY");
})();


document.getElementById("reviewForm").addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm('TU_SERVICE_ID','TU_TEMPLATE_ID',this)

.then(function(){

alert("Gracias por tu reseña!")

})

})
