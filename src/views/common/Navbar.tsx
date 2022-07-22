import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { ThemeToggleSwitch } from "src/components/ThemeToggleSwitch";
import { ManekikiLogo, NextJSIcon } from "src/svgs";

import type { BoxProps } from "@mui/material";

import type { FC } from "react";
import { PrimaryGradientButton } from "src/components/Button";

const Wrapper = styled(Box, {
  shouldForwardProp: (props: string) => props !== "isScrollTriggered",
})<{ isScrollTriggered: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme, isScrollTriggered }) =>
    isScrollTriggered ? theme.shadows[5] : "none"};
  background-color: ${({ theme, isScrollTriggered }) =>
    isScrollTriggered ? theme.palette.background.default : "transparent"};
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  transition: background-color 200ms;
`;

type Props = {
  sx?: BoxProps["sx"];
};

export const Navbar: FC<Props> = (props) => {
  const theme = useTheme();
  const isScrollTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });
  return (
    <Wrapper sx={{ ...props.sx }} isScrollTriggered={isScrollTriggered}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          padding: "22px 160px",
          gridTemplateColumns: "calc(120px - 0.5rem) 1fr",
          columnGap: "1rem",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <Link href="/" passHref>
          <Box
            component="a"
            color={theme.palette.mode === "light" ? "black" : "white"}
            px={1.5}
          >
            <ManekikiLogo />
          </Box>
        </Link>
        <Box display="flex" justifyContent="flex-end" pr={1} width="100%">
          <Stack direction="row" spacing={3}>
            <PrimaryGradientButton>Launch App</PrimaryGradientButton>
          </Stack>
        </Box>
      </Box>
    </Wrapper>
  );
};
