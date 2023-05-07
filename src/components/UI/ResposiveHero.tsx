import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { inherits } from "util";
function ResposiveHero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: ["11rem", "13rem", "15rem"],
        backgroundColor: "primary.dark",

        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
        position: "relative",
        // overflow: "hidden"
        backgroundImage:
          'url("https://images.pexels.com/photos/16208831/pexels-photo-16208831.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load")',
        backgroundRepeat: "no-repeat",
        // backgroundSize:[['11rem','13rem', '15rem'],['100%','100%','100%']]
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* <Image
        fill
        alt="my image"
        src={
          "https://images.pexels.com/photos/16208831/pexels-photo-16208831.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
      /> */}
    </Box>
  );
}

export default ResposiveHero;
