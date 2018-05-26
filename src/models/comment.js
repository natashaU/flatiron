// create Comment class here

// TODO change all class stuff in this file to ES6?

function Comment(image, text) {
    // Create unique id for this comment
    this.id = this.constructor.all.length;
    this.text = text;
    // Add refence to parent image to this comment instance
    this.image = image;
    this.findImage(image.id);
    // Add refence to this comment to the main comments collection
    this.constructor.all.push(this);
}

Comment.prototype.commentEl = function() {
  return `<li data-id="${this.id}">${this.text}</li>`;
}

Comment.load = function() {
  // Create reference to Image.all
  Comment.images = Image.all;
}

Comment.prototype.findImage = function(imageId) {
  var image = this.constructor.images[imageId];
  // Add refence to this comment to it's specific image
  image.comments.push(this);
}

Comment.all = [];
