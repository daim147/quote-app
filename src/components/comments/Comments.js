import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { sendRequest, data, status } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { qouteId } = useParams();
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  useEffect(() => {
    sendRequest(qouteId, true);
  }, [sendRequest, qouteId]);
  const onAddedComment = useCallback(() => {
    sendRequest(qouteId, true);

    setIsAddingComment(false);
  }, [sendRequest, setIsAddingComment, qouteId]);
  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && data && data.length > 0) {
    comments = <CommentsList comments={data} />;
  }
  if (status === "completed" && (!data || data.length === 0)) {
    comments = <p className="centered"> No Comments Were added</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={qouteId} onAddedComment={onAddedComment} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
