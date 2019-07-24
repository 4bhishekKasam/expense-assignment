import React from "react";

const Pagination = props => {
  var pagesMap = [];

  function populatePagesMap() {
    for (var i = 0; i < props.pages; i++) {
      pagesMap.push(i + 1);
    }
  }
  populatePagesMap();

  function funcCallback(e) {
    props.callbackFromApp(e.target.id);
  }

  var pagesNumber = pagesMap.map(d => (
    <li key={d} onClick={funcCallback} className="page-item">
      <a id={d} className="page-link">
        {d}
      </a>
    </li>
  ));

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesNumber}
      </ul>
    </nav>
  );
};

export default Pagination;
