import React from "react";
import Helmet from "react-helmet";

const PageTittle = ({ tittle }) => {
  return (
    <Helmet>
      <title>{tittle}</title>
    </Helmet>
  );
};

export default PageTittle;
