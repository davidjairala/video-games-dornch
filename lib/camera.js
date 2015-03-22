function Camera(tileSize, initialScrollX, initialScrollY, screenWidth, screenHeight, mapSize) {
  this.tileSize = tileSize;
  this.scrollX = initialScrollX;
  this.scrollY = initialScrollY;
  this.screenWidth = screenWidth;
  this.screenHeight = screenHeight;
  this.mapSize = mapSize;

  this.movementSize = 4;

  this.tileVisible = function(tile) {
    return (tile.top >= (this.scrollY - this.tileSize) &&
      tile.left >= (this.scrollX - this.tileSize) &&
      tile.bottom <= this.scrollY + this.screenHeight + this.tileSize &&
      tile.right <= this.scrollX + this.screenWidth + this.tileSize);
  };

  this.tileLeft = function(tile) {
    return (tile.left - this.scrollX);
  };

  this.tileTop = function(tile) {
    return (tile.top - this.scrollY);
  };

  this.moveUp = function() {
    if(this.canMoveUp()) {
      this.scrollY -= this.movementSize;
      return true;
    } else {
      return false;
    }
  };

  this.moveDown = function() {
    if(this.canMoveDown()) {
      this.scrollY += this.movementSize;
      return true;
    } else {
      return false;
    }
  };

  this.moveLeft = function() {
    if(this.canMoveLeft()) {
      this.scrollX -= this.movementSize;
      return true;
    } else {
      return false;
    }
  };

  this.moveRight = function() {
    if(this.canMoveRight()) {
      this.scrollX += this.movementSize;
      return true;
    } else {
      return false;
    }
  };

  this.canMoveUp = function() {
    if(this.scrollY - this.movementSize >= 0) {
      return true;
    } else {
      return false;
    }
  }

  this.canMoveDown = function() {
    if(this.scrollY + this.screenHeight + this.movementSize < ((this.mapSize * this.tileSize) + this.tileSize)) {
      return true;
    } else {
      return false;
    }
  }

  this.canMoveRight = function() {
    if(this.scrollX + this.screenWidth + this.movementSize < ((this.mapSize * this.tileSize) + this.tileSize)) {
      return true;
    } else {
      return false;
    }
  }

  this.canMoveLeft = function() {
    if(this.scrollX - this.movementSize >= 0) {
      return true;
    } else {
      return false;
    }
  }
};
