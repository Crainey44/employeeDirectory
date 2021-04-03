import React from "react";

function ResultList(props) {
  return (
      <table className = "table">
      {props.result.map(result => (
          <table style="width: 100%">
              <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Employeerole</th>
              </tr>
              <tr>
              <td>max</td>
              <td>sherzer</td>
              <td>Professional Baseball Pitcher</td>
          </tr>
              </table>
      ))}
    </table>
  );
}

export default ResultList;