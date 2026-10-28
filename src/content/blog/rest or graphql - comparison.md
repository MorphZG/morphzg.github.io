---
title: 'REST or GraphQL: Comparison'
description: 'REST and GraphQL are two widely used approaches to building APIs. Both can support the same application, but they organize requests differently. In this post i will compare the two.'
pubDate: '2026-10-21'
heroImage: ''
thumbnail: '/src/assets/thumbnails/rest-graphql-comparison.webp'
tags: ['webdev', 'api', 'backend']
category: 'backend'
draft: true
---

Modern web applications rarely work in isolation. A React interface might need to load a project, update a task, or show which team members are responsible for upcoming deadlines. The frontend needs a reliable way to ask the backend for data and tell it when something changes.

That is the job of an API.

REST and GraphQL are two widely used approaches to building APIs. Both can support the same application, but they organize requests differently. REST usually exposes resources through multiple endpoints, while GraphQL lets clients describe the fields and related data they want in a query.

Neither approach is automatically better. The right choice depends on your application's data, the needs of its clients, and how much complexity your team is prepared to manage.

To make the differences concrete, let's use TaskFlow, a project-management app where users create projects, assign tasks, and track progress.

## A quick look at APIs

An Application Programming Interface (API) defines how software components communicate. In a typical web application, the browser sends an HTTP request to the backend. The backend applies business rules, accesses the database or another service, and returns a response.

The React frontend should not access the database directly. Instead, it communicates with a backend through an API layer. REST and GraphQL are two ways to design that layer; neither replaces React, Node.js, or the database itself.

## How REST works

REST stands for Representational State Transfer. It is an architectural style for distributed systems. In a REST API, endpoints commonly represent resources, while HTTP methods describe what the client wants to do.

A TaskFlow API might expose endpoints like these:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/projects` | List projects |
| `GET` | `/api/projects/42` | Get one project |
| `POST` | `/api/projects` | Create a project |
| `PATCH` | `/api/projects/42` | Update a project |
| `DELETE` | `/api/projects/42` | Delete a project |
| `GET` | `/api/projects/42/tasks` | List a project's tasks |

The URL identifies the resource, and the HTTP method communicates the operation. This makes REST endpoints relatively easy to understand, test, and monitor with familiar HTTP tools.

A request to `GET /api/projects/42` might return a JSON object containing the project's ID, name, description, status, and owner. The exact response is generally defined by the endpoint, so a client that needs only the name may still receive other fields.

That is not necessarily a problem. A well-designed endpoint can return a useful, predictable representation. REST APIs can also support filters, pagination, selected fields, and embedded relationships when clients need more control.

### A small REST example

With Express, a route can return a project by ID:

```js
app.get("/api/projects/:id", async (req, res) => {
  const project = await db.project.findUnique({
    where: { id: req.params.id }
  });

  if (!project) return res.status(404).json({ error: "Not found" });
  res.json(project);
});
```

This is a simplified example: a production API also needs input validation, authentication and authorization where appropriate, consistent error handling, and tests. The important pattern is that the route represents a resource and the server responds with an HTTP status and a representation of that resource.

### Where REST shines

REST fits naturally into the HTTP ecosystem. Resource URLs work well with standard HTTP caching, CDNs, monitoring tools, and API gateways. Individual endpoints also give teams a relatively clear place to apply permissions, measure performance, and document behavior.

Because the server defines each endpoint's response, the workload can be easier to predict. The trade-off is that clients with different data needs may require additional endpoints or extra requests.

## How GraphQL works

GraphQL is a query language for APIs and a runtime that executes those queries against the data a server exposes. It was developed at Facebook and open-sourced in 2015.

A GraphQL API commonly uses a single endpoint, such as `/graphql`. Instead of choosing an endpoint that determines the full response shape, the client sends a query specifying the fields and relationships it needs.

For example, a TaskFlow screen could request a project's name and status alongside the title and status of its tasks:

```graphql
query {
  project(id: "42") {
    name
    status
    tasks {
      title
      status
    }
  }
}
```

The response mirrors the requested fields. If the client did not ask for the project's description or task IDs, those fields are not included in the response.

This is GraphQL's main appeal: clients can request different combinations of related data without requiring a separate endpoint for every screen. It can reduce network round trips, but one request does not automatically mean less server work or better performance.

### Queries, mutations, and subscriptions

GraphQL has three operation types:

- `Query` reads data.
- `Mutation` changes data.
- `Subscription` delivers updates over a supported persistent connection, often using WebSockets.

A mutation might create a project and request the new project's ID and name. A subscription might deliver a task's status when it changes. Subscriptions need compatible server and transport support; they are not enabled automatically by using GraphQL.

## Schemas and resolvers

GraphQL APIs are built around a schema. The schema describes the types of data available, the fields those types contain, and the operations clients can perform. GraphQL validates a query against the schema before executing it.

A small part of a TaskFlow schema might look like this:

```graphql
type Project {
  id: ID!
  name: String!
  status: String!
  tasks: [Task!]!
}

