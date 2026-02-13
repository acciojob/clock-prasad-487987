//your JS code here. If required.
const timer =document.getElementById("timer");

function getTime(){
	const now = new Date();

	timer.textContent = now.toLocaleString();
}

getTime();

setInterval(getTime , 1000);
