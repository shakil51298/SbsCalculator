import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { myContext } from "../../App";

const Home = () => {

    const [context, setContext] = useContext(myContext);
    console.log(context.Mobile);
    let history = useHistory();
    const [term, setTerm] = useState("");
    const [mobile, setMobile] = useState("");
    console.log(mobile);
    const [plan, setPlan] = useState("");
    const [qty, setQty] = useState("");
    const [timeser, settimeSer] = useState("");
    const [crossSell, setCross] = useState("");
    const [AddOns, setAddOns] = useState("");
    const [province, setProvince] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        setContext({ Mobile: mobile, Term: term, Plan: plan, Qty: qty, Timeser: timeser, CrossSell: crossSell, AddOns: AddOns, Province: province });
        history.push("/sbsCalculator")

    }

    return (
        <div className="mt-5">
            <h1 className="text-center mb-5">SBS CALCULATOR</h1>
            <form action="" onSubmit={handleFormSubmit}>
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
                                <select onChange={(e) => setMobile(e.target.value)}>
                                    <option  value="iphone 13 pro 256gb">iphone 13 pro 256gb</option>
                                    <option value="iphone 12 pro 256gb">iphone 12 pro 256gb</option>
                                    <option value="iphone 11 256gb">iphone 11 256gb</option>
                                    <option value="iphone 13 pro max 256gb">iphone 13 pro max 256gb</option>
                                    <option value="iphone 10 pro 256gb">iphone 10 pro 256gb</option>
                                    <option value="iphone 18 pro 256gb">iphone 18 pro 256gb</option>
                                    <option value="iphone 11 pro 256gb">iphone 11 pro 256gb</option>
                                    <option value="iphone 13 pro max 256gb">iphone 13 pro max 256gb</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => { setTerm(e.target.value) }}>
                                    <option defalutValue="TMB">TMB</option>
                                    <option value="MTM">MTM</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => { setPlan(e.target.value) }}>
                                    <option selected value="plan #1">plan #1</option>
                                    <option value="plan #2">plan #2</option>
                                    <option value="plan #3">plan #3</option>
                                </select>
                            </td>
                            <td><input
                                type="number"
                                id="qty"
                                name="q"
                                min="1"
                                max="100"
                                placeholder="1"
                                onChange={(e) => setQty(e.target.value)}
                            ></input></td>
                            <td>
                                <button type="submit" className="btn btn-success">+</button>
                            </td>
                            <td>
                                <select onChange={(e) => { settimeSer(e.target.value) }}>
                                    <option value="none" selected>none</option>
                                </select>
                            </td>
                            <td>
                                <input onBlur={(e) => setCross(e.target.value)} type="text" placeholder="$10" />
                            </td>
                            <td>
                                <select onChange={(e) => setAddOns(e.target.defaultValue)}>
                                    <option selected value="none" >none</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => setProvince(e.target.value)}>
                                    <option value="on" selected>On</option>
                                    <option value="off">Off</option>
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-success">Delete</button>
                            </td>
                            <br />
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className="mt-5">
                <button className="btn btn-success">Add a new line</button>
            </div>
        </div>
    );
};

export default Home;