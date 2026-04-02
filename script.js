body{

margin:0;
font-family:Poppins;
background:#0e0e0e;
color:white;

}

header{

text-align:center;
padding:30px;

}

.logo{

width:110px;

}

.categories{

display:flex;
overflow-x:auto;
gap:10px;
padding:15px;
background:#111;

}

.categories button{

background:#c89b3c;
border:none;
padding:10px 15px;
color:white;
border-radius:6px;
cursor:pointer;

}

.menu-section{

padding:30px;
max-width:900px;
margin:auto;

}

.menu-section h2{

border-bottom:2px solid #c89b3c;
padding-bottom:10px;

}

.menu-item{

display:flex;
justify-content:space-between;
padding:15px 0;
border-bottom:1px solid #333;

}

.menu-item h3{

margin:0;
font-size:16px;

}

.note{

color:#bbb;
font-size:14px;
margin-top:15px;

}

footer{

text-align:center;
padding:30px;
background:black;

}

.whatsapp{

position:fixed;
bottom:20px;
right:20px;

}

.whatsapp img{

width:60px;

}

#loader{

position:fixed;
width:100%;
height:100%;
background:black;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

}

.spinner{

width:50px;
height:50px;
border:5px solid #333;
border-top:5px solid #c89b3c;
border-radius:50%;
animation:spin 1s linear infinite;

}

@keyframes spin{

100%{transform:rotate(360deg)}

}
