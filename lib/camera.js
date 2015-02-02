function Camera(tileSize, initialScrollX, initialScrollY, screenWidth, screenHeight) {
  this.tileSize = tileSize;
  this.scrollX = initialScrollX;
  this.scrollY = initialScrollY;
  this.screenWidth = screenWidth;
  this.screenHeight = screenHeight;

  this.tileVisible = function(tile) {
    return (tile.top >= this.scrollY &&
      tile.left >= this.scrollX &&
      tile.bottom <= this.scrollY + this.screenHeight &&
      tile.right <= this.scrollX + this.screenWidth);
  }
};
