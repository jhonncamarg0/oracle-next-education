var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle="green";
pincel.fillRect(0, 0, 400, 300);

pincel.fillStyle="yellow";
pincel.beginPath();
pincel.moveTo(200, 50);
pincel.lineTo(50, 150);
pincel.lineTo(350, 150);
pincel.fill();

pincel.fillStyle="yellow";
pincel.beginPath();
pincel.moveTo(200, 250);
pincel.lineTo(50, 150);
pincel.lineTo(350, 150);
pincel.fill();

pincel.fillStyle="darkblue";
pincel.beginPath();
pincel.arc(200, 150, 50, 0, 2 * 3.14);
pincel.fill();