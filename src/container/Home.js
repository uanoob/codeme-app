import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div className="">
      <Link to="/login" className="">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>

      <Link to="/register" className="">
        <Button variant="contained" color="primary">
          Register
        </Button>
      </Link>
    </div>
  );
};

export default Home;
