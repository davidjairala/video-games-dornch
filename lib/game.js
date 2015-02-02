function Game(canvasSelector, screenWidth, screenHeight) {
  // Constants
  this.mapSize = 100;
  this.tileSize = 32;

  // Camera
  this.camera = new Camera(this.tileSize, 0, 0, screenWidth, screenHeight);

  // Map
  this.map = null;

  // Canvas
  this.$canvas = $(canvasSelector)[0];
  this.canvasContext = this.$canvas.getContext("2d");


  // initializes map array
  this.initMap = function() {
    var map = new Array(this.mapSize);

    for(i = 0; i < map.length; i++) {
      map[i] = new Array(this.mapSize);
    }

    for(i = 0; i < map.length; i++) {
      for(j = 0; j < map.length; j++) {
        // initialize tiles, all 0s for now
        // TODO: randomize this
        map[i][j] = new Tile(this.tileSize, 0, j, i);
      }
    }

    return map;
  };

  // draws the map on screen
  this.drawMap = function() {
    var tile;

    for(i = 0; i < this.map.length; i++) {
      for(j = 0; j < this.map.length; j++) {
        // draw the tile from the map array on the canvas
        tile = this.map[i][j];

        if(this.camera.tileVisible(tile)) {
          // only draw the tile if it's visible
          this.canvasContext.fillStyle = tile.color();
          this.canvasContext.fillRect(tile.left, tile.top, this.tileSize, this.tileSize);
        }
      }
    }
  };

  // loads all necessary init data
  this.start = function() {
    console.log('Loading map...');
    this.map = this.initMap();
    console.log('Map loaded!')

    console.log('Drawing map...');
    this.drawMap();
    console.log('Map drawn!')
  };

};
