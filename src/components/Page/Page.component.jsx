/**
 * Please, improve this component and fix all problems.
 *
 * What is important:
 * - design (extensibility, testability)
 * - code cleanliness, following best practices
 * - bugs
 * - consistency
 * - naming
 * - formatting
 *
 * Write your perfect code!
 */

import React, { useEffect, useState } from "react";

// Components
import CardList from "../CardList/CardList.component";

// Styles
import classes from "./Page.module.css";

const Page = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/savayer/demo/posts"
      );
      const json = await response.json();

      setCards(json);
    };

    fetchedData();
  }, []);

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <CardList cards={cards} />
      </div>
    </div>
  );
};

export default Page;
