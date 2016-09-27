var diceGame = {
    regions: {
        winner: "",
        dice1: null,
        dice2: null,
        button: null,
        current: "",
    },

    values: {
        playCaller: null,
        timekeeper: null,
        diceValue1: 1,
        diceValue2: 2,
        gameTime: null
    },

    rollDice: function() {
        var diceAmount1 = Math.floor(Math.random() * 6) + 1;
        var diceAmount2 = Math.floor(Math.random() * 6) + 1;


        this.values.diceValue1 = diceAmount1;
        this.values.diceValue2 = diceAmount2;

        this.updateHTML("dice1", "diceValue1");
        this.updateHTML("dice2", "diceValue2");


        this.gameRules();
    },

    gameRules: function() {
      if (this.values.diceValue1 + this.values.diceValue2 == 7 || 11) {
        this.values.playCaller = "You're an Amazing Human Being!";
      }

      else {
        this.values.playCaller = "Roll Again";
      }

      this.updateHTML("winner", "playCaller");



    },

    getTime: function() {
        var currentTime = new Date();

        var currentMonth = currentTime.getMonth() + 1;
        var currentDate = currentTime.getDate();
        var currentHour = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();
        var currentTimeString = currentMonth + "/" + currentDate + " " + currentHour + ":" + currentMinutes + ":" + currentSeconds;

        this.values.gameTime = currentTimeString;

        this.updateHTML("current", "gameTime");

    },

    defineRegions: function() {
        this.regions.dice1 = document.getElementById("dice1");
        this.regions.dice2 = document.getElementById("dice2");
        this.regions.button = document.getElementById("button");
    },

    defineValues: function() {
      this.values.gameTime = document.getElementById("current");
      this.values.timeKeeper =  document.getElementById("timeElapsed");
      this.values.playCaller =  document.getElementById("win");
    },

    updateHTML: function(targetElement, newValue) {
        var assignedValue = newValue || targetElement;
        this.regions[targetElement].innerHTML = this.values[assignedValue];
    },

    init: function() {
        this.defineRegions();
        this.defineValues();


        this.updateHTML("dice1", "diceValue1");
        this.updateHTML("dice2", "diceValue2");

        this.regions.button.addEventListener("click", this.rollDice.bind(this));


    }
}
diceGame.getTime();
diceGame.init();
