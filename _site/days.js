funtion makeDays() {
	dt1 = new Date("08/02/2020");
	dt2 = new Date();
	this = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
	document.write(this);
	
//document.getElementById("demo").innerHTML = toCelsius(77);

document.write("<h1>asdf</h1>");