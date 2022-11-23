import React from "react";

import { Box } from "@strapi/design-system/Box";
import { useFormik } from "formik";
import * as Yup from "yup";

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

export default function MyInfos() {
  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Ce champ est requis"),
    }),
    onSubmit: async (values) => {
      console.log("values", values, "testMode", testMode, "tokens", tokens);
      //   if (!testMode && tokens.length !== 0) {
      //     await notificationsRequests
      //       .createNotification(values, tokens)
      //       .then((res) => {
      //         console.log(res);
      //         refreshNotificationsState();
      //         resetForm();
      //       });
      //   } else {
      //     console.log("no recipients");
      //   }
    },
  });
  return (
    <div>
      <Box padding={4}>
        <Box paddingTop={2} paddingBottom={4}>
          <Typography variant="beta">Mes infos</Typography>
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
            <Button
              variant="secondary"
              type="submit"
              onClick={console.log("clicked")}
            >
              Send a test
            </Button>
            <div style={{ marginLeft: 8 }}>
              <Button type="submit" onClick={console.log("clicked")}>
                Send
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
}
