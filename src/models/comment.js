// create Comment class here

class Comment {
  constructor(image, text) {
    // Create unique id for this comment
    this.id = this.constructor.all.length;
    this.text = text;
    // Add reference to parent image to this comment instance
    this.image = image;
    this.commentEl();
    this.findImage(image.id);
    // Add reference to this comment to the main comments collection
    this.addToAll();
  }

  commentEl() {
    return `<li data-id="${this.id}">${this.text}</li>`;
  }

  findImage(imageId) {
    let image = this.constructor.images[imageId];
    // Add refence to this comment to it's specific image
    image.comments.push(this);
  }

  addToAll() {
    // Add reference to this comment to the main comments collection
    this.constructor.all.push(this);
  }

}

Comment.load = function () {
  // Create reference to Image.all
  Comment.images = Image.all;
}
Comment.all = [];
