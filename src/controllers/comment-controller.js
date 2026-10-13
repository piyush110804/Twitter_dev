
import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelName,
      req.body.userId,
      req.body.content
    );

    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      msg: "Successfully created a new comment"
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      err: error.message,
      msg: "Could not create comment"
    });
  }
};