type Task {
  id: ID!
  title: String!
  status: String!
}

type Query {
  project(id: ID!): Project
}
```

The exclamation mark means a value cannot be `null`. For example, `name: String!` promises a non-null string, while `project(id: ID!): Project` requires an ID but allows the project result to be `null` if no matching project exists.

A typed schema enables query validation, editor autocomplete, generated client types, and clearer API documentation. It does not replace business-rule validation or access-control checks.

A resolver is a function that supplies the value for a field. It might query a database, call another service, or calculate a value. For example, the resolver for `project` looks up a project by ID, while the resolver for `tasks` retrieves tasks belonging to that project.

GraphQL runs the resolvers needed to build the response. That flexibility is useful, but it also means developers must pay attention to database access, authorization, and the cost of requested queries.

## Calling the APIs from a frontend

A REST request can be straightforward:

```js
const response = await fetch("/api/projects/42");
if (!response.ok) throw new Error("Could not load project");
const project = await response.json();
```

The URL identifies the resource, and the server returns the representation defined for that endpoint.

A GraphQL request usually sends a query and its variables to the GraphQL endpoint:

```js
const response = await fetch("/graphql", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: "query ($id: ID!) { project(id: $id) { name status } }",
    variables: { id: "42" }
  })
});

const result = await response.json();
if (result.errors) throw new Error(result.errors[0].message);
```

This example is intentionally compact. In production, the client should also handle network failures and account for the fact that GraphQL can return partial data alongside errors. Variables keep values separate from the query structure, making queries easier to reuse and safer than manually inserting values into query strings.

For larger React applications, libraries such as Apollo Client and urql provide tools for caching, loading states, and error handling. They can be useful, but they introduce their own concepts and configuration. Start by understanding the underlying HTTP requests before relying on a client library to manage them.

## REST vs GraphQL: the main differences

The central difference is who controls the response shape. REST clients request resources through endpoints that define the response. GraphQL clients query a schema and specify the fields they want.

| Feature | REST | GraphQL |
| --- | --- | --- |
| API structure | Usually multiple resource-oriented endpoints | Commonly one endpoint |
| Selecting fields | Generally defined by the endpoint, with optional field-selection features | Specified in each query |
| Related data | May require multiple requests or custom endpoints | Can be requested together through nested fields |
| Type system | REST itself does not prescribe one; tools such as OpenAPI can describe an API | Schema and type system are central to the approach |
| HTTP caching | Often straightforward with URL-based caching | Usually needs additional cache design |
| API evolution | Versioned URLs or headers are common | Often evolves through added and deprecated fields |
| Error handling | HTTP status codes and response bodies | HTTP status plus GraphQL-level errors |
| Operational complexity | Often easier to reason about per endpoint | Requires attention to query cost and resolver behavior |

Neither approach is inherently faster or more scalable. Performance depends on database queries, network conditions, caching, payload size, and implementation quality.

### Over-fetching and under-fetching

Imagine a project overview needs the project's name plus the title and status of each task. With REST, the frontend might request the project and then its tasks separately. The project endpoint might return fields the screen does not use, or it might not include the related tasks at all.

These situations are often called over-fetching and under-fetching. GraphQL can address them by letting the client request exactly the fields it needs, including related data, in one query.

REST can address the same concerns with query parameters, field selection, embedded resources, or endpoints tailored to a particular use case. GraphQL's advantage is that clients can combine fields in different ways without requiring the backend team to design a new endpoint for every variation.

## Performance and the N+1 problem

GraphQL queries can be compact while triggering expensive work on the server. Suppose a request loads 100 projects and asks for each project's owner. A simple resolver might fetch the projects in one database query and then perform another query for every owner. That results in 101 queries, a pattern known as the N+1 problem.

Common ways to address it include batching related lookups with tools such as DataLoader, using suitable database joins, caching where appropriate, and paginating large collections. Teams should also monitor resolver performance and set query depth, complexity, and execution-time limits.

REST can suffer from inefficient database access too. A fixed endpoint often makes its workload easier to predict, while a GraphQL server may receive many combinations of fields and nested relationships. Neither style removes the need to measure and optimize the data layer.

## Caching

Caching reduces repeated work, but the approaches differ.

A REST request such as `GET /api/projects/42` has a distinct URL and fits naturally into browser, proxy, and CDN caching. HTTP headers such as `Cache-Control` can tell compatible caches how long a response may be reused. This needs care when responses contain user-specific or sensitive data.

GraphQL often sends many different queries to the same endpoint. A basic HTTP cache cannot assume every request to `/graphql` has the same response. GraphQL applications may use normalized client caches, server-side caching of expensive results, persisted queries, or carefully configured CDN caching.

REST's HTTP caching is often simpler to get started with. GraphQL clients can provide sophisticated caching, but the team must decide how records are identified and how cached data is refreshed after mutations.

## Errors and status codes

REST APIs commonly use HTTP status codes to communicate outcomes. A missing project might return `404 Not Found` with a JSON error message. Other familiar statuses include `201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, and `500 Internal Server Error`.

