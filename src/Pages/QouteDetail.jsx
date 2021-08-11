import React, { Fragment, useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QouteDetail = () => {
  const { sendRequest, data, status, error } = useHttp(getSingleQuote);
  const params = useParams();
  const route = useRouteMatch();

  const { qouteId } = params;
  useEffect(() => {
    sendRequest(qouteId);
  }, [qouteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!data?.text) {
    return <h1 className="centered">No Qoute Found</h1>;
  }

  return (
    <Fragment>
      <HighlightedQuote {...data} />
      <Route path={`${route.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${route.url}/comments`}>
            Add Commnets
          </Link>
        </div>
      </Route>
      <Route path={`${route.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QouteDetail;
