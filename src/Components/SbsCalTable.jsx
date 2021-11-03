import React, { useState, useContext } from "react";
import { myContext } from "../App";

const SbsCalTable = () => {
  const [context] = useContext(myContext);
  const { Mobile, Term, Plan, Qty, CrossSell, Province, Timeser } = context;

  const [btnRespose, setBtnRespose] = useState(true);
  const [device, setDevice] = useState("");
  const [payment, setPayment] = useState("");
  const [bip, setBip] = useState("");
  const [allData, setAllData] = useState({});
  const handleSuccessBtn = (e) => {
    setBtnRespose(false);
    setAllData({ Device: device, Payment: payment, Bip: bip });
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
                    <option value="">iphone 13 pro 256gb</option>
                  ) : (
                    <option value="">{Mobile}</option>
                  )}
                </select>
                <br />
                <span className="badge bg-danger">{allData.Payment}</span>
                <span className="badge bg-danger">{allData.Bip}</span>
              </td>
              <td>
                <select>
                  {Term == "" ? (
                    <option value="">TMB</option>
                  ) : (
                    <option value={Term}>{Term}</option>
                  )}
                </select>
              </td>
              <td>
                <select>
                  {Plan == "" ? (
                    <option value="plan #2">plan #2</option>
                  ) : (
                    <option value={Plan}>{Plan}</option>
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
                    placeholder="1"
                  ></input>
                ) : (
                  <input
                    type="number"
                    id="qty"
                    name="q"
                    min="1"
                    max="100"
                    defaultValue={Qty}
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
                  <input type="text" placeholder="$10" />
                ) : (
                  <input type="text" placeholder={CrossSell} />
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
