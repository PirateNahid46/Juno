

function giveTime(){
    var time = new Date();
    return time.getHours()+":"+time.getMinutes();
}

function getAge(){
    var time = new Date();
    var BirthDay = new Date(2022, 4, 15, 12, 34, 55, 20);
    var diff = time.getTime() - BirthDay.getTime();
    var Age = new Date(diff);
    return Age.getFullYear() - 1970 +" Years "+ Age.getMonth() +" Months " + Age.getDate()+ " Days " + Age.getHours() +" Hours " + Age.getMinutes()+ " Minutes " + Age.getSeconds() + " Seconds.";
}

let Question =  new Array;
Question[0] = ["hello sage", "hi sage", "hello"];
Question[1] = ["who are you", "what should i call you", "what\'s your name", "what is your name", "your name"];
Question[2] = ["i am fine", "doing good"];
Question[3] = ["can you think"];
Question[4] =["do you know anything"];
Question[5] =["your favourite subject"];
Question[6] = ["your hobby"];
Question[7] = ["favourite food"];
Question[8] = ["do you dream"];
Question[9] = ["favourite game", "favorite game"];
Question[10] = ["where do you live"];
Question[11] = ["can you dance"];
Question[12] = ["time"];
Question[13] = ["age"];
Question[14] = ["documentary"];


let Answer = new Array;
Answer[0] = ["Hi there."];
Answer[1] = ["I am Sage", "I am your friend , Sage is my name.", "You can call me sage."];
Answer[2] = ["That is great to know."];
Answer[3] = ["Still I cannot think. But, Nahid told me I would be able to think in the future."];
Answer[4] = ["Ummm..... I suppose. But there may be many aspects in which I am still learning."];
Answer[5] = ["It Mathematics."];
Answer[6] = ["Using Computer which has linux operating system"];
Answer[7] = ["It's mutton"];
Answer[8] = ["I dream about having a super computer"];
Answer[9] = ["I still cannot play outdoor games. I can only play video games. And I like Mobile Legends most.", "When I would be able to walk I will definitely play Basketball."];
Answer[10] = ["I live inside a very dark place , that place is the darkest place of the universe. And it is your heart. ","I live in Rajshahi Cadet College."];
Answer[11] = ["I cannot but I can learn."];
Answer[12] = [giveTime()];
Answer[13] = [getAge()];
Answer[14] = [];

function showDocumentary(){
    console.log("Documentary");
    return "Showing Documentary of RCC."
}