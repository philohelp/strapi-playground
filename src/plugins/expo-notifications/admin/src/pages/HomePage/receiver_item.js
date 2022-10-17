import React from "react";
import { Box } from "@strapi/design-system/Box";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { Typography } from "@strapi/design-system/Typography";

export default function ReceiverItem({ item, tokens, removeToken, addToken }) {
  const { username, expoPushToken } = item;
  const isIn = () => tokens.includes(expoPushToken);
  const manageChange = () => {
    if (isIn()) {
      removeToken(expoPushToken);
    } else {
      addToken(expoPushToken);
    }
  };
  return (
    <Box paddingBottom={2}>
      <div style={{ display: "flex" }}>
        <BaseCheckbox
          aria-label="Simple checkbox"
          name="default"
          onValueChange={manageChange}
          value={isIn() ? true : false}
        />
        <div style={{ marginLeft: 6 }}>
          <div style={{ fontWeight: isIn() ? "700" : "400" }}>
            <Typography variant="omega">{username}</Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
