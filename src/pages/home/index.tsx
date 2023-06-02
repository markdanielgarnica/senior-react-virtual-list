import React from "react";
import { getSession } from "next-auth/react";
import User from "@/shared/User";
import NavBar from "@/shared/NavBar";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
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

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
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
