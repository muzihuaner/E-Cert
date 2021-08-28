// JavaScript Document
var can = document.getElementById("myCanVas");
var myCan = can.getContext("2d");
var img = new Image();
img.src = "bg.jpg";
img.onload = function () {
	myCan.drawImage(img, 0, 0, 600, 843);
}
var zsname = document.getElementById("name");
var txt = document.getElementById("text");
var pr = document.getElementById("prize");
var da = document.getElementById("day");
var but = document.getElementById("submit");
but.onclick = function () {
	myCan.beginPath();
	myCan.font = "22px Arial";
	myCan.fillText(txt.value, 140, 372);
	drawText(pr.value, 128, 410, 358);
	myCan.fillText(da.value, 350, 660);
	myCan.closePath();
	myCan.font = "bold 60px serif";
	myCan.fillText(zsname.value, 180, 210);
}

function drawText(t, x, y, w) {

	var chr = t.split("");
	var temp = "";
	var row = [];
	var count = 0;

	myCan.font = "21px 宋体";
	for (var a = 0; a < chr.length; a++) {
		if (count == 0) {
			if (myCan.measureText(temp).width < w - 40) {
				;
			} else {
				count += 1;
				row.push(temp);
				temp = "";
			}
			temp += chr[a];
		} else {
			if (myCan.measureText(temp).width < w) {
				;
			} else {
				count += 1;
				row.push(temp);
				temp = "";
			}
			temp += chr[a];
		}
	}

	row.push(temp);

	for (var b = 0; b < row.length; b++) {

		myCan.fillText(row[b], b == 0 ? x + 40 : x, y + (b + 1) * 30);
	}
}
setTimeout(function () {
	var imgt = new Image();
	imgt.src = "seal.svg";

	imgt.onload = function () {
		myCan.drawImage(imgt, 400, 600, 100, 100);
	}

}, 100 /*设置100的延迟*/);


function exportCanvasAsPNG(id, fileName) {

	var canvasElement = document.getElementById(id);

	var MIME_TYPE = "image/png";

	var imgURL = canvasElement.toDataURL(MIME_TYPE);

	var dlLink = document.createElement('a');
	dlLink.download = fileName;
	dlLink.href = imgURL;
	dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

	document.body.appendChild(dlLink);
	dlLink.click();
	document.body.removeChild(dlLink);
}