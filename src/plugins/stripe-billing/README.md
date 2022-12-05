# Strapi plugin stripe-billing

## Introduction

Stripe-billing is a Strapi plugin that allows a Stripe subscription customer to manage his billing infos, subscriptions and last invoices. Typical use case: you're a web agency or alike and you want your customers to be able to manage their maintenance subscription without leaving Strapi.

## Installation

Run any of the following commands inside your strapi directory to install the plugin:

```
npm i @surunnuage/stripe-billing

yarn add @surunnuage/stripe-billing
```

Then, to allow the plugin to appear in Strapi admin's panel:

```
npm run build

yarn build
```

## Usage

There are two mandatory variables to add: your Stripe secret apikey (you can find it here: https://dashboard.stripe.com/account/apikeys) and the Stripe customerId. The Stripe secret key should be added to an .env file (so it won't be commited to Github or another version control system) as the STRIPE_TOKEN. You can chose to do the same with the customerId as the STRIPE_CUSTOMER_ID.

```
STRIPE_TOKEN=sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_CUSTOMER_ID=cus_XXXXXXXXXXXXXXXXX
```

### Enable plugin configuration

Open the `config/plugins.js` file (or create it if it's not there) and add the stripe-billing entry with the customerId. The minimal plugin's config will look as follow:

```js
module.exports = ({ env }) => ({
  ...
  "stripe-billing": {
    enabled: true,
    config: {
      customerId: env("STRIPE_CUSTOMER_ID"),
    }
  },
  ...
});
```

### Additional configuration

Stripe-billing allows you to add your company's name, description and logo in order to custom brand the page. The plugin's config will then look as follow:

```js
module.exports = ({ env }) => ({
  ...
  "stripe-billing": {
    enabled: true,
    config: {
      customerId: env("STRIPE_CUSTOMER_ID"),
      companyName: "ACME",
      companyDescription: "All your ACME's subscriptions infos are there.",
      companyLogo: "https://acme.com/img/logo.png",
    }
  },
  ...
});
```

And that's it. Now your customers can access their billing infos without leaving their favorite CMS.
