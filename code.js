let qrCode;
function generateQR() {
    const text = document.getElementById("text").value;
    const contenus = document.getElementById("qr-contenus");
    const downloadButton = document.getElementById("download");

    if(text.trim()=== ""){
        alert("Veuillez entrer un text ou un lien.")
    }

    contenus.innerHTML = "";
    qrCode = new qrCode(contenus, {
        text: text,
        width:200,
        height:200,
    });
}

function downloadQR(){
    const qrimage = document.querySelector("#qr-contenus img");

    if(qrimage){
        return;
    }

    const link = document.createElement("a");
    link.href = qrimage.src;
    link.download = "mon-qr-code.png";
    link.click;
}