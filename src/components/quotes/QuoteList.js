import { Fragment } from "react";
import { useLocation, useHistory } from "react-router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending === "Ascending") {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();

  // ! Making Querry Paramater Dynamic
  const changeOrder = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${setOrder()}`,
    });
    // history.push(`${location.pathname}?sort=${setOrder()}`);
  };

  // ! Checking the search params with js built in class
  const searchTerm = new URLSearchParams(location.search);

  // ! Check the order and reverse it
  const setOrder = () =>
    searchTerm.get("sort") === "Ascending" ? "Descending" : "Ascending";

  const sortedArray = sortQuotes(props.quotes, setOrder());
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeOrder}>Sort {setOrder()}</button>
      </div>
      <ul className={classes.list}>
        {sortedArray.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
