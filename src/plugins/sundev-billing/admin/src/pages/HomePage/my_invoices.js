import React, { useState, useEffect } from "react";
import stripeSundevRequests from "../../api";

import { fromUnixTime } from "date-fns";

import { Box } from "@strapi/design-system/Box";
import { Loader } from "@strapi/design-system/Loader";

import { Typography } from "@strapi/design-system/Typography";
import Download from "@strapi/icons/Download";
import { Icon } from "@strapi/design-system/Icon";
import EmptyPage from "./empty_page";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getDate(date) {
  let myDate = fromUnixTime(date);
  const dateFr = new Date(myDate).toLocaleDateString("fr-FR", options);
  return dateFr;
}

function isEven(n) {
  return n % 2 == 0;
}

function MyInvoices({ invoices }) {
  if (!invoices || (invoices && invoices.length === 0)) return null;
  console.log("invoices", invoices);
  return (
    <div>
      <Box padding={4}>
        <Box paddingTop={2} paddingBottom={4} paddingLeft={4} paddingRight={4}>
          <Typography variant="beta" style={{ color: "#396c87" }}>
            Mes factures
          </Typography>
          <div style={{ marginTop: 12 }}>
            {invoices.map((item, index) => (
              <Box
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 12,
                }}
                background={isEven(index) ? "neutral0" : "primary100"}
              >
                <div>
                  <Typography variant="pi" style={{ fontWeight: "600" }}>
                    Facture {item.number}
                  </Typography>
                  <br />
                  <Typography variant="pi" style={{ fontWeight: "600" }}>
                    du {getDate(item.created)}{" "}
                    <span>- {item.amount_due / 100}€HT</span>
                  </Typography>
                  <Typography
                    variant="pi"
                    textColor={item.paid ? "success500" : "danger500"}
                  >
                    {item.paid ? " [payée]" : " [à payer]"}
                  </Typography>
                </div>
                <a href={item.invoice_pdf} download={true}>
                  <Icon
                    width={`0.8rem`}
                    height={`0.8rem`}
                    as={Download}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Box>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}

function InvoicesWithData() {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function fetchInvoices() {
    try {
      const invoices = await stripeSundevRequests.getInvoices();
      if (invoices.error) {
        throw new Error("Error retrieving invoices from Stripe");
      } else {
        setInvoices(invoices.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log(err);
    }
  }
  useEffect(async () => {
    await fetchInvoices();
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
  if (invoices && invoices.length === 0) {
    return <p>Va te faire abonner</p>;
  }
  return <MyInvoices invoices={invoices} />;
}

export default InvoicesWithData;
