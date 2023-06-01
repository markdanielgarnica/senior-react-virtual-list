import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const NavigatationBarContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: 20,
  justifyContent: "center",
});
function NavBar() {
  const { pathname } = useRouter();
  const theme = useTheme();
  const navigation = [
    {
      id: 1,
      name: "Home",
      href: "/home",
      isActive: pathname === "/home",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
      isActive: pathname === "/about",
    },
    {
      id: 3,
      name: "List",
      href: "/list",
      isActive: pathname === "/list",
    },
  ];

  return (
    <NavigatationBarContainer>
      {navigation.map(({ id, name, href, isActive }) => {
        return (
          <Link
            key={id}
            href={href}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: `${isActive ? "bold" : "normal"}`,
              borderBottom: `${
                isActive ? `3px solid ${theme.palette.primary.main}` : "none"
              }`,
            }}
          >
            {name}
          </Link>
        );
      })}
    </NavigatationBarContainer>
  );
}

export default NavBar;
