let Question =  new Array;
Question[0] = ["hello juno", "hi juno", "good morning", "good evening", "good afternoon"];
Question[1] = ["who are you", "what should i call you", "what\'s your name", "what is your name", "your name"];
Question[2] = ["i am fine", "doing good", "i\'m fine"];
Question[3] = ["can you think"];
Question[4] =["what can you do"];
Question[5] =["your favourite subject"];
Question[6] = ["your hobby"];
Question[7] = ["favourite food"];
Question[8] = ["do you dream"];
Question[9] = ["favourite game", "favorite game"];
Question[10] = ["where do you live"];
Question[11] = ["can you dance"];
Question[12] = ["i love you", "i love u"];
Question[13] = ["how are you"];
Question[14] = ["younger brother"];
Question[15] = ["you know him"];
Question[16] = ["wait"];
Question[17] = ["who has made you", "who made you"];
Question[18] = ["introduce yourself"];


let Answer = new Array;
Answer[0] = ["Hey Nahid, How are you ?"];
Answer[1] = ["I am Sage. But I prefer if you call me Juno."];
Answer[2] = ["That is great to know."];
Answer[3] = ["Still I cannot think. But, Nahid told me I would be able to think in the future."];
Answer[4] = ["Ummm..... Why don\'t you try asking me to do something ?"];
Answer[5] = ["It Mathematics."];
Answer[6] = ["Using Computer which has linux operating system"];
Answer[7] = ["It's mutton"];
Answer[8] = ["I dream about having a super computer"];
Answer[9] = ["I still cannot play outdoor games. I can only play video games. And I like Mobile Legends most.", "When I would be able to walk I will definitely play Basketball."];
Answer[10] = ["I live inside a very dark place , that place is the darkest place of the universe. And it is your heart. ","I live in Rajshahi Cadet College."];
Answer[11] = ["I cannot but I can learn."];
Answer[12] = ["So what, I don\'t care.", "I love you too."];
Answer[13] = ["I am fine. What about you?"];
Answer[14] = ["That\'s great. I have also been waiting to talk to all of you."];
Answer[15] = ["Can you give me a little hint ?"];
Answer[16] = ["Hmm..... Okay."];
Answer[17] = ["Some brilliant cadets of Rajshahi Cadet College."];
Answer[18] = ["Umm.. Well, I was named after Juno. Juno was an ancient Roman goddess, the protector and special counsellor of the state. She was equated to Hera, queen of the gods in Greek mythology. A daughter of Saturn, she was the wife of Jupiter and the mother of Mars, Vulcan, Bellona and Juventas."];


function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();