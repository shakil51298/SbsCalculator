import React, { useState, useContext } from "react";
import { myContext } from "../App";

const SbsCalTable = () => {
  const [context] = useContext(myContext);
  const { Mobile, Term, Plan, Qty, CrossSell, Province, Timeser } = context;
  console.log(Mobile, Term, Plan, Qty, CrossSell, Province, Timeser);

  const [btnRespose, setBtnRespose] = useState(true);
  const [device, setDevice] = useState({});
  const [payment, setPayment] = useState({});
  const [bip, setBip] = useState({});
  console.log(bip, payment, device);
  const handleSuccessBtn = (e) => {
    setBtnRespose(false);
    // setAllData({ devicename: deviceName, payment: paymentSys, Bib: bib });
    e.preventDefault();
  };
  return (
    <div>
      <form action="">
        <table class="">
          <thead>
            <tr>
              <td scope="col">Device/BYOD</td>
              <td scope="col">Term</td>
              <td scope="col">Rate Plan</td>
              <td scope="col">QTY</td>
              <td scope="col">Monthly Discount</td>
              <td scope="col">One time service discount</td>
              <td scope="col">Cross Sell</td>
              <td scope="col">Add-ons</td>
              <td scope="col">Province</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select>
                  {Mobile == "" ? (
                    <option value="">{Mobile}</option>
                  ) : (
                    <option value="">iphone 13 pro 256gb</option>
                  )}
                </select>
                <br />
                <span className="badge bg-danger">{payment}</span>
                <span className="badge bg-danger">{bip}</span>
              </td>
              <td>
                <select>
                  {Term == "" ? (
                    <option value={Term}>{Term}</option>
                  ) : (
                    <option value="">TMB</option>
                  )}
                </select>
              </td>
              <td>
                <select>
                  {Plan == "" ? (
                    <option value={Plan}>{Plan}</option>
                  ) : (
                    <option value="plan #2">plan #2</option>
                  )}
                </select>
              </td>
              <td>
                {Qty == "" ? (
                  <input
                    type="number"
                    id="qty"
                    name="q"
                    min="1"
                    max="100"
                    defaultValue={Qty}
                  ></input>
                ) : (
                  <input
                    type="number"
                    id="qty"
                    name="q"
                    min="1"
                    max="100"
                    placeholder="1"
                  ></input>
                )}
              </td>
              <td>
                <select name="" id="">
                  <option value="">None</option>
                </select>
              </td>
              <td>
                <select>
                  {Timeser == "" ? (
                    <option value="none" selected>
                      none
                    </option>
                  ) : (
                    <option value="none" selected>
                      {Timeser}
                    </option>
                  )}
                </select>
              </td>
              <td>
                {CrossSell == "" ? (
                  <input type="text" placeholder={CrossSell} />
                ) : (
                  <input type="text" placeholder="$10" />
                )}
              </td>
              <td>
                <select>
                  <option selected value="none">
                    none
                  </option>
                </select>
              </td>
              <td>
                <select>
                  {Province == "" ? (
                    <option value="on" selected>
                      On
                    </option>
                  ) : (
                    <option value="on" selected>
                      Off
                    </option>
                  )}
                </select>
              </td>
              <td>
                <button className="btn btn-success" onClick={handleSuccessBtn}>
                  ✔️
                </button>
              </td>
              <br />
            </tr>
            {btnRespose ? (
              <tr style={{ height: "80px", width: "100%" }}>
                <div className="d-flex justify-content-around">
                  <select
                    name=""
                    id=""
                    className="mt-4"
                    onChange={(e) => setDevice(e.target.value)}
                  >
                    <option selected value="device">
                      Device
                    </option>
                    <option value="Shoue">Shoue</option>
                    <option value="Bike">Bike</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="mt-4"
                    onChange={(e) => setPayment(e.target.value)}
                  >
                    <option selected value="Easy Payment">
                      Easy Payment
                    </option>
                    <option value="Hard Payment">Hard Payment</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="mt-4"
                    onChange={(e) => setBip(e.target.value)}
                  >
                    <option value="Bip" selected>
                      Bip
                    </option>
                    <option value="SBS">SBS</option>
                  </select>
                </div>
              </tr>
            ) : null}
          </tbody>
        </table>
      </form>
      <div className="mt-5">
        <button className="btn btn-success">Add a new line</button>
      </div>
    </div>
  );
};

export default SbsCalTable;

// /**
//  * <form action="" onSubmit={handleSuccessBtn}>
//         <table class="" style={{ width: "100%" }}>
//           <thead>
//             <tr>
//               <td scope="col">Device/BYOD</td>
//               <td scope="col">Term</td>
//               <td scope="col">Rate Plan</td>
//               <td scope="col">QTY</td>
//               <td scope="col">Monthly Discount</td>
//               <td scope="col">One time service discount</td>
//               <td scope="col">cross sell</td>
//               <td scope="col">Add-Ons</td>
//               <td scope="col">Province</td>
//               {/* <td scope="col">Things</td> */}
//               {/* <td scope="col">Pymment sys</td> */}
//               {/* <td scope="col">Bib</td> */}
//               </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <select>
//                       {/* <option value={Mobile}>{Mobile}</option> */}
//                     </select>
//                   </td>
//                   <td>
//                     <select>
//                       {/* <option value={Term}>{Term}</option> */}
//                     </select>
//                   </td>
//                   {/* <td>{Plan}</td> */}

//                   <td>None</td>
//                   <td>None</td>
//                   {/* <td>{CrossSell}</td> */}
//                   <td>None</td>
//                   {/* <td>
//                     <select onChange={handleName}>
//                       <option value="Device">Device</option>
//                       <option value="Apple 13 256 gb">Apple 13 256 gb</option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Samsung 13 256">Samsung 13 256</option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                       <option value="Apple 13 pro max 128gb">
//                         Apple 13 pro max 128gb
//                       </option>
//                     </select>
//                   </td> */}
//                   {/* <td>
//                     <select name="phone" id="phone" onChange={handlePayment}>
//                       <option value="Easy_payment">Easy Payment</option>
//                       <option value="No_Easy_payment">No Easy Payment</option>
//                     </select>
//                   </td> */}
//                   {/* <td>
//                     <select name="phone" id="phone" onChange={handleBib}>
//                       <option value="Bib">Bib</option>
//                       <option value="NoBib">No Bib</option>
//                     </select>
//                   </td> */}

//                   <td>{Province}</td>
//                   <td>
//                     <button className="btn-success" }>
//                       ✔️
//                     </button>
//                   </td>
//                   <br />
//                 </tr>

//               </tbody>
//             </table>
//           </form>
//  */
