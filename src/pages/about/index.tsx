import NavBar from "@/shared/NavBar";
import React from "react";
import { getSession } from "next-auth/react";
import User from "@/shared/User";
import Head from "next/head";

function index({ session }: any) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <User name={session.user.name} />
      <NavBar />
    </div>
  );
}

export default index;
export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
