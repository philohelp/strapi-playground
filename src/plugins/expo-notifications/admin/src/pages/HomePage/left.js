import React from "react";
import _ from "lodash";

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
import PaginationURLQuery from "../../components/paginationURLQuery";

function getCurrentPageFromCount(count, pageSize) {
  const rawCount = count - 1;
  const currentPage = parseInt(rawCount / pageSize) + 1;
  return currentPage;
}

export default function Left({
  notifications,
  formik,
  sendTest,
  sendForReal,
  count,
}) {
  const currentPage = getCurrentPageFromCount(count, 10);
  console.log("currentPage", currentPage);
  const sortedNotifs = _.orderBy(notifications, ["createdAt"], ["desc"]);
  return (
    <Box padding={4}>
      <Box paddingTop={2} paddingBottom={4}>
        <Typography variant="beta">Create a notification</Typography>
      </Box>
      <form>
        <Stack spacing={4}>
          <Field name="title">
            <FieldLabel>Title</FieldLabel>
            <FieldInput
              type="text"
              placeholder="Choisissez un titre pour votre notification"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </Field>
          <Field name="subtitle">
            <FieldLabel>Subtitle</FieldLabel>
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
            Send a test
          </Button>
          <div style={{ marginLeft: 8 }}>
            <Button type="submit" onClick={sendForReal}>
              Send
            </Button>
          </div>
        </div>
      </form>
      <Box paddingTop={6} paddingBottom={6}>
        <Typography variant="beta">Sent notifications</Typography>
        <Divider unsetMargin={false} />
        {notifications.length > 0 ? (
          <div>
            {sortedNotifs.map((item) => (
              <div key={item.id}>
                <Box paddingTop={3} paddingBottom={3}>
                  <NotificationItem item={item} />
                  <Divider />
                </Box>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PaginationURLQuery pagination={{ pageCount: currentPage }} />
            </div>
          </div>
        ) : (
          <EmptyStateLayout
            shadow={null}
            icon={<Illo />}
            content="You haven't sent any notification yet..."
          />
        )}
      </Box>
    </Box>
  );
}

//   <Box padding={4}>
//     <Typography>Hello world</Typography>
//   </Box>;
