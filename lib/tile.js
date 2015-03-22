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
    // 10 - rock
    // 3 - water
    // everything else - grass

    switch(this.id) {
      case 10:
        return '#5e5e5e';
        break;
      case 3:
        return '#0000ff';
        break;
      default:
        return '#00FF00';
    }
    
  };

};
