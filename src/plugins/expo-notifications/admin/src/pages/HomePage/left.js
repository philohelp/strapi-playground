import React from "react";

import { Box } from "@strapi/design-system/Box";
import { Illo } from "../../components/Illo";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
} from "@strapi/design-system/Field";
import { Typography } from "@strapi/design-system/Typography";
import { Button } from "@strapi/design-system/Button";
import { Stack } from "@strapi/design-system/Stack";
import { Divider } from "@strapi/design-system/Divider";

import NotificationItem from "./notification_item";

export default function Left({ notifications, formik, sendTest, sendForReal }) {
  return (
    <Box padding={4}>
      <Box paddingTop={2} paddingBottom={4}>
        <Typography variant="beta">Créer une notification</Typography>
      </Box>
      <form>
        <Stack spacing={4}>
          <Field name="title">
            <FieldLabel>Titre</FieldLabel>
            <FieldInput
              type="text"
              placeholder="Choisissez un titre pour votre notification"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </Field>
          <Field name="subtitle">
            <FieldLabel>Sous-titre</FieldLabel>
            <FieldInput
              type="text"
              placeholder="Choisissez un sous-titre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subtitle}
            />
          </Field>
        </Stack>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 12,
            marginBottom: 24,
          }}
        >
          <Button variant="secondary" type="submit" onClick={sendTest}>
            Envoyer un test
          </Button>
          <div style={{ marginLeft: 8 }}>
            <Button type="submit" onClick={sendForReal}>
              Envoyer
            </Button>
          </div>
        </div>
      </form>
      <Divider />
      <Box paddingTop={6} paddingBottom={6}>
        <Typography variant="beta">Notifications envoyées</Typography>
        {notifications.length > 0 ? (
          <Box paddingTop={6}>
            {notifications.map((item) => (
              <div key={item.id}>
                <NotificationItem item={item} />
              </div>
            ))}
          </Box>
        ) : (
          <EmptyStateLayout
            shadow={null}
            icon={<Illo />}
            content="Vous n'avez pas encore envoyé de notifications..."
          />
        )}
      </Box>
    </Box>
  );
}

//   <Box padding={4}>
//     <Typography>Hello world</Typography>
//   </Box>;
