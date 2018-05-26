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
    let commentsNode = $(`#comments-${comment.image.id}`);
    commentsNode.append(comment.commentEl());
  }

  addCommentFormListener() {
    // create comment form listener code here
    // Add listner to every form
    $('#images form').on('submit', function (e) {
      // Prevent HTTP submit
      e.preventDefault();
      // get image id
      let imageId = $(this).attr('data-id');
      let image = Image.all[imageId];
      let commentNode = $(`#comment-description-${imageId}`);
      let commentText = commentNode.val();
      let newComment = new Comment(image, commentText);
      // clear commentNode value to make room for next comment
      commentNode.val("")
      ImagesController.render(image);
    });
  }
}
