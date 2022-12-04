import React, { useState } from "react";
import myRequests from "../../api";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Field, FieldLabel, FieldInput } from "@strapi/design-system/Field";

import { Box } from "@strapi/design-system/Box";
import { Typography } from "@strapi/design-system/Typography";
import { Button } from "@strapi/design-system/Button";
import { Stack } from "@strapi/design-system/Stack";
import Feedback from "./feedback";

export default function MyInfos({ infos }) {
  const [feedbackActivated, setFeedbackActivated] = useState("hide");
  if (!infos) return null;
  const formik = useFormik({
    initialValues: {
      email: infos ? infos.email : "",
      name: infos ? infos.name : "",
      phone: infos ? infos.phone : "",
      line1: infos ? infos.line1 : "",
      line2: infos ? infos.line2 : "",
      postal_code: infos ? infos.postal_code : "",
      city: infos ? infos.city : "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ce champ est requis"),
      email: Yup.string().required("Ce champ est requis"),
    }),
    onSubmit: async (values) => {
      // console.log("values", values);
      const updatedCustomer = {
        email: values.email,
        name: values.name,
        phone: values.phone,
        address: {
          line1: values.line1,
          line2: values.line2,
          postal_code: values.postal_code,
          city: values.city,
        },
      };
      await myRequests.updateCustomer(updatedCustomer).then((res) => {
        // console.log(res);
        if (!res) {
          return;
        } else if (res && res.id) {
          setFeedbackActivated("success");
        }
      });
    },
  });
  return (
    <div>
      <Box
        padding={4}
        style={{ backgroundColor: "#fff", boxShadow: "5px 5px 5px #ccc" }}
      >
        <Box paddingTop={2} paddingBottom={6}>
          <Typography variant="beta" style={{ color: "#396c87" }}>
            Mes informations de facturation
          </Typography>
        </Box>
        <form>
          <Stack spacing={4}>
            <Field name="name">
              <FieldLabel>Nom de la société</FieldLabel>
              <FieldInput
                type="text"
                placeholder="Le nom de la société"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </Field>
            <Field name="email">
              <FieldLabel>Email de contact</FieldLabel>
              <FieldInput
                type="text"
                placeholder="L'email du contact de facturation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </Field>
            <Field name="line1">
              <FieldLabel>Adresse (1)</FieldLabel>
              <FieldInput
                type="text"
                placeholder="Adresse postale"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.line1}
              />
            </Field>
            <Field name="line2">
              <FieldLabel>Adresse (2)</FieldLabel>
              <FieldInput
                type="text"
                placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.line2}
              />
            </Field>
            <Field name="postal_code">
              <FieldLabel>Code Postal</FieldLabel>
              <FieldInput
                type="text"
                placeholder="Code postal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.postal_code}
              />
            </Field>
            <Field name="city">
              <FieldLabel>Ville</FieldLabel>
              <FieldInput
                type="text"
                placeholder="Ville"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
            </Field>
            <Field name="phone">
              <FieldLabel>Téléphone</FieldLabel>
              <FieldInput
                type="text"
                placeholder="Téléphone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
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
            <div style={{ marginLeft: 8, marginTop: 20, display: "flex" }}>
              <Feedback
                feedbackActivated={feedbackActivated}
                setFeedbackActivated={setFeedbackActivated}
              />
              <Button type="submit" onClick={formik.handleSubmit}>
                Enregistrer
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
}
