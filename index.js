//function as input
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	var charInnerHTML=this.innerHTML;
	createSound(charInnerHTML);
	
});

}

document.addEventListener("keypress", function(event){
	createSound(event.key);
});

function createSound(key){
switch (key){
		case "w":
		     var audio = new Audio("sounds/soundb.mp3");
		     audio.play();
		    break;
		case "e":
		     var audio = new Audio("sounds/soundc.mp3");
		     audio.play();
		    break;
		case "r":
		     var audio = new Audio("sounds/soundd.mp3");
		     audio.play();
		    break;
		case "t":
		     var audio = new Audio("sounds/sounde.mp3");
		     audio.play();
		    break;
		case "y":
		     var audio = new Audio("sounds/soundg.mp3");
		     audio.play();
		    break;
		
		default:
		     var audio = new Audio("sounds/sounde.mp3");
		     audio.play();
		   
	}
}