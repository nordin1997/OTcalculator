import React from "react";

function App() {
  const [state, updateState] = React.useState(0);
  const [amount, updateAmount] = React.useState({
    normal: 0,
    rd_4:0,
    rd_8:0,
    rd: 0,
    ph_8:0,
    ph: 0,
  });
  const [total,updateTotal] = React.useState(0)
  const [showM, setShowM] = React.useState(false)
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
        Enter Your Basic Salary
      </label>
      <p>&#40; Include Any Fixed Allowance in Your Basic If it's subject to OT Calculation &#41;</p>
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
      {/*Below are ORP & HRP*/}
      {/* <div className="indicator">
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
      </div> */}
      <div className="show-min">
        <input type="checkbox" id="ea" name="ea" value="false" onClick={()=>{setShowM(prev=>!prev);updateAmount((prev)=>{return{...prev,
    rd_4:0,
    rd_8:0,
    ph_8:0,
    }})}}></input>
  <label for="ea">Show Minimum OT Calculation</label><br></br>
  </div>
      
      <table>
        <tr>
          <th> Overtime Type </th> 
          <th> Rate </th>
          <th> Enter Total Hours </th> 
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
        {showM && <tr>
          <td>Rest Day Below 4</td>
          <td><p className="rd">
              RM
              <span className="rd-a">
                {Number.parseFloat(state.orp * 0.5).toFixed(2)}
              </span>
            </p></td>
          <td>
          <input
              type="number"
              name="rd_4"
              min={0}
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    rd_4: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.orp * 0.5 * amount.rd_4).toFixed(2)}
          </td>
          
          </tr>}
          {showM && <tr>
          <td>Rest Day Above 4 and Below 8</td>
          <td><p className="rd">
              RM
              <span className="rd-a">
                {Number.parseFloat(state.orp).toFixed(2)}
              </span>
            </p></td>
          <td>
          <input
              type="number"
              name="ph_8"
              min={0}
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    rd_8: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.orp * amount.rd_8).toFixed(2)}
          </td>
          
          </tr>}
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
        {showM && <tr>
          <td>Public Holiday Below 8</td>
          <td><p className="ph">
              RM
              <span className="ph-a">
                {Number.parseFloat(state.orp * 2).toFixed(2)}
              </span>
            </p></td>
          <td>
          <input
              type="number"
              name="ph_8"
              min={0}
              onChange={(e) => {
                updateAmount((amount) => {
                  return {
                    ...amount,
                    ph_8: e.target.value,
                  };
                });
              }}
            ></input>
          </td>
          <td className="final">
            
            {Number.parseFloat(state.orp * 2 * amount.ph_8).toFixed(2)}
          </td>
          
          </tr>}
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
