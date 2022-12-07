import React from "react";

import IssueItem from "./issueItem";

import { Box, Typography, Icon } from "@strapi/design-system";

export default function Column({ items, name, icon }) {
  return (
    <div>
      <Box
        padding={4}
        background="neutral0"
        shadow="filterShadow"
        style={{ display: "flex" }}
      >
        <Icon
          width={`1.2rem`}
          height={`1.2rem`}
          color="primary500"
          as={icon}
          style={{ marginRight: 8 }}
        />
        <Typography variant="delta">{name}</Typography>
      </Box>
      <div style={{ marginTop: 12 }}>
        {items.map((item) => (
          <div key={item.id}>
            <IssueItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
