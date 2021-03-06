function Game(canvasSelector, screenWidth, screenHeight) {
  // Constants
  this.mapSize = 100;
  this.tileSize = 32;

  // Screen
  this.screenWidth = screenWidth;
  this.screenHeight = screenHeight;
  this.totalTilesX = Math.ceil(this.screenWidth / this.tileSize) + 1;
  this.totalTilesY = Math.ceil(this.screenHeight / this.tileSize) + 1;

  // Camera
  this.camera = new Camera(this.tileSize, 0, 0, this.screenWidth, this.screenHeight, this.mapSize);

  // Map
  this.map = null;

  // Canvas
  this.$canvas = $(canvasSelector)[0];
  this.$canvas.width = screenWidth;
  this.$canvas.height = screenHeight;
  this.canvasContext = this.$canvas.getContext("2d");


  // initializes map array
  this.initMap = function() {
    var map = new Array(this.mapSize),
    randTileId;

    for(i = 0; i < this.mapSize; i++) {
      map[i] = new Array(this.mapSize);

      for(j = 0; j < this.mapSize; j++) {
        randTileId = Math.floor((Math.random() * 10) + 1);
        map[i][j] = new Tile(this.tileSize, randTileId, j, i);
      }
    }

    return map;
  };

  // draws the map on screen
  this.drawMap = function() {
    var tile, startX, endX, startY, endY;

    startX = Math.floor(this.camera.scrollX / this.tileSize);
    startY = Math.floor(this.camera.scrollY / this.tileSize);
    endX = startX + this.totalTilesX;
    endY = startY + this.totalTilesY;

    for(y = startY; y < endY; y++) {
      for(x = startX; x < endX; x++) {
        // draw the tile from the map array on the canvas
        tile = this.map[y][x];

        if(this.camera.tileVisible(tile)) {
          // only draw the tile if it's visible
          this.canvasContext.fillStyle = tile.color();
          this.canvasContext.fillRect(this.camera.tileLeft(tile), this.camera.tileTop(tile), this.tileSize, this.tileSize);
        }
      }
    }
  };

  // Sets up key events
  this.hookEvents = function() {
    $("body").keydown(function(ev) {
      this.handleKeyEvent(ev);
    }.bind(this));
  };

  // Handles key events
  this.handleKeyEvent = function(ev) {
    var moved = false;

    // 37 - left
    // 38 - up
    // 39 - right
    // 40 - down
    switch(ev.keyCode) {
      case 37:
        moved = this.camera.moveLeft();
        break;
      case 38:
        moved = this.camera.moveUp();
        break;
      case 39:
        moved = this.camera.moveRight();
        break;
      case 40:
        moved = this.camera.moveDown();
        break;
    }

    if(moved) {
      this.drawMap();
    }
  };

  // loads all necessary init data
  this.start = function() {
    console.log('Hooking key events');
    this.hookEvents();
    console.log('Hooked key events!');

    console.log('Loading map...');
    this.map = this.initMap();
    console.log('Map loaded!')

    console.log('Drawing map...');
    this.drawMap();
    console.log('Map drawn!')
  };

};
