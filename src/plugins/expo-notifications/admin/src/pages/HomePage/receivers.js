import React from "react";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";

import ReceiverItem from "./receiver_item";

export default function Recipients({
  recipients,
  recipientsCount,
  tokens,
  addToken,
  removeToken,
  removeAll,
  addAll,
}) {
  return (
    <div style={{ height: 280 }}>
      <Box padding={6}>
        <Box paddingBottom={6}>
          <Typography variant="beta">Choose</Typography>
          <br />
          <Typography variant="beta">the recipients</Typography>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
            color: "#4A45FF",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={() => addAll()}>
            <Typography variant="pi" textColor="#4A45FF">
              Select all
            </Typography>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => removeAll()}>
            <Typography variant="pi" textColor="#4A45FF">
              Unselect all
            </Typography>
          </div>
        </div>
        <div style={{ overflow: "scroll" }}>
          {recipients.map((item) => (
            <div key={item.id}>
              <ReceiverItem
                item={item}
                tokens={tokens}
                addToken={addToken}
                removeToken={removeToken}
              />
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
}
