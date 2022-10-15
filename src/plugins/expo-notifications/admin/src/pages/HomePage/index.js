import React, { useState } from "react";
import pluginId from "../../pluginId";
import { Icon } from "@strapi/design-system/Icon";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Layout,
  BaseHeaderLayout,
  HeaderLayout,
  TwoColsLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";

import Left from "./left";
import Right from "./right";

import fakeNotifications from "./fake_data.json";
import receivers from "./fake_receivers.json";

const Pencil = () => (
  <Icon
    width={`${25 / 16}rem`}
    height={`${25 / 16}rem`}
    color="secondary500"
    as={Pencil}
  />
);

const HomePage = () => {
  const [tokens, setTokens] = useState([]);
  const [testMode, setTestMode] = useState(false);
  const [notifications, setNotifications] = useState(fakeNotifications);

  const addToken = (token) => {
    setTokens([...tokens, token]);
  };
  const removeToken = (token) => {
    setTokens(tokens.filter((item) => item !== token));
  };
  const addAll = () => {
    setTokens(receivers.map((item) => item.exponentToken));
  };
  const removeAll = () => {
    setTokens([]);
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Ce champ est requis"),
    }),
    onSubmit: async (values) => {
      console.log("values", values, "testMode", testMode);
      if (!testMode) {
        const newNotification = {
          ...values,
          date: new Date().toLocaleString(),
          id: notifications.length,
        };
        setNotifications([...notifications, newNotification]);
        resetForm();
      }
    },
  });
  const resetForm = () => {
    formik.handleReset();
    setTokens([]);
  };
  const sendTest = (e) => {
    e.preventDefault();
    setTestMode(true);
    formik.handleSubmit();
  };
  const sendForReal = async (e) => {
    e.preventDefault();
    setTestMode(false);
    formik.handleSubmit();
  };
  return (
    <div>
      <BaseHeaderLayout
        title="Expo notifications"
        subtitle={`${notifications.length} notifications trouvées`}
        as="h2"
      />
      <ContentLayout>
        <TwoColsLayout
          startCol={
            <Left
              notifications={notifications}
              formik={formik}
              sendTest={sendTest}
              sendForReal={sendForReal}
            />
          }
          endCol={
            <Right
              receivers={receivers}
              tokens={tokens}
              addToken={addToken}
              removeToken={removeToken}
              addAll={addAll}
              removeAll={removeAll}
            />
          }
        />
      </ContentLayout>
    </div>
  );
};

export default HomePage;

// onSubmit: async (values) => {
//   console.log("values", values);
//   const innerValbj = {
//     name: values.name,
//     title: values.title,
//     description: values.description,
//     users_permissions_user: userId,
//     appels_a_proposition: appelId,
//   };
//   const stringified = JSON.stringify(innerValbj);
//   const data = new FormData();
//   for (let i = 0; i < values.document.length; i++) {
//     data.append("files.document", values.document[i]);
//   }
//   data.append("data", stringified);

//   setMessage("En cours");
//   setTitle("Votre document est en cours d'envoi");
//   setSubmitting(true);
//   setStatus("pending");

//   const request = await fetch(
//     "https://cpnefav-strapi-2-production.up.railway.app/api/reponses",
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: data,
//     }
//   );
//   const response = await request.json();
//   console.log("response", response);
//   if (!response.error || _.isEmpty(response.error)) {
//     setTitle("Votre réponse est envoyée");
//     setMessage("Succès");
//     setStatus("success");
//   }
//   if (response.error && !_.isEmpty(response.error)) {
//     console.log("Erreur dans l'envoi", response.error);
//     setTitle("Il s'est produit une erreur");
//     setMessage("Erreur");
//     setStatus("error");

//     setTimeout(() => {
//       setSubmitting(false);
//     }, 4000);
//   }
// },
