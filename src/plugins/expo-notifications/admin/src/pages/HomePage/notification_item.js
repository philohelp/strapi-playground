import React from "react";

import { Typography } from "@strapi/design-system/Typography";
import { Box } from "@strapi/design-system/Box";

export default function NotificationItem({ item }) {
  const { title, subtitle, date } = item;
  return (
    <Box paddingBottom={4}>
      <Typography variant="pi">{date}</Typography>
      <br />
      <Typography variant="epsilon">{title}</Typography>
      <br />
      <div style={{ color: "#B1B1C3" }}>
        <Typography variant="omega" textColor="textColor">
          {subtitle}
        </Typography>
      </div>
    </Box>
  );
}
