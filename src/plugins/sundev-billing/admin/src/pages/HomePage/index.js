import React, { useState, useEffect } from "react";
// import pluginId from "../../pluginId";
import myRequests from "../../api";

import { Loader } from "@strapi/design-system/Loader";
import {
  BaseHeaderLayout,
  GridLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";
import { Box } from "@strapi/design-system/Box";

import MyInfos from "./my_infos";
import MyInvoices from "./my_invoices";
import MySubscriptions from "./my_subscriptions";

import EmptyPage from "./empty_page";

import Ailes from "../../components/PluginIcon/ailes";

import { buildInfosObject } from "../../utils/functions";

function HomePage({ infos, fetchCustomerInfos }) {
  return (
    <ContentLayout>
      <GridLayout>
        <Box>
          <MyInfos infos={infos} fetchCustomerInfos={fetchCustomerInfos} />
        </Box>
        <Box>
          <MySubscriptions />
          <MyInvoices />
        </Box>
      </GridLayout>
    </ContentLayout>
  );
}

function HomePageWithData() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [infos, setInfos] = useState(null);
  async function fetchCustomerInfos() {
    try {
      const customer = await myRequests.getCustomer();
      if (customer.error) {
        throw new Error("Error retrieving customer from Stripe");
      } else {
        // console.log("customer infos", customer);
        const flattenInfos = buildInfosObject(customer);
        setInfos(flattenInfos);
        setIsLoading(false);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log(err);
    }
  }
  useEffect(async () => {
    await fetchCustomerInfos();
  }, []);
  if (isLoading) {
    return (
      <Box
        style={{ display: "flex", justifyContent: "center" }}
        padding={8}
        background="neutral100"
      >
        <Loader>
          <div>Loading content...</div>
        </Loader>
      </Box>
    );
  }
  if (isError) {
    return <EmptyPage />;
  }
  return <HomePage infos={infos} fetchCustomerInfos={fetchCustomerInfos} />;
}

function HomePageLayout() {
  const [companyInfos, setCompanyInfos] = useState({});
  useEffect(async () => {
    const infos = await myRequests.getCompanyInfos();
    // console.log("companyInfos", infos);
    setCompanyInfos(infos);
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BaseHeaderLayout
          title={companyInfos.title || ""}
          subtitle={companyInfos.subtitle || ""}
          as="h2"
          style={{ color: "#396c87" }}
        />
        <div style={{ width: 100, marginTop: 20, marginRight: 100 }}>
          <Ailes color="red" />
        </div>
      </div>

      <HomePageWithData />
    </div>
  );
}

export default HomePageLayout;
