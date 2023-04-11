const hrValue = document.querySelector('#hours');
const minValue = document.querySelector('#minutes');
const secValue = document.querySelector('#seconds');
const countdown = new Date(2023, 1, 1, 0, 0, 0).getTime();



// function currentTime() {
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     hour = updateTime(hour);
//     min = updateTime(min);
//     sec = updateTime(sec);
//     document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */
//       var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
//   }
  
//   function updateTime(k) {
//     if (k < 10) {
//       return "0" + k;
//     }
//     else {
//       return k;
//     }
//   }

// currentTime();
  