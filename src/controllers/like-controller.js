
import LikeService from "../service/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelName,
      req.query.modelId,
      req.body.userId
    );

    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      msg: "Successfully toggled like"
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      err: error.message,
      msg: "Could not toggle like"
    });
  }
};
