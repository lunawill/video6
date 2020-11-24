var video=document.querySelector("#myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Loaded");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	let vol=document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate*=0.9;
	console.log("Video Speed is" +video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate*=1.1;
	console.log("Video Speed is" +video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime+=5;
	console.log("Skiped Ahead");

	if (video.currentTime>30){
		video.currentTime = 0;
		video.play();
	}
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){               // !!! Not sure what is happening it works but if logic is backwards
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
		video.muted = false;}
	else{
		document.getElementById("mute").innerHTML = "Unute";
		console.log("Muted");
		video.muted = true;}
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("Black and White");
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
	console.log("Color");
});


document.querySelector("#volumeSlider").addEventListener("click", ()=> {
	var x = document.querySelector("#volumeSlider").value;
	video.volume = x/100;

	let volumeOutput = document.querySelector("#volume");
	volumeOutput.innerText = (video.volume * 100) + "%";
});
