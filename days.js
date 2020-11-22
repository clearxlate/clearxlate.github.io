dt1 = new Date("08/02/2020");
dt2 = new Date();
Result = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
document.getElementById("iddays").innerHTML = "<h1>" + Result + "</h1>";
