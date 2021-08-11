import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

const NewQoute = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);
  const addQoute = (qoute) => {
    sendRequest(qoute);
  };
  return <QuoteForm isLoading={status === "pending"} onAddQuote={addQoute} />;
};

export default NewQoute;
