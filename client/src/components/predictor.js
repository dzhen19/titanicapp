import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Predictor(props) {
  const [response, setResponse] = useState(props.response);
  const [display, setDisplay] = useState(<div></div>);
  const [isLoading, setIsLoading] = useState(true);

  const output = (survive) => {
    setDisplay(
      survive > 0.5 ? (
        <>
          <h3>You Probably Survived</h3>
          <p>Your chance of survival: {survive.toFixed(2)}</p>
        </>
      ) : (
        <>
          <h3>You Probably Didn't Make It on The Lifeboat</h3>
          <p>Your chance of survival: {survive.toFixed(2)}</p>
        </>
      )
    );
  };

  const prediction = () => {
    fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    })
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        console.log(json);
        output(parseFloat(json["Chance of survival"]));
      });
  };

  useEffect(() => prediction(), []);

  return (
    <div> {isLoading ? "Performing Massic Calculations ..." : display} </div>
  );
}
