import React from "react";
import { FiEdit2, FiMessageSquare, FiTrash } from "react-icons/fi";

import { Images } from "../../../constants/ImgIndex";
import CommentForm from "./CommentForm";

{
  /*============= 
      1.  the params are already coded in the commentBox
      2. the btnlabel is used in commnentform.jsx
      3. and onlick send would trigger addcommenthandler 
      4. this file  =================== */
}

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  {
    /*============= 
      checks if user is loggedin  =================== */
  }
  const commentBeLongsToUser = logginedUserId === comment.user._id;
  {
    /*============= 
      checks commments belongs to loggedinuser  =================== */
  }

  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;

  {
    /*============= 
         1. selects the affected comment to reply to
        2.   =================== */
  }

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;

  {
    /*============= 
      editing already typed comment  =================== */
  }

  const repliedCommentId = parentId ? parentId : comment._id;

  const replyOnUserId = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2FAF5] p-3 rounded-lg">
      <img
        src={Images.post1}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />

      {/*=============  this is Image =================== */}

      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>

        {/*=============  this  specifies the loggin user name and date comments.jsx=================== */}

        {!isEditing && (
          <p className="font-opensans mt-[10px] text-dark-light">
            {comment.desc}
          </p>
        )}

        {/*=============  this gives desc from comments.jsx =================== */}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}

        {/*=============  changes the commentform during replies for editing =================== */}

        <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <span>Reply</span>
              <FiMessageSquare className="w-4 h-aut0" />
            </button>
          )}

          {/*=============  this is the reply icon 
                and user must be logged in to reply  =================== */}

          {commentBeLongsToUser && (
            <>
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <span>Edit</span>
                <FiEdit2 className="w-4 h-aut0" />
              </button>

              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <span>Delete</span>
                <FiTrash className="w-4 h-aut0" />
              </button>
            </>
          )}
        </div>

        {/*=============  this is the three icons in the comments 
              the comment belongs to user if it's true user can alter his comment=================== */}

        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}

        {/*=============  this is where the commentfform.jsx is linked to this file =================== */}

        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                deleteComment={deleteComment}
                comment={reply}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
