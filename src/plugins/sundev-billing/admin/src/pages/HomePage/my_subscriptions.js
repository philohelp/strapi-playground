import React, { useState, useEffect } from "react";
import myRequests from "../../api";

import { fromUnixTime } from "date-fns";

import { Box } from "@strapi/design-system/Box";
import { Loader } from "@strapi/design-system/Loader";

import { Typography } from "@strapi/design-system/Typography";
import EmptyPage from "./empty_page";
import NoElement from "./no_element";
import ProductsList from "./products";

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

function getInterval(interval) {
  if (interval === "month") return "mois";
  if (interval === "year") return "an";
  return "jour";
}

function MySubscriptions({ subscriptions }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);
  if (!subscriptions || (subscriptions && subscriptions.length === 0))
    return null;
  console.log("subscriptions", subscriptions);
  return (
    <div>
      <div style={{ marginTop: 12 }}>
        {subscriptions.map((item, index) => (
          <div key={item.id}>
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
                  Abonnement souscrit le
                  <Typography variant="pi" textColor={"primary500"}>
                    {" "}
                    {getDate(item.start_date)}
                  </Typography>
                </Typography>
                <br />
                <Typography
                  variant="pi"
                  textColor={"primary500"}
                  style={{ fontWeight: "700" }}
                >
                  {item.plan.amount / 100}€HT /{" "}
                  {getInterval(item.plan.interval)}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="pi"
                  style={{ fontWeight: "300", cursor: "pointer" }}
                  onClick={toggle}
                >
                  {isExpanded
                    ? "Masquer les produits △"
                    : "Voir les produits ▽"}
                </Typography>
              </div>
            </Box>
            {isExpanded && (
              <div>
                <ProductsList subscriptionId={item.id} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SubscriptionsWithData() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function fetchSubscriptions() {
    try {
      const subscriptions = await myRequests.getSubscriptions();
      if (subscriptions.error) {
        setIsError(true);
        throw new Error("Error retrieving subscriptions from Stripe");
      } else {
        console.log("subscriptions", subscriptions);
        setIsError(false);
        setSubscriptions(subscriptions.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.log(err);
    }
  }
  useEffect(async () => {
    await fetchSubscriptions();
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
  if (!subscriptions || (subscriptions && subscriptions.length === 0)) {
    return <NoElement type="subscription" />;
  }
  // return null;
  return <MySubscriptions subscriptions={subscriptions} />;
}

function SubscriptionLayout() {
  return (
    <div>
      <Box padding={4}>
        <Box paddingTop={2} paddingBottom={4} paddingLeft={4} paddingRight={4}>
          <Typography variant="beta" style={{ color: "#396c87" }}>
            Mes abonnements en cours
          </Typography>
          <SubscriptionsWithData />
        </Box>
      </Box>
    </div>
  );
}

export default SubscriptionLayout;
