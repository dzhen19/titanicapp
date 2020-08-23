import React from "react";
import "./wave.scss";
import titanic from "../assets/titanic.svg";

export default function Wave() {
  const wave = (
    <div>
      <div className="ship" />
      <svg
        fill-opacity=".5"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "0%",
          width: "100%",
        }}
        viewBox="0 0 1320 300"
      >
        <path
          d="
      M0, 192
      C220, 100, 440, 100, 660, 192
      C880, 290, 1100, 290, 1320, 192
      L1320 500
      L0 500
"
          fill="#00d2d3"
        />
        <path
          d="
      M0, 192
      C220, 100, 440, 100, 660, 192
      C880, 290, 1100, 290, 1320, 192
      L1320 500
      L0 500
"
          fill="#a8dadc"
        />
        <path
          fill-opacity=".5"
          d="
      M0, 192
      C220, 100, 440, 100, 660, 192
      C880, 290, 1100, 290, 1320, 192
      L1320 500
      L0 500
"
          fill="#fff"
        />
        <path
          fill-opacity=".5"
          d="
      M0, 192
      C220, 100, 440, 100, 660, 192
      C880, 290, 1100, 290, 1320, 192
      L1320 500
      L0 500
"
          fill="#38b6ff"
        />
      </svg>
    </div>
  );

  return wave;
}
