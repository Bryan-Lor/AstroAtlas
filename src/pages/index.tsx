import { type NextPage } from "next";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
import HtmlHead from "./components/htmlhead";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HtmlHead />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-megrim text-8xl font-normal tracking-widest text-white">
          <span className="text-red-600">Astro</span>Atlas
        </h1>
        <div className="w-[30rem]">
          <img
            className=""
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4fc1ac7-aaf6-4056-94f6-d96eef44e7c3/dbx8ae7-3da21a85-2fb1-498d-926a-43eaf28d7c24.png/v1/fill/w_1024,h_1024,strp/astronaut_design_by_artbox99_dbx8ae7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2M0ZmMxYWM3LWFhZjYtNDA1Ni05NGY2LWQ5NmVlZjQ0ZTdjM1wvZGJ4OGFlNy0zZGEyMWE4NS0yZmIxLTQ5OGQtOTI2YS00M2VhZjI4ZDdjMjQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.l-DoBgY6CmQCU2v4e4nTPPHCLbbmvg2LeZgX0XhgPvE"
          />
        </div>
        <Link
          className="rounded-full bg-white/20 py-3 px-20 font-mono text-xl tracking-wide text-white"
          href="./app"
        >
          Explore
        </Link>
      </div>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
