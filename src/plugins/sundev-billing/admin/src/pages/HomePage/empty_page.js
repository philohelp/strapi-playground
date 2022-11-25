import React from "react";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/illo";
import { Box } from "@strapi/design-system/Box";

export default function EmptyPage() {
  return (
    <Box
      padding={8}
      background="neutral100"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box style={{ maxWidth: 500 }} padding={12}>
        <EmptyStateLayout
          shadow={null}
          icon={<Illo />}
          content="Votre page ne semble pas bien configurée. Vous devriez prendre contact avec votre administrateur."
        />
      </Box>
    </Box>
  );
}
