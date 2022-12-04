import React from "react";

import { Box } from "@strapi/design-system/Box";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/illo";

function getSentence(type) {
  switch (type) {
    case "invoice":
      return "Aucune facture n'a été émise.";
    case "subscription":
      return "Aucun abonnement n'a été souscrit.";
    default:
      return "Aucun élément n'a été trouvé.";
  }
}

export default function NoInvoice({ type = "none" }) {
  return (
    <Box padding={8}>
      <EmptyStateLayout
        shadow={null}
        icon={<Illo />}
        content={getSentence(type)}
      />
    </Box>
  );
}
