# next-contentful-graphql

Setup for using next with Contentful's Graphql API and have code generation for the schema and the queries and stuff... with great typescript support.

## Before deploying

- Create a contentful space
- To fill up the env vars, you'll need
  - Access tokens: `https://app.contentful.com/{YOUR_SPACE}/84rr8cohdvyr/api/keys`
  - GraphQL endpoint: `https://graphql.contentful.com/content/v1/spaces/{YOUR_SPACE}/environments/master`
- That's it, click the button below and get started

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fbasementstudio%2Fnext-contentful-graphql&env=CMS_GRAPHQL_ENDPONT,CMS_ACCESS_TOKEN,CMS_PREVIEW_ACCESS_TOKEN,CMS_PREVIEW_SECRET)

## Important

This setup was tested with Contentful, so, with other CMS services it might not work. In Prismic, for example, due to their GraphQL API not supporting POST requests (super non-standard), this setup doesn't work.

But, GraphQL API implementations tend to be very similar, so maybe, if not using Contentful, it's also a good idea to start with this, and adapt it to your specific CMS API.

## Featured aspects of the stack

- Typescript
- NextJS
- graphql-request
- graphql-codegen

## To get started

- `yarn`
- Copy the contents of .env.example into `.env` (not `.env.local`, cause dotenv, which graphql-codegen needs, works with `.env` and I didn't kmow how to configure for `.env.local`)
- Run `yarn gql-codegen` to generate the schema
- Every time you change the schema of the cms, you should run the code-gen.

## Things to note

- It comes with Inter (it's better to host fonts here rather than getting them from google fonts). Remove it if you are not going to use it.
- Pages, components, etc... are located under `/src`. If you are changing this, be sure to also update `tsconfig.json`'s `baseUrl`.

---

If you find you need to make extra config to make this work better (such as some eslint rule, or some prettier change), feel free to submit a pr suggesting your changes. Our focus is for you to get up and running with the least steps and burden as possible.

---

Let's go 🚀
