import React from "react";
import PDFThumbnail from "../UI/PDFThumbnail";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function ResposiveResume() {
  return (
    <Container>
      <Card sx={{ maxWidth: "70%", height: "100vh", marginTop: 2 }} raised>
        <CardContent sx={{ height: "100%" }}>
          <iframe
            loading="lazy"
            width={"100%"}
            height={"100%"}
            src="/Shahid's MERN.pdf"
          />
        </CardContent>
      </Card>
    </Container>
  );
}

export default ResposiveResume;
