let msg = document.getElementById("talk");
let mic = document.getElementById("mic");

const firebaseConfig = {
    apiKey: "AIzaSyCEAh8NxC793m1yyo88KpvxtO5CCaoSaRA",
    authDomain: "directory-74c53.firebaseapp.com",
    projectId: "directory-74c53",
    storageBucket: "directory-74c53.appspot.com",
    messagingSenderId: "213214606363",
    appId: "1:213214606363:web:e049496d965b472303f4be",
    measurementId: "G-WZQEWYNZWB"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
//   var storage = firebase.storage();
//   var storageRef = storage.ref();
  main();

  function main(){
    const fetchChat = db.ref("info/");
    fetchChat.on("child_added", function (snapshot) {
      const messages = snapshot.val();
        const msg = "<div onclick=\"load("+messages.cn+")\" class=\"cn"+messages.house+"\"> <img id=\""+messages.cn+"\" height=\"50\" width=\"50\"/> <font> "+ messages.name +"'"+messages.cn+" <font/></div>";
        
        
    });

  }




const input = document.getElementById("input");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let voices = [];
    window.speechSynthesis.onvoiceschanged = function() {
      voices = window.speechSynthesis.getVoices();
      console.log(voices);
    };
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


let last;

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function recognize(){
    const recognition = new SpeechRecognition();
    recognition.start();



    recognition.onresult=function(e){
        let resultIndex = e.resultIndex;
        let transcript = e.results[resultIndex][0].transcript;
        chatareamain.appendChild(showusermsg(transcript));
        check(transcript.toLowerCase());
        const chat = document.getElementById("chat");
        chat.scrollTo(0, chat.scrollHeight);
        
        
    }
    recognition.onend=function(){
        mic.style.color="#ff3b3b";
        
    }

}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatpac"><figure class="avatar"><img src="./images/gif.gif" /></figure><div class="chatarea-inner chatbot">${chatbotmsg}</div></div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function chatbotvoice(message){
    last = ["Sorry, Can you say that again?", "I didn\'t get that."];
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
    var intro = "";
    //var intro = "Thank you, Nahid for inviting me here. Most Respected Principal Sir, Vice Principal Sir, Officers, Learned Teachers and Shahi Cadets ,";

    if (time<12){
        greetings = intro + "Good Morning to you all.";
    }
    else if (12<time && time<18){
        greetings = intro +"Good Afternoon.";
    }
    else{
        greetings = intro+"Good Evening.";
    }



    showchatbotmsg(greetings);
    sayText(greetings);


}



function sayText(text){
    const speech = new SpeechSynthesisUtterance();
    if(voices.length < 50 ){
        speech.voice = voices[2];

    }
    else{
        speech.voice = voices[33];

    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
    


}


let audio = new Audio();
function playMusic(message){
    var url = ["https://files.piratenahid.workers.dev/0:/Music/Bgm.mp3", "https://files.piratenahid.workers.dev/0:/Music/Bgm2.mp3", "https://files.piratenahid.workers.dev/0:/Music/twinkle.mp3"];
    let finalurl = url[Math.floor(Math.random() * url.length)];
    console.log(finalurl);
    if(message.includes("play")){
        audio.src = finalurl;
        if(!audio.paused){
            audio.pause();
            
            
        }
        else{
            audio.play();
            chatareamain.appendChild(showchatbotmsg("Playing Music."));   
        }
    }
    
    else if(message.includes("stop")|| message.includes("pause")){
        audio.pause();
        chatareamain.appendChild(showchatbotmsg("Music Paused."));
        audio.src ="";
    }
    
}

function check(message){
    if(message.includes("documentary")){
        window.open("https://youtu.be/QGdxJqZAD8w", "_blank");
        chatareamain.appendChild(showchatbotmsg("Showing Documentary of Rajshahi Cadet College."));
        sayText("Showing Documentary of Rajshahi Cadet College.");
    }
    else if(message.includes("hello")){
        greet();
    }
    else if(message.includes("music")){
        playMusic(message);
    }
    else if(message.includes("location")){
        window.open("https://goo.gl/maps/fYEwR3PuAbzhooe16", "_blank");

    }
    else if(message.includes("call")){
        callM(message);
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
    else if(message.includes("tell me about")|| message.includes("tell about") || message.includes("number is")){
        var str = message;
			var matches = str.match(/(\d+)/);
			if (matches) {
					var cn	= matches[0];
                    var final = cn.replace(/ /g, '');
                    const fetchChat = db.ref("info/" +final);
                    fetchChat.once("value").then( function (snapshot) {
                        if(snapshot.val() != null){
                            var misc = snapshot.child("misc").val();
                            const name = "Cadet no. "+ final + " is Cadet " + snapshot.child("name").val() + ". He is a cadet of " + snapshot.child("house").val() +" House of " + snapshot.child("batch").val() + " Batch. He is from "+snapshot.child("district").val()+"." + misc;
                            chatareamain.appendChild(showchatbotmsg(name));
                            sayText(name);
                        }
                        else{
                            const name = "I don\'t know about him. You can tell him to add his information here.";
                            window.open("https://piratenahid46.github.io/Directory/Add/index.html", "_blank");
                            chatareamain.appendChild(showchatbotmsg(name));
                            sayText(name);
                        }
                    

                    });
                

			}

    }
    else if(message.includes("directory")){
        window.open("https://piratenahid46.github.io/Directory/main/profiles.html", "_blank");
        chatareamain.appendChild(showchatbotmsg("Showing Directory of Rajshahi Cadet College."));
        sayText("Showing Directory of Rajshahi Cadet College.");
    }

    else{
        chatbotvoice(message);
        console.log(message);

    }
}



mic.addEventListener("click", function(){
    mic.style.color='#39c81f';
    console.log("Activated");
    recognize();
});

function callM(numb){
    var whom = numb.replace("call", "");
    var resultN = whom.replace(/ /g, '');
    if(resultN.includes("dm") || resultN.includes("duty master")){
        window.location.href = "tel:+8801748427404";
        sayText("Calling Duty Master");
        chatareamain.appendChild(showchatbotmsg("Calling Duty Master"));

    }
    else if(resultN.includes("principal")){
        window.location.href = "tel:+8801769011230";
        sayText("Calling Principal");
        chatareamain.appendChild(showchatbotmsg("Calling Principal"));

    }
	else{
		callTeacher(resultN);
	}
}
var techIDs = [];
var numbers = [];
var techNames = [];
	const fetchChat = db.ref("mentors/");
    fetchChat.on("child_added", function (snapshot) {
      const messages = snapshot.val();
	  techIDs.push(messages.id);
	  numbers.push(messages.mobile);
	  techNames.push(messages.name);
	  
	});

function callTeacher(teacher){
	
	for(var i = 0 ; i< techIDs.length; i++){
			var Ask = techIDs[i].toLowerCase();
			if (teacher.includes(Ask)){
				console.log(Ask);
				console.log(numbers[i]);
				
				showchatbotmsg("Calling " + techNames[i]);
				sayText("Calling " + techNames[i]);
				window.location.href = "tel:" + numbers[i];
			}
	}
	  
        
}


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
    return "I am "+ Year +" Years, "+ Age.getMonth() +" Months, " + Age.getDate()+ " Days, " + Age.getHours() +" Hours, " + Age.getMinutes()+ " Minutes, " + Age.getSeconds() + " Seconds old.";
}