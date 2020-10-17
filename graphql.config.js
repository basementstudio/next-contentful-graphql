// For the awesome GraphQL VSCode extension
// Get it here: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

module.exports = {
  schema: ['./src/lib/contentful/graphql.schema.json'],
  documents: ['**/*.{graphql,js,ts,jsx,tsx}']
}
