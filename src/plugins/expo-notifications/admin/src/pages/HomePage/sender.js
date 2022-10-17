import React from "react";
import _ from "lodash";

import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";
import { Button } from "@strapi/design-system/Button";
import { Stack } from "@strapi/design-system/Stack";

import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
} from "@strapi/design-system/Field";

export default function Sender({ formik, sendTest, sendForReal }) {
  return (
    <div style={{ height: 280 }}>
      <Box padding={4}>
        <Box paddingTop={2} paddingBottom={4}>
          <Typography variant="beta">Send a new notification</Typography>
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
              marginTop: 24,
              marginBottom: 14,
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
      </Box>
    </div>
  );
}
