import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PolynomialLinkedList from "../../Classes/Polynomial";
import "./index.css";
const Polynomials = () => {
  const [polynomial, setPolynomial] = useState<PolynomialLinkedList>(
    new PolynomialLinkedList()
  );
  const [polynomialArray, setPolynomialArray] = useState<
    { coefficient: number; exponent: number }[]
  >([]);
  const [coefficientText, setCoefficientText] = useState<string>("");
  const [exponentText, setExponentText] = useState<string>("");
  useEffect(() => {
    setPolynomialArray(polynomial.toArray());
  }, [polynomial]);
  function polyString() {
    const polyArray: string[] = [];
    polynomialArray.forEach((item) => {
      let pushStr = "";
      switch (item.exponent) {
        case 0:
          pushStr = `${item.coefficient}`;
          break;
        case 1:
          pushStr = `${item.coefficient}x`;
          break;
        default:
          pushStr = `${item.coefficient}x^${item.exponent}`;
          break;
      }
      if (item.coefficient !== 0) {
        if (item.coefficient < 0) {
          pushStr = `(${pushStr})`;
        }
        polyArray.push(pushStr);
      }
    });
    return polyArray.join(" + ");
  }
  function handleAdd() {
    if (exponentText !== "" && coefficientText !== "") {
      let [coefficient, exponent] = [
        Number(coefficientText),
        Number(exponentText),
      ];
      if (!isNaN(coefficient) && !isNaN(exponent)) {
        let temp = new PolynomialLinkedList();
        temp.head = polynomial.head;
        temp.Add(coefficient, exponent);
        setPolynomial(temp);
      }
    }
  }

  return (
    <div>
      <Link to="/">{"<"} Home</Link>
      <div className="polyText">
        <p>{polyString()}</p>
      </div>
      <form
        className="addPolyForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <p>Adicionar:</p>
        <input
          id="coefficientInput"
          type="text"
          onChange={(e) => {
            setCoefficientText(e.target.value);
          }}
        />
        <p>x^</p>
        <input
          type="text"
          onChange={(e) => {
            setExponentText(e.target.value);
          }}
        />
        <button type="submit">{">"}</button>
      </form>
    </div>
  );
};

export default Polynomials;
