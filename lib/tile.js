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
    switch(this.id) {
      case 0:
        return '#00FF00'
        break;
    }
  };

};
