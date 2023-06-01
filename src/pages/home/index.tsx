import React from "react";
import { getSession } from "next-auth/react";
import User from "@/shared/User";
import NavBar from "@/shared/NavBar";
import Head from "next/head";
function index({ session }: any) {
  return (
    <div>
      <Head>
        <title>Home</title>
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
