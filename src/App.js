import React from "react";

function App() {
  const [state, updateState] = React.useState(0);
  const [amount, updateAmount] = React.useState({
    normal: "",
    rd: "",
    ph: "",
  });
 

  return (
    <div className="App">
      <h1 className="title"> OVERTIME CALCULATOR   &#40; EMPLOYMENT ACT 1955 &#41; </h1>
      <label>
        Basic Salary + &#40;  Allowance if included in OT calculation &#41;
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
      <div className="indicator">
        <p className="orp">
          ORP =  RM
          <span className="orp-a">
            
            {Number.parseFloat(state.orp).toFixed(2)}
            </span>
        </p>
        <p className="hrp">
          HRP =  RM
          <span className="hrp-a">
            
            {Number.parseFloat(state.hrp).toFixed(2)}
          </span>
        </p>
      </div>
      <table>
        <tr>
          <th> Overtime Type </th> 
          <th> Rate per hour </th>
          <th> Total Hours </th> 
          <th> Amount &#40;RM &#41; </th>
        </tr>
        <tr>
          <td> Normal </td>
          <td>
            <p className="normal">
              RM
              <span className="normal-a">
                
                {Number.parseFloat(state.hrp * 1.5).toFixed(2)}
              </span>
            </p>
          </td>
          <td>
            <input
              type="number"
              name="normal"
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    normal: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.hrp * 1.5 * amount.normal).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td> Rest Day </td>
          <td>
            <p className="rd">
              RM
              <span className="rd-a">
                
                {Number.parseFloat(state.hrp * 2).toFixed(2)}
              </span>
            </p>
          </td>
          <td>
            <input
              type="number"
              name="rd"
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    rd: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.hrp * 2 * amount.rd).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td> Public Holiday </td>
          <td>
            <p className="ph">
              RM
              <span className="ph-a">
                
                {Number.parseFloat(state.hrp * 3).toFixed(2)}
              </span>
            </p>
          </td>
          <td>
            <input
              type="number"
              name="ph"
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    ph: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.hrp * 3 * amount.ph).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{textAlign:'center'}}> TOTAL </td>
          <td> 
            {/* {
             Array.from(document.getElementsByClassName("final"))
              .map((i) => Number(i.innerHTML))
              .reduce(
                (previousValue, currentValue) => previousValue + currentValue
              )} */}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
