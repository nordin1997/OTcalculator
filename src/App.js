import React from "react";
function App() {
  const [state, updateState] = React.useState({});

  return (
    <div className="App">
      <h1>OVERTIME CALCULATION MALAYSIA &#40;2022&#41;</h1>
      <label>
        Basic Salary + Allowance &#40;if included in OT calculation&#41;
      </label>
      <input
        type="number"
        name="basic"
        placeholder="1500"
        onChange={(e) => {
          updateState({
            orp: e.target.value/26,
            hrp: e.target.value/26/8,
          });
        }}
      ></input>
      <p className="orp">
        RM
        <span className="orp-a">{Number.parseFloat(state.orp).toFixed(2)}</span>
        ORP
      </p>
      <p className="hrp">
        RM
        <span className="hrp-a">{Number.parseFloat(state.hrp).toFixed(2)}</span>
        HRP
      </p>
      <table>
        <tr>
          <th>Type/Rate</th>
          <th>Total Hours</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            <p className="normal">
              RM
              <span className="normal-a">
                {Number.parseFloat(state.hrp * 1.5).toFixed(2)}
              </span>
              per hour &#40;NORMAL OT&#41;
            </p>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <p className="rd">
              RM
              <span className="rd-a">
                {Number.parseFloat(state.hrp * 2).toFixed(2)}
              </span>
              per hour &#40;REST DAY OT&#41;
            </p>
          </td>
          <td>
            <input type="number" name="normal-r"></input>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <p className="ph">
              RM
              <span className="ph-a">
                {Number.parseFloat(state.hrp * 3).toFixed(2)}
              </span>
              per hour &#40;PUBLIC HOLIDAY OT&#41;
            </p>
          </td>
          <td>
            <input type="number" name="normal-p"></input>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
