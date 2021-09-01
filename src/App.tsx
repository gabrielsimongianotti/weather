import { useState } from "react";

function App () {
  const [page, setPage] = useState(2)
  const items = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
  ]
  return (
    <div className="App">
      {items[page].map(item => (<p>{item}</p>))}
      {Array.from({ length: items.length }).map((item, index) => {
        if (index+2 >= page && page + 5 > index) {
          return (<p onClick={()=>{setPage(index)}}>{index+1 }</p>)
        }
      })}
    </div>
  );
}

export default App;
