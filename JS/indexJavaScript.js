// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
				
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    	document.getElementById("header").style.fontSize = "3vw";
    } else {
    	document.getElementById("header").style.fontSize = "5vw";
    }
}
	
function openInstagram() {
	window.open("https://www.instagram.com/thesocietyofqueens/", "_blank");
}

function openTwitter() {
	window.open("https://twitter.com/soqinc", "_blank");
}

function openFacebook() {
	window.open("https://www.facebook.com/thesocietyofqueens/", "_blank");
}

function openPaypal() {
	window.open("https://www.google.co.uk", "_blank");
}

// Set countdown date
var countDownDate = new Date("Dec 14, 2019 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get current system time
  var now = new Date().getTime();
    
  // Calculate difference
  var distance = countDownDate - now;
    
  // Calculate component values
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
  // Output to p tag with neat little checks to have correct use of plurals
  
	if (hours == 1) {
		document.getElementById("countdownLabel").innerHTML = "December 14th, 18:00 - " + days + " days,  " + hours + " hour to go!";
	}
	else if (days == 1) {
		document.getElementById("countdownLabel").innerHTML = "December 14th, 18:00 - " + days + " day,  " + hours + " hours to go!";
	}
	else if (hours == 1 && hours == 1) {
		document.getElementById("countdownLabel").innerHTML = "December 14th, 18:00 - " + days + " day,  " + hours + " hour to go!";
	} else {
		document.getElementById("countdownLabel").innerHTML = "December 14th, 18:00 - " + days + " days,  " + hours + " hours to go!";
	}
  
      
  // Catch text for if timer has passed the date 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownLabel").innerHTML = "This event already happened!";
  }
}, 1000);