class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    Comment.load();
    this.addCommentFormListener();
  }

  render(comment) {
    var commentsNode = $(`#comments-${comment.image.id}`);
    commentsNode.append(comment.commentEl());
  }

  addCommentFormListener() {
    // create comment form listener code here
    // Add listner to every form
    $('#images form').on('submit', function(e){
      // Prevent HTTP submit
      e.preventDefault();
      var imageId = $(this).attr('data-id');
      var image = Image.all[imageId];
      var commentNode = $(`#comment-description-${imageId}`);
      var commentText = commentNode.val();
      var newComment = new Comment(image, commentText);
      // TODO clear commentNode value to make room for next comment
      ImagesController.render(image);
    });
  }
}
