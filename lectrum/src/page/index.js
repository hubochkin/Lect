import React from "react";
import { Page } from "../components/templates/page";
import { Button} from "@material-ui/core";
import { Link } from "react-router-dom";


function MainPage() {
  return (
    <Page>
     <Link to={`/signIn`} > 
     <Button>Sign In</Button>
     </Link>
    </Page>
  );
}

export default MainPage;
