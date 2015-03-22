function Tile(tileSize, id, x, y) {
  this.tileSize = tileSize;

  this.id = id;
  this.x = x;
  this.y = y;

  this.left = this.x * this.tileSize;
  this.top = this.y * this.tileSize;
  this.right = this.left + this.tileSize;
  this.bottom = this.top + this.tileSize;

  this.color = function() {
    if(this.id == 10) {
      // 10 - rock
      return '#5e5e5e';
    } else {
      // Anything else is grass
      return '#00FF00';
    }
    
  };

};
