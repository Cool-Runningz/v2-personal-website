import React from "react";

import SEO from "../components/seo";
import Image404 from "../images/404-image.svg";

function NotFoundPage() {
  return (
    <div>
      <SEO title="404: Not found" />
      <div className="flex flex-col">
        <img src={Image404} className="block mx-auto w-1/2" alt="404 Image" />
        <h2 className="text-center text-2xl font-bold inline-block my-8 p-3">
          404 Page Not Found
        </h2>
      </div>
    </div>
  );
}

export default NotFoundPage;
