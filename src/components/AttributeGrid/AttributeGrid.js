import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHeart, faOm } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./AttributeGrid.module.css";

const attributes = [
  {
    icon: faLeaf,
    title: "Mind & Body",
    text: "Classes for all levels to support balance and strength.",
  },
  {
    icon: faHeart,
    title: "Community",
    text: "A warm, inclusive space where everyone belongs.",
  },
  {
    icon: faOm,
    title: "Authentic Practice",
    text: "Rooted in tradition, guided by compassion.",
  },
];

const AttributeGrid = () => {
  return (
    <div className={styles.root}>
      {attributes.map((attr, idx) => (
        <div key={idx} className={styles.card}>
          <FontAwesomeIcon icon={attr.icon} className={styles.icon} />
          <h4>{attr.title}</h4>
          <p>{attr.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AttributeGrid;