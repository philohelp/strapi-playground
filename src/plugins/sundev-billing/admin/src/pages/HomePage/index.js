import { useState, useEffect } from "react";

import React from "react";
import pluginId from "../../pluginId";
import stripeSundevRequests from "../../api";

const HomePage = () => {
  useEffect(async () => {
    const invoices = await stripeSundevRequests.getInvoices();
    console.log("invoices", invoices);
  }, []);
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
    </div>
  );
};

export default HomePage;
