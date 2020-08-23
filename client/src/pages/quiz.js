import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { questions } from "./questions";
import Predictor from "../components/predictor";
import "./quiz.css";

const Button = styled.button`
  background: transparent;
  color: white;
  padding: 10px 20px;
  border: solid;
  border-radius: 1px;
  border-width: 1px;
  margin: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  &:hover {
    color: #c1f8ff;
  }
`;

const Input = styled.input`
  background: transparent;
  color: white;
  border: 1px solid #fff;
  border-radius: 2px;
  padding: 10px;
  width: 30px;
  font-size: 17px;
  outline: none;
  &:focus {
    border: 1px solid #c1f8ff;
    border-radius: 1px;
  }
`;

const Header = styled.h1`
  font-family: "Roboto", sans-serif;
`;

const Centered = styled.div`
  position: relative;
  top: 30vh;
`;

const Tray = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Quiz() {
  const Prompt = (text) => (
    <div>
      <Header>{text}</Header>
    </div>
  );

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    index == 9 ? setFinished(true) : setFinished(false);
  });

  const handleTextSubmit = (e) => {
    e.preventDefault();
    document.forms["textBlock"].reset();

    if (!isNaN(parseInt(input))) {
      setResponse({
        ...response,
        [questions[index]["label"]]: input,
      });
      setInput("");
      setIndex(index + 1);
    }
  };

  const handleButtonSubmit = (e) => {
    setResponse({ ...response, [questions[index]["label"]]: e.target.name });
    setIndex(index + 1);
  };

  const buttonBlock = (obj) => (
    <Button onClick={handleButtonSubmit} name={obj["save"]}>
      {obj["display"]}
    </Button>
  );

  const textBlock = (text) => (
    <form id="textBlock" onSubmit={handleTextSubmit}>
      <Input
        type="number"
        placeholder={text}
        onInput={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
  //ending position
  if (finished) {
    return (
      <Centered>
        {Prompt("Finished")}
        <Predictor response={response} />
      </Centered>
    );
  }
  //starting position
  else if (index == 0) {
    return (
      <Centered>
        {Prompt(questions[index]["question"])}
        <Button onClick={() => setIndex(index + 1)}>Find Out</Button>
      </Centered>
    );
  } else {
    return (
      <Centered>
        {Prompt(questions[index]["question"])}
        <Tray>
          {questions[index]["input"] === "button"
            ? questions[index]["buttons"].map((buttonObj) =>
                buttonBlock(buttonObj)
              )
            : textBlock(questions[index]["placeholder"])}
        </Tray>
      </Centered>
    );
  }
}
