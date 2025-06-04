import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const SocialLinks = ({ isLarge }: { isLarge: boolean }) => (
  <Stack
    direction="row"
    sx={{ justifyContent: !isLarge ? "center" : "flex-start", width: "100%" }}
  >
    <IconButton
      disableRipple
      aria-label="GitHub"
      href="https://github.com/x1-labs"
      target="_blank"
      sx={{ paddingInlineStart: 0 }}
    >
      <Image src="/icons/github.png" alt="GitHub" width={24} height={24} />
    </IconButton>
    <IconButton
      disableRipple
      aria-label="X"
      href="https://x.com/x1_chain"
      target="_blank"
    >
      <Image src="/icons/x.png" alt="X" width={24} height={24} />
    </IconButton>
  </Stack>
);

export default SocialLinks;
