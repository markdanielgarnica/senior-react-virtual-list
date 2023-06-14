import { useRouter } from "next/router";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import Head from "next/head";
import styled from "@emotion/styled";
const Text = styled(Typography)({
  fontSize: ".1rem",
});
export default function Home() {
  const router = useRouter();
  const { status } = useSession();
  const theme = useTheme();
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
          <Box
            width={"100%"}
            height={"3px"}
            marginY={2}
            bgcolor={theme.palette.primary.main}
          ></Box>
          <Box>
            <Typography variant="h3">Summary</Typography>
            <Box display={"flex"} flexDirection={"row"} gap={2}>
              <Box
                bgcolor={"#fff"}
                width={"max-content"}
                p={2}
                marginTop={1}
                borderTop={`2px solid ${theme.palette.primary.main}`}
              >
                <Typography variant="h5" fontWeight={"bold"}>
                  Pages:
                </Typography>
                <Box marginLeft={1}>
                  <Typography variant="h6">/</Typography>
                  <Typography variant="h6">/home</Typography>
                  <Typography variant="h6">/about</Typography>
                  <Typography variant="h6">/list</Typography>
                  <Text variant="h6">/list</Text>
                </Box>
              </Box>

              <Box
                bgcolor={"#fff"}
                width={"max-content"}
                p={2}
                marginTop={1}
                borderTop={`2px solid ${theme.palette.primary.main}`}
              >
                <Typography variant="h5" fontWeight={"bold"}>
                  Built with:
                </Typography>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography variant="h6">Next.js</Typography>
                  <Typography variant="h6">NextAuth.js</Typography>
                  <Typography variant="h6">ReactRedux</Typography>
                  <Typography variant="h6">TypeScript</Typography>
                  <Typography variant="h6">Material UI</Typography>
                  <Typography variant="h6">Styled component</Typography>
                  <Typography variant="h6">React window</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}
