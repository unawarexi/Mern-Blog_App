import React, { useEffect, useState } from "react";
import { getCommentsData } from "../../../data/Comments";
import CommentForm from "./CommentForm";
import Comment from "./Comment";


 {/*============= 
      1. this file contqins the logic of whats going in and out of the coment box  =================== */}

const CommentBox = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);

  const mainComments = comments.filter((comment) => comment.parent === null);
  {
    /*=============  this state for checking if it's a main comment =================== */
  }

  const [affectedComment, setAffectedComment] = useState(null);
  {
    /*=============  this state is use to update comment from the textarea
     just for repying and edditing =================== */
  }

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  {
    /*=============  this Hook would wait to retrieve data from comments.jsx file=================== */
  }

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toString(),
    };
    setComments((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };

  {
    /*=============  this state function is to add new comment =================== */
  }

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, desc: value };
      }
      return comment;
    });
    setComments(updatedComments);
    setAffectedComment(null);
  };

  {
    /*=============  update already comment using the setaffected state =================== */
  }

  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setComments(updatedComments);
  };

  {
    /*=============  this function is to delete  comments  =================== */
  }

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  {
    /*
   1. this fucntion is to get replies to a main comment
   2. the date "a, b" helps to arrange the comments in order of time =================== */
  }

  return (
    <div className={`${className}`}>
      {/*============= 
      1.  the formsubmithandler function kicks off the main comment
      2. the btnlabel is used in commnentform.jsx
      3. and onlick send would trigger addcommenthandler  =================== */}

      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />


       {/*============= 
      1.  this is where the comment.jsx is connected to this file
      2. the (comment) parameter is in the comment.jsx  including the rest items
      3. we are mapping using unique key indexes to map the main comment to get
           a. comment id, the affected comment, to set affected comment,
           b. a loggedin user, adding, updating, deleting and responding   =================== */}

      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            comment={comment}
            logginedUserId={logginedUserId}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
