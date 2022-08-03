import { Typography } from "@material-ui/core";
import { ReactNode } from "react";
import Link from "@material-ui/core/Link";

const Copyright = (): any => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;