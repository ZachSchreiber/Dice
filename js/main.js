var diceGame = {

        button: null,
        dice1: 1,
        dice2: 2,
        playCaller: null, //win/lose
        tries: null,
        startTime: null,


    rollDice: function() {
        var diceAmount1 = Math.floor(Math.random() * 6) + 1;
        var diceAmount2 = Math.floor(Math.random() * 6) + 1;


                  this.dice1  = diceAmount1;
                  this.dice2 = diceAmount2;

        this.editHtml("dice1", "diceAmount1");
        this.editHtml("dice2", "diceAmount2");

    },

  /**  gameRules: function(dice1, dice2) {
      if (dice1 + dice2 === 7 || 11) {
      this.values.winner = "Win!";
    }
    else {
      this.values.winner = "Roll Again";
    }
    this.updateHTML("winner", "playcaller");

  },**/

    getTime: function() {
        var currentTime = new Date();

        var currentMonth = currentTime.getMonth() + 1;
        var currentDate = currentTime.getDate();
        var currentHour = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();
        var currentTimeString = currentMonth + "/" + currentDate + " " + currentHour + ":" + currentMinutes + ":" + currentSeconds;

        this.startTime= currentTimeString;

        this.editHtml("current", "startTime");

    },

       editHtml: function(targetElement, newValue) {
     document.getElementById[targetElement].innerHtml = [newValue];
      },

    init: function() {
     this.button = document.getElementById("button");
     this.dice1 = document.getElementById("dice1");

    // this.editHtml("dice1", "dice1");
     //this.editHtml("dice2", "dice2");

     this.button.addEventListener("click", this.rollDice.bind(this));


    }
};
diceGame.init();
