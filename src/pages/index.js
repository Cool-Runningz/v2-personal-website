import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Alyssa Holland Website"
        keywords={[`Alyssa`, `Holland`, `Alyssa Holland`]}
      />
    </Layout>
  );
}

export default IndexPage;
