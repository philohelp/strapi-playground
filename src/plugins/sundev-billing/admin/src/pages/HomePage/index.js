import React, { useState, useEffect } from "react";
// import pluginId from "../../pluginId";
import stripeSundevRequests from "../../api";

import {
  BaseHeaderLayout,
  GridLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";

import { Box } from "@strapi/design-system/Box";

import MyInfos from "./my_infos";
import MyInvoices from "./my_invoices";

const HomePage = () => {
  const [infos, setInfos] = useState(null);
  const [invoices, setInvoices] = useState([]);
  useEffect(async () => {
    try {
      const invoices = await stripeSundevRequests.getInvoices();
      const customer = await stripeSundevRequests.getCustomer();
      // console.log("invoices", invoices, "customer", customer);
      buildInfosObject(customer);
      setInvoices(invoices.data);
    } catch (err) {
      console.log("err from sundev-billing page", err);
    }
  }, []);
  function buildInfosObject(infos) {
    const newInfos = {
      email: infos.email,
      name: infos.name,
      phone: infos.phone,
      line1: infos.address.line1,
      line2: infos.address.line2,
      postal_code: infos.address.postal_code,
      city: infos.address.city,
      country: infos.address.country,
    };
    console.log("newInfos", newInfos);
    setInfos(newInfos);
  }
  return (
    <div>
      <BaseHeaderLayout
        title="Sur un nuage"
        subtitle="Retrouvez ici les informations concernant votre compte"
        as="h2"
        style={{ color: "#396c87" }}
      />
      <ContentLayout>
        <GridLayout>
          <Box
            style={{ backgroundColor: "#fff", boxShadow: "5px 5px 5px #ccc" }}
          >
            <MyInfos infos={infos} />
          </Box>
          <Box>
            <MyInvoices invoices={invoices} />
          </Box>
        </GridLayout>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
