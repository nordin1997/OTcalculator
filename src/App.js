import React from "react";

function App() {
  const [state, updateState] = React.useState(0);
  const [amount, updateAmount] = React.useState({
    normal: 0,
    rd: 0,
    ph: 0,
  });
  const [total,updateTotal] = React.useState(0)
  
  React.useEffect(()=>{
      updateTotal(Array.from(document.getElementsByClassName("final"))
    .map((i) => Number(i.innerHTML))
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ))
   
  },[amount,state])

  return (
    <div className="App">
      <h1 className="title"> 🇲🇾 OVERTIME CALCULATOR  </h1>
      <label>
        Enter Your Basic Salary + &#40;  Allowance if included in OT calculation &#41;
      </label>
      <input
        type="number"
        name="basic"
        placeholder="1500"
        min={0}
        className = 'basic'
        onChange={(e) => {
          updateState({
            orp: e.target.value ? e.target.value /26:0,
            hrp: e.target.value ? e.target.value /26/8:0,
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
              min={0}
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
              min={0}
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
              min={0}
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
          <td className="final" onChange={(e)=>{console.log(e.target.value)}}>
            
            {Number.parseFloat(state.hrp * 3 * amount.ph).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{textAlign:'center'}}> TOTAL </td>
          <td> 
            {total}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
