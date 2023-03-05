import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineApp() {
  return (
    <div className="h-full w-full">
      <Spline scene="https://prod.spline.design/cXHxMnoVz3A6lxlH/scene.splinecode" />
    </div>
  );
}
