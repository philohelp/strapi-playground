import React, { useState, useEffect } from "react";

import myRequests from "../../api";

import pluginId from "../../pluginId";

const HomePage = () => {
  useEffect(async () => {
    const issues = await myRequests.getIssues();
    console.log("issues", issues);
  }, []);
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
    </div>
  );
};

export default HomePage;
