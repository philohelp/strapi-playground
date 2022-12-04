import React, { useEffect, useState } from "react";
import myRequests from "../../api";

import { Typography } from "@strapi/design-system/Typography";
import { Box } from "@strapi/design-system/Box";

export default function ProductWithData({ subscriptionId }) {
  const [items, setItems] = useState();
  useEffect(() => {
    myRequests.getSubscriptionItems(subscriptionId).then((res) => {
      //   console.log("subscription items", res);
      setItems(res.data);
    });
  }, []);
  return (
    <Box
      style={{
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingLeft: 24,
        paddingBottom: 20,
      }}
    >
      {items &&
        items.map((item) => {
          return (
            <div key={item.id} style={{ display: "flex" }}>
              <img
                src={item.price.product.images[0]}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  marginTop: -2,
                }}
              />
              <Typography
                variant="pi"
                textColor={"primary700"}
                style={{ fontWeight: "500" }}
              >
                {item.price.product.name}{" "}
                <Typography
                  variant="pi"
                  textColor={"neutral600"}
                  style={{ fontWeight: "500" }}
                >
                  - {item.price.product.description} -{" "}
                  {item.price.unit_amount / 100}€{" "}
                </Typography>
              </Typography>
            </div>
          );
        })}
    </Box>
  );
}
