// Enemies variable
var Enemy = function(x, y, speed) {

  // The image/sprite for our enemies
  this.sprite = 'images/enemy-bug.png';

  // Defining their x and y axis and speed
  this.x = x;
  this.y = y;
  this.speed = speed;
};

// Update the enemy's position, required method for game. Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

// Speed is the same on all computers
  this.x += this.speed * dt;

  // Defining speed of the enemies
  if (this.x > 510) {
    this.x = -50;
    this.speed = 100 + Math.floor(Math.random()*100);
  };

  // Defining position for player, when collision with enemies happens
  if (player.x < this.x + 80 &&
    player.x + 80 > this.x &&
    player.y < this.y +60 &&
    60 + player.y > this.y) {
      player.x = 202;
      player.y = 405;
    }
  }

  // Draw the enemy on the screen
  Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  // Defining variable for Player
  var Player = function(x,y) {

    // Set up an image for Player
    this.sprite = 'images/char-boy.png';

    // Defining its x and y axis
    this.x = x;
    this.y = y;
  };

  Player.prototype.update = function(dt) {
  };

  // Rendering an image for Player
  Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  // Declaring how to move Player
  Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left' && this.x >0) {
      this.x -=102;
    };
    if (keyPress == 'right' && this.x <405) {
      this.x +=102;
    };
    if (keyPress == 'up' && this.y >0) {
      this.y -=83;
    };
    if (keyPress == 'down' && this.y <405) {
      this.y +=83;
    };

//Returning Player to start position if he meet water
    if (this.y < 0) {
      alert ('Congradulations! YOU DID IT !!! <3')
      setTimeout (() => {
        this.x = 202;
        this.y = 405;
      }, 100);
    }
  }

  // Placing all enemy objects in an array called allEnemies
  var allEnemies = [];

  // Each enemy has itsown position on the y axis
  var enemyLocation = [65, 145, 230];

  //Generate new enemies
  enemyLocation.forEach (function (locationY) {
    enemy = new Enemy (0, locationY, 200);
    allEnemies.push(enemy);
  });

  // Placing the player object in a variable called player and defining its position
  var player = new Player(202, 405);

  // This listens for key presses and sends the keys to your
  // Player.handleInput() method.
  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
