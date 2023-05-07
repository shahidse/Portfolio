import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ImgMediaCard from "../UI/ReposiveCard";
import { Container } from "@mui/material";

export default function ResponsiveStack() {
  return (
    <Container>
      <Stack
        direction={{ xs: "column",sm:'row',}}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
        // alignItems='center'
        flexWrap={"wrap"}
        gap={2}
        marginTop={2}
      >
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Stack>
    </Container>
  );
}
