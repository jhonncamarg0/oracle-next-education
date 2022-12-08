var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = "darkgreen";
pincel.fillRect(0, 0, 350, 300);

pincel.fillStyle = "black";
pincel.fillRect(50, 50, 90, 90);

pincel.fillStyle = "black";
pincel.fillRect(210, 50, 90, 90);

pincel.fillStyle = "black";
pincel.fillRect(140, 140, 70, 100);

pincel.fillStyle = "black";
pincel.fillRect(90, 200, 50, 100);

pincel.fillStyle = "black";
pincel.fillRect(210, 200, 50, 100);