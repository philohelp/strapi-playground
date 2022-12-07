import React from "react";

import { Box, Typography, Icon } from "@strapi/design-system";
import ExternalLink from "@strapi/icons/ExternalLink";

function getBorderColor(item) {
  switch (item.priority) {
    case 1:
      return "success200";
    case 2:
      return "primary200";
    case 3:
      return "danger200";
    default:
      return "neutral200";
  }
}

export default function IssueItem({ item }) {
  return (
    <Box
      style={{ marginTop: 8 }}
      paddingTop={4}
      background={getBorderColor(item)}
      shadow="filterShadow"
      hasRadius
      borderColor={getBorderColor(item)}
    >
      <div style={{ backgroundColor: "white", padding: 12 }}>
        <Typography variant="omega">{item.title}</Typography>
      </div>
      <Box background="neutral100" style={{ padding: 4, paddingLeft: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="pi" style={{ color: "grey" }}>
            {item.type}
          </Typography>
          <Icon
            width={`0.6rem`}
            height={`0.6rem`}
            color="primary500"
            as={ExternalLink}
            style={{ margin: 4, opacity: 0.8 }}
          />
        </div>
      </Box>
    </Box>
  );
}
