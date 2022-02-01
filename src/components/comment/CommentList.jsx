import React, { useState, useRef, useEffect } from 'react';
import CommentView from './CommentView';
import PropTypes from 'prop-types';
import Constants from '../../constants/Constants';
import { Rings } from 'react-loader-spinner';

const CommentList = (props) => {
  const commentEndRef = useRef(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteCommentViewHandler = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
    }, 2000);
  };

  useEffect(() => {
    if (commentEndRef.current === null) {
      return;
    }
    commentEndRef.current.scrollTop = commentEndRef.current.scrollHeight;
  }, [JSON.stringify(props.comments)]);

  return (
    <span>
      {isDeleting ? (
        <div className="comment-delete">
          <Rings color="#00BFFF" height={80} width={80} />
          <p>Deleting comment...</p>
        </div>
      ) : (
        <div className="comment-list-items" ref={commentEndRef}>
          {props.comments.map((comment, index) => (
            <div key={index} className="comment-list-item">
              <CommentView
                commentValue={comment[Constants.HAS_COMMENT_VALUE]}
                author={comment[Constants.HAS_AUTHOR] ? comment[Constants.HAS_AUTHOR] : null}
                timestamp={comment[Constants.HAS_TIMESTAMP]}
                deleteQuestionComment={props.deleteQuestionComment}
                deleteCommentView={deleteCommentViewHandler}
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </span>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteQuestionComment: PropTypes.func.isRequired
};

export default CommentList;