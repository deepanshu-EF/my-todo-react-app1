import React from 'react';
import dataJson from './data.json';

const ListRendering = () => {
  const userData = dataJson;
  const listItems = userData.map((item) => {
    return <li key={item.id}>{item.taskName} {item.isTaskDone}</li>;
  });

//   console.log({ userData });
  console.log({ listItems });

  return (
    <div>
      <ol style={{ listStyleType: "none" }}>{listItems}</ol>
    </div>
  );
};

export default ListRendering;