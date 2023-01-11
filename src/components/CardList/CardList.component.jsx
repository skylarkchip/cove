import React from "react";

// Components
import Card from "../Card/Card.component";

// Styles
import classes from "./CardList.module.css";

const CardList = (props) => {
  const { cards } = props;

  const analyticsTrackClick = (url) => {
    // sending clicked link url to analytics
    console.log(url);
  };

  return (
    <div className={`${classes["card__list"]}`}>
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title.en}
            linkTitle={item.link_title}
            href={item.link}
            text={item.body !== null ? item.body.en : ""}
            linkClassName={item.id === 1 ? `${classes["card__link--red"]}` : ""}
            target={item.id === 1 ? "_blank" : "_self"}
            onClick={() => analyticsTrackClick(item.link)} // updated onClick to avoid self trigger
          />
        );
      })}
    </div>
  );
};

export default CardList;