GraphQL errors work a little differently. A response can include both `data` and `errors`, which allows some fields to succeed even when another field fails. For example, a dashboard might still receive team information even if one project field could not be loaded.

Because a GraphQL execution error can occur in a response with HTTP status `200`, checking `response.ok` alone is not enough. The client should inspect the GraphQL response for an `errors` array and decide how to handle partial data. Servers can still use HTTP status codes for issues such as malformed requests or validation failures.

## Security

Neither REST nor GraphQL is secure by default. Both need authentication, authorization, input validation, safe database access, rate limiting, logging, and tests.

In TaskFlow, the server must check whether the signed-in user is allowed to update a particular task before applying a mutation. Knowing or guessing a task ID must never grant permission to change it. These checks belong on the server, regardless of how the request is expressed.

GraphQL has additional concerns because clients can request deeply nested fields or expensive combinations of data. Useful safeguards include limiting query depth and complexity, setting execution-time and page-size limits, monitoring expensive operations, and ensuring resolvers do not expose sensitive fields. Authentication alone is not enough: a signed-in user may still lack permission to access a particular project or task.

Schema validation can confirm that a field exists and its arguments have the right types. It cannot determine whether the current user is authorized to access the requested record. Disabling GraphQL introspection alone does not secure an API; proper authorization and resource-use controls matter far more.

## Versioning and API evolution

REST APIs often publish explicit versions, such as `/api/v1/projects/42` and `/api/v2/projects/42`. This can make breaking changes easier to contain, although teams may need to maintain more than one version.

GraphQL APIs often evolve by adding fields and marking old ones as deprecated. Clients can migrate gradually, provided the team tracks field usage and gives consumers time to update. Removing a field that a client still uses can break that client, so GraphQL does not eliminate the need for compatibility planning.

Both approaches benefit from clear documentation, automated tests, monitoring, and a policy for introducing and removing API capabilities.

## Pagination and filtering

Large collections should not be returned in a single response. Loading every task at once can waste bandwidth and memory and make the application slower.

