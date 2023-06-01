import { Button, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { signOut } from "next-auth/react";

function User({ name }: any) {
  return (
    <Box gap={2} position={"absolute"}>
      <Typography variant="h6">Welcome! {name}</Typography>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </Box>
  );
}

export default User;
