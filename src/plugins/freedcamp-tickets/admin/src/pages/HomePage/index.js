import React, { useState, useEffect } from "react";

import myRequests from "../../api";

import pluginId from "../../pluginId";

const newIssue = {
  title: "Voici un test n°569",
  description: "Super, ça marche toujours au poil",
  priority: 2,
  status: 0,
  type: "Bug",
  assigned_to_id: "0",
};

const HomePage = () => {
  useEffect(async () => {
    const issues = await myRequests.getIssues();
    console.log("issues", issues);
  }, []);
  const handlePostIssue = async () => {
    const myNewIssue = await myRequests.createIssue(newIssue);
    console.log("myNewIssue", myNewIssue);
  };
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <button onClick={handlePostIssue}>Post issue</button>
    </div>
  );
};

export default HomePage;
