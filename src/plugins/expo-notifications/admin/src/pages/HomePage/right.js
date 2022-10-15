import React from "react";
import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";

import ReceiverItem from "./receiver_item";

export default function Right({
  receivers,
  tokens,
  addToken,
  removeToken,
  removeAll,
  addAll,
}) {
  return (
    <Box padding={6}>
      <Box paddingBottom={6}>
        <Typography variant="beta">Choisissez</Typography>
        <br />
        <Typography variant="beta">les destinataires</Typography>
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
            Sélect. tout
          </Typography>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => removeAll()}>
          <Typography variant="pi" textColor="#4A45FF">
            Déselct. tout
          </Typography>
        </div>
      </div>
      {receivers.map((item) => (
        <div key={item.id}>
          <ReceiverItem
            item={item}
            tokens={tokens}
            addToken={addToken}
            removeToken={removeToken}
          />
        </div>
      ))}
    </Box>
  );
}
