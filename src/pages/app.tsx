import { type NextPage } from "next";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./components/htmlhead";
import SplineApp from "./components/splineapp";

const App: NextPage = () => {
  return (
    <>
      <HtmlHead />
      <SplineApp />
    </>
  );
};

export default App;
