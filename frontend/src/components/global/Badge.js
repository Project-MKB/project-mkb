import React from "react";

const styles = {
  badge: {
    fontSize: "17px",
    margin: "0 5px 5px 0"
  },
  xBtn: {
    fontSize: "12px",
    marginLeft: "4px",
    padding: "0 4px"
  }
};

const Badge = props => {
  return (
    <span style={styles.badge} className="badge badge-success">
      {props.item}
      <button
        type="button"
        style={styles.xBtn}
        className="btn btn-outline-light"
        onClick={() => props.handleItemRemove(props.item)}
      >
        X
      </button>
    </span>
  );
};

export default Badge;
