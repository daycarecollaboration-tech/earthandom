import React from "react";
import * as styles from "./AttributeGrid.module.css";

const AttributeGrid = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.attribute}>
          <div className={styles.icon}>{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AttributeGrid;