import React from "react";

// Styles
import classes from "./Card.module.css";

const Card = ({
  title,
  text,
  target,
  linkTitle,
  href,
  rel,
  onClick,
  linkClassName,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__title}>{title}</div>

      <div className={classes.card_text}>{text}</div>
      <a
        className={`${classes.card__link} ${linkClassName}`}
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
