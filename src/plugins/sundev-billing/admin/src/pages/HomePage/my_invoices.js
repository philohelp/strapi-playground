import React from "react";
import { fromUnixTime } from "date-fns";

import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";

import Download from "@strapi/icons/Download";
import { Icon } from "@strapi/design-system/Icon";

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

export default function MyInvoices({ invoices }) {
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
