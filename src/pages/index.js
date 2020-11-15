import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ogImage from "../images/logo-square.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        image={ogImage}
        title="Alyssa Holland"
        keywords={[`Alyssa`, `Holland`, `Alyssa Holland`]}
      />
    </Layout>
  );
}

export default IndexPage;
