import React from "react";
import Shape from "./Shape";
import { ShapeTypes } from "./constants";

export default function Shapes() {
  return (
    <div>
      Shapes
      <div id="container">
        <Shape color="yellow" type={ShapeTypes.circle} />
        <Shape />
        <Shape />
        <Shape />
        <Shape />
        <Shape />

        <Shape color="#afc" width={200} type={ShapeTypes.square} />

        <Shape color="green" height={200} width={200} type={ShapeTypes.rect} />

        <Shape />
        <Shape />
      </div>
    </div>
  );
}
