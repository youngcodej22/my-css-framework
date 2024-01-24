import React from "react";
import Button from "../components/Button";

type Props = {};

const MyComponent = (props: Props) => {
  return (
    <>
      <Button variant="default" size="sm">
        Default
      </Button>
      <Button variant="contained" size="md">
        Contained
      </Button>
      <Button variant="outlined" size="lg">
        Outlined
      </Button>
    </>
  );
};

export default MyComponent;
