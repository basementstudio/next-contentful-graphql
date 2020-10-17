# next-typescript

Setup for using next with a graphql cms and have code generation for the schema and the queries and stuff... with great typescript support.

## Featured aspects of the stack

- Typescript
- NextJS
- graphql-request
- graphql-codegen

## To get started

- `yarn`
- Copy the contents of .env.example into .env (not .env.local, cause dotenv, which graphql-codegen needs, works with .env and i didn't kmow how to configure for .env.local)
- Run `yarn gql-codegen` to generate the schema
- Every time you change the schema of the cms, you should run the code-gen. It also will run automatically on every commit.

## Things to note

- It comes with Inter (it's better to host fonts here rather than getting them from google fonts). Remove it if you are not going to use it.
- Pages, components, etc... are located under `/src`. If you are changing this, be sure to also update `tsconfig.json`'s `baseUrl`.

---

Let's go 🚀
