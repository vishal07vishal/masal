function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("am");
    var time = new Date();
    var clock1 = time.getHours();
    var clock2 = time.getMinutes();
    var clock3 = time.getSeconds();
    hours.innerHTML = clock1;
    minutes.innerHTML = clock2;
    seconds.innerHTML = clock3;
  }
  setInterval(clock, 1000);
  function settime() {
    let text = document.getElementsByClassName("alarm")[0];
    text.innerHTML = "Alarm set";
  
    var setvalue = document.getElementById("setvalue").value;
    console.log(setvalue);
    var hours = new Date().getHours();
    var setvalue1 = document.getElementById("setvalue1").value;
    var setvalue2 = document.getElementById("setvalue2").value;
    var setvalue3 = document.getElementById("setvalue3").value;
    if (setvalue == hours) {
      document.getElementsByClassName("last1")[0].style.backgroundImage =
         "url(./Cage.png)";
      document.getElementById("heading").innerHTML =
        "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("text").innerText = "GOOD MORNING!!";
    console.log("hello");
    }
    if (setvalue1 == hours) {
      document.getElementsByClassName("last1")[0].style.backgroundImage =
         "url(./lunchTime.png)";
      document.getElementById("heading").innerHTML =
        "LETS HAVE SOME LUNCH !!";
      document.getElementById("text").innerText = "GOOD AFTERNOON!!";
    }
    if (setvalue2 == hours) {
      document.getElementsByClassName("last1")[0].style.backgroundImage =
        "url(./EveningTime.png)";
      document.getElementById("heading").innerHTML =
        "STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
      document.getElementById("text").innerText = "GOOD EVENING!!";
    }
    if (setvalue3 == hours) {
      document.getElementsByClassName("last1")[0].style.backgroundImage =
         "url(./goodNight.png)";
      document.getElementById("heading").innerHTML =
        "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("text").innerText = "GOOD NIGHT!!";
    }
  
    var container = document.createElement("p");
    document.getElementsByClassName("time")[0].appendChild(container);
    var timing = document.getElementsByClassName("p");
    var invalue1 = document.getElementById("setvalue");
    var invalue2 = document.getElementById("setvalue1");
    var invalue3 = document.getElementById("setvalue2");
    var invalue4 = document.getElementById("setvalue3");
  
    timing[0].innerText ="set value:" + " " + invalue1.options[invalue1.selectedIndex].text;
    timing[1].innerText ="set value1:" + " " + invalue2.options[invalue2.selectedIndex].text;
    timing[2].innerText ="set value2:" + " " + invalue3.options[invalue3.selectedIndex].text;
    timing[3].innerText ="set value3:" + " " + invalue4.options[invalue4.selectedIndex].text;
  }
  