import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

export default function ResposiveHeading(props) {
  return (
    <Container
      sx={{
        // height:"4rem",
        marginTop: "1rem",
        // backgroundColor: "primary.main",
        // color: "white",
      }}
    >
    <Paper>
      <h1>{props.title}</h1>
    </Paper>
    </Container>
  );
}
