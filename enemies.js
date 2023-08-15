export class EnemyOne {
    constructor(image, width, height, spriteWidth, spriteHeight, imageCoorX, imageCoorY) {
      this.image = new Image();
      this.image.src = "./assets/raven.png";
      this.image.onload = () => {
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.imageCoorX = imageCoorX;
        this.imageCoorY = imageCoorY;
        this.spritecordX = 0;
      };
    }
  
    draw(ctx) {
      ctx.drawImage(
        this.image,
        this.spritecordX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.imageCoorX,
        this.imageCoorY,
        this.width,
        this.height
      );
    }
  
    update() {
      this.spritecordX++;
      if (this.spritecordX == 6) {
        this.spritecordX = 0;
      }
      this.imageCoorX -= 5;
    }
  }