import React, { useState, useEffect } from "react";
import LinkedList from "../../Classes/LinkedList";
import { Link } from "react-router-dom";
import "./index.css";
const Sets = () => {
  const [ListA, setListA] = useState<LinkedList<string>>(
    new LinkedList<string>()
  );
  const [ListB, setListB] = useState<LinkedList<string>>(
    new LinkedList<string>()
  );
  const [listAArray, setListAArray] = useState<string[]>([]);
  const [listBArray, setListBArray] = useState<string[]>([]);
  const [beforeListAText, setBeforeListAText] = useState<string>("");
  const [beforeListBText, setBeforeListBText] = useState<string>("");
  const [afterListAText, setAfterListAText] = useState<string>("");
  const [afterListBText, setAfterListBText] = useState<string>("");

  useEffect(() => {
    setListAArray(ListA.toArray());
  }, [ListA]);
  useEffect(() => {
    setListBArray(ListB.toArray());
  }, [ListB]);
  function handleAddBeforeA() {
    const text = beforeListAText.trim();
    if (text !== "") {
      const temp = new LinkedList<string>();
      temp.head = ListA.head;
      temp.insertAtBeginning(text);
      setListA(temp);
    }
    setBeforeListAText("");
  }
  function handleAddAfterA() {
    const text = afterListAText.trim();
    if (text !== "") {
      const temp = new LinkedList<string>();
      temp.head = ListA.head;
      temp.insertAtEnd(text);
      setListA(temp);
    }
    setAfterListAText("");
  }
  function handleAddBeforeB() {
    const text = beforeListBText.trim();
    if (text !== "") {
      const temp = new LinkedList<string>();
      temp.head = ListB.head;
      temp.insertAtBeginning(text);
      setListB(temp);
    }
    setBeforeListBText("");
  }
  function handleAddAfterB() {
    const text = afterListBText.trim();
    if (text !== "") {
      const temp = new LinkedList<string>();
      temp.head = ListB.head;
      temp.insertAtEnd(text);
      setListB(temp);
    }
    setAfterListBText("");
  }
  function handleRemoveFromB(index: number) {
    const temp = new LinkedList<string>();
    temp.head = ListB.head;
    if (index === 0) {
      temp.deleteFirst();
    } else {
      temp.deleteAt(index);
    }
    setListB(temp);
  }
  function handleRemoveFromA(index: number) {
    const temp = new LinkedList<string>();
    temp.head = ListA.head;
    if (index === 0) {
      temp.deleteFirst();
    } else {
      temp.deleteAt(index);
    }
    setListA(temp);
  }
  function Intersection() {
    let intersection: string[] = listAArray.filter((item) =>
      listBArray.includes(item)
    );
    return (
      <>
        <ol className="numberList">
          {intersection.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
      </>
    );
  }
  function Union() {
    let union = listAArray.concat(listBArray);
    return (
      <>
        <ol className="numberList">
          {union.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
      </>
    );
  }
  function Difference() {
    let difference: string[] = listAArray.filter(
      (item) => !listBArray.includes(item)
    );
    return (
      <>
        <ol className="numberList">
          {difference.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ol>
      </>
    );
  }
  return (
    <>
      <div>
        <Link to="/">{"<"} Home</Link>
        <div className="set">
          <button onClick={handleAddBeforeA}>+</button>
          <input
            type="text"
            value={beforeListAText}
            onChange={(e) => {
              setBeforeListAText(e.target.value);
            }}
          ></input>
          <ol>
            {listAArray.map((item, i) => {
              return (
                <li
                  onClick={() => {
                    handleRemoveFromA(i);
                  }}
                  className="setItem"
                  key={i}
                >
                  {item + ","}
                </li>
              );
            })}
          </ol>
          <input
            type="text"
            value={afterListAText}
            onChange={(e) => {
              setAfterListAText(e.target.value);
            }}
          ></input>
          <button onClick={handleAddAfterA}>+</button>
        </div>
        <div className="set">
          <button onClick={handleAddBeforeB}>+</button>
          <input
            type="text"
            value={beforeListBText}
            onChange={(e) => {
              setBeforeListBText(e.target.value);
            }}
          ></input>
          <ol>
            {listBArray.map((item, i) => {
              return (
                <li
                  onClick={() => {
                    handleRemoveFromB(i);
                  }}
                  className="setItem"
                  key={i}
                >
                  {item}
                </li>
              );
            })}
          </ol>
          <input
            type="text"
            value={afterListBText}
            onChange={(e) => {
              setAfterListBText(e.target.value);
            }}
          ></input>
          <button onClick={handleAddAfterB}>+</button>
        </div>
        <div className="numberListContainer">
          <p>Interseção:</p>
          <Intersection />
        </div>
        <div className="numberListContainer">
          <p>União:</p>
          <Union />
        </div>
        <div className="numberListContainer">
          <p>Diferença:</p>
          <Difference />
        </div>
      </div>
    </>
  );
};

export default Sets;
