const Discord = require("discord.js");
const client = new Discord.Client();

var bodyPart = ["Cock and Balls", "Ass", "Big ol Kankles", "Roblox Head", "Pee Pee"];
var adjective = ["hairy and", "extremely", "insultingly", "astonishingly"];
var adjectiveTwo = ["stupid", "gigantic", "fat", "horrid", "scary"];
var animal = ["BUPPY", "Ms. Klaus", "Adam Fucking Sandler", "MUNKE", "Gay Monke :)"];
var userList = ["176134669429899265", "133047640551194624", "248192103186825216", "204790549604073472", "263153569333641216", "278670710900260867", "204312204596609024", "179433472140509184", "146975624311865344"];

client.on("ready", function () {
    console.log("ready");
    client.guilds.resolve(`685626010665877629`).channels.resolve('764270467296395284').send("For info on how to use, type 'Info!'");
});


client.on("message", function (message) {
    if (message.author !== client.user && message.channel.id === "764270467296395284") {
        if (message.content === "!RI") {
            //SORT BY HIGH TO LOW ROLLS
            message.channel.send("Bjorn the Mighty rolled a " + Initiative() + "!");
            message.channel.send("Bobillion rolled a " + (Initiative()+2) + "!");
            message.channel.send("Lachon rolled a " + (Initiative()+1) + "!");
            message.channel.send("Geena rolled a " + (Initiative()+1) + "!");
            message.channel.send("Hector the Well Endowed rolled a " + (Initiative()+1) + "!");
        }
        else if (message.content === "!Info") {
            message.channel.send("Use XDX for number rolls, where both X are numbers! First X is number of rolls, second X is the size of die.");
            message.channel.send("You can also roll initiative with the command: '!RI'");
        }
        else if (message.content === "insult me") {
            message.channel.send("Fuck you you fucking bastard.");
        }     
        else if (message.content === "IS!")
        {
                var bp, a, a2, an;
                var bp = bodyPart[Math.floor(Math.random() * 5)];
                var a = adjective[Math.floor(Math.random() * 4)];
                var a2 = adjectiveTwo[Math.floor(Math.random() * 5)];
            var an = animal[Math.floor(Math.random() * 5)];
            var userId = userList[Math.floor(Math.random() * 8)];
            var insult =  "Your" + " " + bp + " " + "is more" + " " + a + " " + a2 + " " + "than a" + " " + an + "'s" + " " + bp + ".";
            message.channel.send(insult);
            }

        
        else if (message.content === "Dis!" || message.content === "Adv!") {
            message.channel.send("Your first roll is: " + Initiative());                   
            message.channel.send("Your second roll is: " + Initiative());                   
        }
        else if (message.content === "Info!") {
            message.channel.send("For basic rolls, type 'nDn', where the n's are numbers.");
            message.channel.send("You can append a + or - to add or subtract values to basic rolls.");
            message.channel.send("For rolling initiative, type '!RI'.");
            message.channel.send("For rolling with advantage or disadvantage, type 'Dis!' or 'Adv!' respectively.");
            message.channel.send("Lastly, if you want to be insulted, type 'insult me' or IS!");
        }
        else{
            let command = message.content.trim();
            var totalRoll = Roller(command);
            let sum;
            if (totalRoll != -1) {
                sum = totalRoll.reduce((a, b) => {
                    return a + b
                });
            }

            message.channel.send("Ok!");
            if (totalRoll === -1) {
                //message.channel.send("Input a correct value dumbass. Not Pog :rofl:");
            }
            else {
                message.channel.send("You rolled " + message.content + " totalling: " + sum);
            }
        }
    };
})

function PlusFinder(x) {
    if (x.includes("+")) {
        return true;
    }
    else {
        return false;
    }
}

function MinusFinder(x) {
    if (x.includes("-")) {
        return true;
    }
    else {
        return false;
    }
}

function Splitter(x) {
    let y = Math.floor(Math.random() * x + 1);

    //rollLog.push(y);
    return (y);
}


function Roller(x) {
    if (x.includes("D")) {
        var numbers = x.split("D");        
        var plusFinder = PlusFinder(numbers[1]);
        

        if (numbers[1] == undefined) {
            return -1;
        }
        else if (plusFinder == true) {
            var totalRoll = PlusHandler(numbers);
            return totalRoll;
        }
        else if (MinusFinder(numbers[1]) == true) {
            var totalRoll = MinusHandler(numbers);
            return totalRoll;
        }
        else{
            var totalRoll = NormalRoll(numbers);
            return totalRoll;
        }
    }
    else {
        totalRoll = -1;
        return totalRoll;
    }
}


function Initiative() {
    var roll = Splitter(20);
    return roll;
}

function MinusHandler(y) {
    let x = [];
    var addNum = y[1].split("-");

    for (var i = 0; i < y[0]; i++) {
        x.push(Splitter(addNum[0]));
    }
    x.push(Number(-1*(addNum[1])));
    return x;
}

function PlusHandler(y) {
    let x = [];
    var addNum = y[1].split("+");

    for (var i = 0; i < y[0]; i++) {
        x.push(Splitter(addNum[0]));
    }
    x.push(Number(addNum[1]));
    return x;
}

function NormalRoll(x) {
    let y = [];
    for (var i = 0; i < x[0]; i++) {
        y.push(Splitter(x[1]));
    }
    return y;
}

