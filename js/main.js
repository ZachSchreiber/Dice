var diceGame = {
     triesCount: 0,
    regions: {
        button: null,
        dice1: 1,
        dice2: 2,
        dealer: null, //win/lose
        tries: 0,
        startTime: null
    },

    values: {
        dealer: null,
        tries: null,
        dice1: 35,
        dice2: 98,
        startTime: null
    },


    rollDice: function() {
        var diceAmount1 = Math.floor(Math.random() * 6) + 1;
        var diceAmount2 = Math.floor(Math.random() * 6) + 1;


        this.values.dice1 = diceAmount1;
        this.values.dice2 = diceAmount2;

        this.updateHtml("dice1", "dice1");
        this.updateHtml("dice2", "dice2");

        console.log("click");
        var countstring = this.triesCount = this.triesCount + 1;
        this.values.tries =  "Number of tries: " + countstring;
        this.updateHtml("tries", "tries");
        this.gameLogic();
    },

    defineRegions: function() {
        this.regions.dealer = document.getElementById("dealer");
        this.regions.dice1 = document.getElementById("dice1");
        this.regions.dice2 = document.getElementById("dice2");
        this.regions.button = document.getElementById("button");
        this.regions.tries = document.getElementById("tries");
        this.regions.startTime = document.getElementById("current");

    },
    getTime: function() {
        var currentTime = new Date();

        var currentMonth = currentTime.getMonth() + 1;
        var currentDate = currentTime.getDate();
        var currentHour = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentYear = currentTime.getFullYear();
        var currentTimeString =  "Game Started: " + currentMonth + "/" + currentDate + "- " +  currentYear + " at "  + currentHour + ":" + currentMinutes;

        this.values.startTime = currentTimeString;

        this.updateHtml("startTime", "startTime");

    },

    gameLogic: function() {
      var total = this.values.dice1 + this.values.dice2;

      if (total === 7 || total === 11) {

           this.values.dealer = "Yer a Wizard, Harry! " + this.values.tries;
           this.updateHtml("dealer", "dealer");
           var backColor = document.querySelector("#game");
           backColor.style.backgroundColor = "#99ffff";
           this.triesCount = 0;

       }

       else {
         this.values.dealer = "Roll again, big fella.";
         this.updateHtml("dealer", "dealer");
         backColor = document.querySelector("#game");
         backColor.style.backgroundColor = "#fff";
      }

    },

    updateHtml: function(targetElement, newValue) {
        var assignedValue = newValue || targetElement;
        this.regions[targetElement].innerHTML = this.values[assignedValue];
    },

    init: function() {
        this.defineRegions();
        this.getTime();

        this.regions.button.addEventListener("click", this.rollDice.bind(this));


    }
};
diceGame.init();
