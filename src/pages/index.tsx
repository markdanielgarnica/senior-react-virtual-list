import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <Typography variant="h5">Loading...</Typography>;
  }
  if (status === "authenticated") {
    router.push("/home");
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Head>
          <title>Senior React Virtual List</title>
        </Head>
        <Box width={"max-content"} mx={"auto"} mt={5}>
          <Typography variant="h1">Senior React Virtual List</Typography>
          <Button
            variant="contained"
            color={"primary"}
            onClick={() => signIn()}
          >
            Sign in with Google
          </Button>
        </Box>
      </>
    );
  }
}
