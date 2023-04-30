import React from "react";



const ComparisionCard = ({color,arrayList}) => {
  return (
    <div className={color ? "bisqueCard" : "comparisionCard" }>
      <ul style={{ listStyle: "None" }}>
        {arrayList ? arrayList.map((title) => (
          <>
            <li className="list">{title.heading}</li>
            <hr />
          </>
        )):""}
      </ul>
    </div>
  );
};

export default ComparisionCard;
