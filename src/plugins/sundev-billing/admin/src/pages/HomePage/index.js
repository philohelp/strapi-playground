import React, { useState, useEffect } from "react";
import pluginId from "../../pluginId";
import stripeSundevRequests from "../../api";

import {
  // Layout,
  BaseHeaderLayout,
  // HeaderLayout,
  TwoColsLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";

import MyInfos from "./my_infos";

function MyInvoices() {
  return <div>My invoices</div>;
}

const HomePage = () => {
  useEffect(async () => {
    const invoices = await stripeSundevRequests.getInvoices();
    const customer = await stripeSundevRequests.getCustomer();
    console.log("customer", customer);
  }, []);
  return (
    <div>
      <BaseHeaderLayout
        title="Sur un nuage"
        subtitle="Retrouvez ici les informations concernant votre compte"
        as="h2"
      />
      <ContentLayout>
        <TwoColsLayout startCol={<MyInfos />} endCol={<MyInvoices />} />
      </ContentLayout>
    </div>
  );
};

export default HomePage;
