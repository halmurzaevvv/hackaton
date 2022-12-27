import React, { FC, useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./OrderForm.css";
import { cartContext } from "../../Context/CartContextProvider";
import { NavLink } from "react-router-dom";

const OrderForm = () => {
  const [closed, setClosed] = useState(false);
  const [showP, setShowP] = useState(false);

  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  const [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");

  const { getCart } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  const showPar = (e) => {
    SetFocus(e.target.name);
    setShowP(true);
  };

  return (
    <>
      <div className="paymentcard">
        <div className="order-block">
          <div className={closed ? "none" : "rccs__card backcolor"}>
            <div className="rccs__card rccs__card--unknown">
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
            </div>

            <br />
            <form>
              <div className="row">
                <div className="col-sm-11">
                  <input
                    placeholder="Card Number"
                    type="tel"
                    className="form-control card-number"
                    value={number}
                    name="number"
                    maxLength="16"
                    pattern="[0-9]\d*"
                    onChange={(e) => {
                      SetNumber(e.target.value);
                    }}
                    onFocus={(e) => showPar(e)}
                    onBlur={() => setShowP(false)}
                  ></input>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-11">
                  <input
                    type="text"
                    placeholder="Card Name"
                    className="form-control card-name"
                    value={name}
                    name="name"
                    onChange={(e) => {
                      SetName(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                  ></input>
                </div>
              </div>
              <br />
              <div className="row">
                <div
                  className="col=sm-8"
                  style={{
                    ...{ "padding-right": "12em" },
                    ...{ "padding-left": "1em" },
                  }}
                ></div>
                <div className="col=sm-4"></div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <select
                    className="form-control"
                    name="expiry"
                    onChange={handleDate}
                  >
                    <option value=" ">Month</option>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  <select
                    className="form-control"
                    name="expiry"
                    onChange={handleExpiry}
                  >
                    <option value=" ">Year</option>
                    <option value="21">2021</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                  </select>
                </div>
                <div className="col-sm-3">
                  <input
                    placeholder="CVC"
                    type="tel"
                    name="cvc"
                    maxLength="3"
                    className=" form-control card card-cvc"
                    value={cvc}
                    pattern="\d*"
                    onChange={(e) => {
                      SetCvc(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                  ></input>
                </div>
              </div>
              <NavLink to="/">
                <button
                  onClick={cartCleaner}
                  className="btn btn-secondary form-control"
                >
                  PAY
                </button>
              </NavLink>
            </form>
            <p className={showP ? "p" : "none"}>
              For successful operation please provide
              <span className="b"> "4444 5555 3333 2222"</span> as Card Number.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderForm;
