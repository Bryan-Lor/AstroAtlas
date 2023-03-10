import { type NextPage } from "next";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./components/htmlhead";
import SplineApp from "./components/splineapp";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const App: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <SplineApp />
      {/* <Canvas shadows flat linear>
        <Suspense fallback={null}>
          <SplineApp />
        </Suspense>
      </Canvas> */}
    </>
  );
};

export default App;
