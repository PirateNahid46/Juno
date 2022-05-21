let msg = document.getElementById("talk");
let mic = document.getElementById("mic");




const input = document.getElementById("input");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let voices = [];
    window.speechSynthesis.onvoiceschanged = function() {
      voices = window.speechSynthesis.getVoices();
      console.log(voices);
    };
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

let last;

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatpac"><figure class="avatar"><img src="./images/gif.gif" /></figure><div class="chatarea-inner chatbot">${chatbotmsg}</div></div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function chatbotvoice(message){
    last = ["Sorry, Can you say that again?"];
    for(var x = 0; x < Question.length; x++){
        var Ques = new Array;
        Ques = Question[x];
        var Ans = new Array;
        Ans = Answer[x];
    
        for(var i = 0 ; i< Ques.length; i++){
            var Ask = Ques[i].toLowerCase();

            if (message.includes(Ask)){
                last = Ans;
                console.log(Ans);
            }
        }
        
    }

    let finalresult = last[Math.floor(Math.random() * last.length)];
    sayText(finalresult);
    chatareamain.appendChild(showchatbotmsg(finalresult));
    
    
}

msg.addEventListener("submit", function(e){
    e.preventDefault();
    const input2 = input.value;
    showusermsg(input2);
    check(input2.toLowerCase());
    const chat = document.getElementById("chat");
    chat.scrollTo(0, chat.scrollHeight);
    input.value = "";
    
})

function greet(){
    var time = new Date().getHours();
    var greetings;

    if (time<12){
        greetings = "Good Morning.";
    }
    if (12<time && time<18){
        greetings = "Good Afternoon.";
    }
    else{
        greetings = "Good Evening.";
    }



    showchatbotmsg(greetings);
    sayText(greetings);


}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    check(transcript.toLowerCase());
    const chat = document.getElementById("chat");
    chat.scrollTo(0, chat.scrollHeight);
    
    
}

function sayText(text){
    const speech = new SpeechSynthesisUtterance();
    if(voices.length < 50 ){
        speech.voice = voices[2];

    }
    else{
        speech.voice = voices[2];

    }
    speech.text = text;
    
    if(voices.length == 0){
        responsiveVoice.speak(text, "US English Female");
    }else{
        window.speechSynthesis.speak(speech);

    }


}

function check(message){
    if(message.includes("documentary")){
        window.open("https://youtu.be/QGdxJqZAD8w", "_blank");
        chatareamain.appendChild(showchatbotmsg("Showing Documentary of Rajshahi Cadet College."));
        sayText("Showing Documentary of Rajshahi Cadet College.");
    }

    else if(message.includes("your age") || message.includes("how old are you")){
        var age = getAge();
        sayText(age);
        chatareamain.appendChild(showchatbotmsg(age));

    }
    else if(message.includes("what time")){
        var time = giveTime();
        sayText(time);
        chatareamain.appendChild(showchatbotmsg(time));
    }
    else if(message.includes("directory")){
        window.open("https://youtu.be/QGdxJqZAD8w", "_blank");
        chatareamain.appendChild(showchatbotmsg("Showing Directory of Rajshahi Cadet College."));
        sayText("Showing Directory of Rajshahi Cadet College.");
    }

    else{
        chatbotvoice(message);
        console.log(message);

    }
}


recognition.onend=function(){
    mic.style.color="#ff3b3b";
    
}
mic.addEventListener("click", function(){
    mic.style.color='#39c81f';
    recognition.start();
    console.log("Activated");
})
greet();

function giveTime(){
    var time = new Date();
    return "It is "+ time.getHours()+":"+time.getMinutes();
}

function getAge(){
    var time = new Date();
    var BirthDay = new Date(2022, 4, 15, 12, 34, 55, 20);
    var diff = time.getTime() - BirthDay.getTime();
    var Age = new Date(diff);
    var Year = Age.getFullYear() - 1970;
    return "I am "+ Year +" Years "+ Age.getMonth() +" Months " + Age.getDate()+ " Days " + Age.getHours() +" Hours " + Age.getMinutes()+ " Minutes " + Age.getSeconds() + " Seconds old.";
}
