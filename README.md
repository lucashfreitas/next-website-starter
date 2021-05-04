This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is just a general idea that I created and tested really quickly but feel free to modify it as you need.

## Structure

This template is used to build basic websites where data is hosted in static JSON files or in an external CMS. The idea is to abstract the way we fetch data, once we have all the data types, every file inside
`data` folder should export an `async function` that should match to your defined data type. Doesn't matter where the data is hosted, could be in a CMS, database, etc, but once we know which data the website needs we can fetch it.

You can start to develop and implement your Design even before having the data set up in a CMS for example. once you know all the data structure for all pages, you can then fetch real data from a CMS or can even host it as a `JSON` file in an `S3 Bucket` for example.

In this example I've defined 3 types of data:

- **global**: All data that is used by all pages, usually header & menu data, footer, etc. This data will be available for all pages.
- **partials**: Sometimes the data doesn't belong specifically to a page but can be used in different pages or different sections and are independent.
- **pages/home**: Every page needs content and this represents every page data, note that we also fetch the global data for every home page.

## Motivation

Sometimes when creating websites we tend to create things in the CMS before starting the development. Once the data layer is abstract doesn't matter much `where the data comes from` - you could use JSON, contentful, an external Api, etc. What really matters is the `defining the right data structure` as your pages and components need it. You can model the data structure using typescript and make sure that you've correctly defined it to match your business needs.

## SSR x SSG

Since the page components exports `getServerSideProps` the page will be rendered in the server for every request, you can use CDN cache strategies to handle that. If you would prefer you can import data directly from JSON files and the page would be pre-build (`SSG`). This makes it easier to work with preview and make changes live in a blink of an eye by invalidating CDN Cache, as soon as the user change some content the only thing

## Typescript

When working with CMS and using Gatsby, sometimes the React components get often "polluted" with extensive objects like `data.node.edge.....` (_in case of gatsby_) and it's hard to understand what kind of data the CMS is returning. Using a single data fetch function we can `normalize` or `sanitize` the data and delivering it to React components in the way that it needs and use it. This helps to make our components cleaner and easier to understand.

## Extras

- eslint: using rules like `airbnb-typescript`, `react-hooks`, etc helps to keep our code organized.
- prettier: code formater
