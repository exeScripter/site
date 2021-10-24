/* 
  Cześć, jeśli chcesz by ci skrypt działał
  Musisz wykonać następujące rzeczy:
    1.
     <meta charset="UTF-8">
     <link rel="stylesheet" type="text/css" href="styles.css">
     <script src="script.js"></script>

     Ten kod trzeba wkleic do tagu <head> w html'u.

    2. 

     Kod do css'a będzie załączony w następnym pliku <3
*/

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "Jul 13, 2022 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Są moje urodziny!";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());