A REST endpoint might use query parameters:

```http
GET /api/tasks?limit=20&offset=40&status=TODO
```

GraphQL can expose similar options as field arguments, often using a cursor-based connection pattern. That pattern typically returns a page of items along with a cursor and an indicator of whether another page exists.

Offset pagination is simple and can work well for many use cases. Cursor pagination can be more reliable for large or frequently changing datasets. The right choice depends on how the data is ordered and how records change over time. Whichever API style you choose, validate filters and enforce a maximum page size on the server.

## When should you choose each?

### REST is often a good fit when

- Your application is mainly CRUD operations over clearly defined resources.
- Standard HTTP caching and CDN integration are important.
- You want an API that external consumers can understand and use easily.
- Your team prefers predictable endpoints and a smaller conceptual surface area.
- You need conventional resource operations, file downloads, or webhooks.

### GraphQL is often a good fit when

- Different screens need different combinations of the same data.
- Your domain contains many connected entities.
- Several clients have different data requirements.
- Schema validation and generated client types would help the team.
- You need to combine data from multiple backend services behind one API.
- Your team can manage resolver performance, caching, and query complexity.

For a project-management application such as TaskFlow, I would usually start with REST. It is a practical way to demonstrate full-stack fundamentals: authentication, database design, validation, business rules, testing, and deployment.

GraphQL becomes more attractive when multiple screens or clients need different views of the same connected data. A task page, project overview, and team dashboard may each need a different combination of tasks, users, comments, and activity history.

If you are learning both technologies, implement a feature with REST first and then build the same feature with GraphQL. Compare the request flow, database queries, response sizes, code complexity, and ease of change. That exercise will teach you more than assuming one approach is always superior.

## Can REST and GraphQL coexist?

Yes. An application does not have to choose only one approach.

For example, an application might use REST for login, file uploads, and incoming webhooks while using GraphQL for queries that combine data from several related services. GraphQL can also sit in front of existing REST APIs, giving the frontend one place to request data without requiring every backend service to be redesigned.

A hybrid approach adds another layer to test, document, monitor, and secure. Use it when it solves a real problem, not simply because both technologies are available.

## A practical learning path

If you are comfortable with JavaScript and React, start by learning HTTP fundamentals and building a small REST API with Express. Practice routes, request methods, status codes, validation, authentication, and CRUD operations.

Then learn GraphQL schemas, types, nullability, queries, mutations, arguments, and variables. Connect resolvers to a database and pay attention to context and authorization. Once the basics are clear, integrate the API with React and explore a client library if its caching and component features are useful.

Finally, focus on production concerns: pagination, efficient data loading, error handling, security, logging, and tests. Implementing the same feature in both styles is a good way to compare the trade-offs with evidence rather than intuition.

### Read more

- [GraphQL documentation](https://graphql.org/learn/) — schemas, queries, mutations, and core concepts.
- [Apollo Server documentation](https://www.apollographql.com/docs/apollo-server/getting-started) — building a GraphQL server.
- [Apollo Client documentation](https://www.apollographql.com/docs/react) — using GraphQL with React.
- [Express routing guide](https://expressjs.com/en/guide/routing.html) — implementing REST endpoints with Express.
- [Roy Fielding's dissertation on REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) — the architectural foundations of REST.

## Conclusion

REST and GraphQL solve the same broad problem: they let clients work with backend data and operations. Their difference is how they organize that interaction.

REST structures APIs around resources and HTTP methods. It is familiar, works naturally with standard HTTP caching, and is often a strong choice for applications built around conventional resource operations.

GraphQL gives clients a typed schema and lets them request specific fields and related data. It is particularly useful when different screens or clients need different views of a connected data model.

Neither approach guarantees better performance, security, or maintainability. Those outcomes depend on thoughtful API design, efficient database access, sensible caching, testing, and operational controls.

Start with the simplest approach that fits the problem in front of you. Learn the alternatives well enough to understand their trade-offs, and choose based on your application's needs rather than the popularity of a technology.
