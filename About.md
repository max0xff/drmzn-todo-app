# Drmzn

The quest for the holy grail of web dev. We're not there yet.

**Event → Controller → State → View**

#### Goals

- Follow the best practices - Inspired from multiple sources. Follows the original MVC from 70s and Immutable app architecture.
- Fast and flexible micro framework - Fast render < 16ms.
- Easy to understand and reason about.
- Server-side support with code reuse - isomorphic app design allows easy server-side rendering for SEO support, link sharing, fast caching and more.
- Optimized for single developer or small team - Every developer have access to the entire state tree.
- Modular - Every part of the system should be easily changeable.
- Easy to test - any part of the system can be tested in isolation.

#### Features

- MVC pattern
- Immutable app architecture
- Event system and Controllers - separate behavior from the UI representation
- Redux store
- React support
- Mustache logic-less html templates
- Dynamic partials and lambdas
- Smart render - fast and efficient DOM diffing
- Isomorphic server-side rendering with code re-use
- Offline support via Service Workers
- Web sockets
- Server-less support
- Desktop support via Electron
- Webpack, ES6, Babel, Eslint, Typescript, Scss, Less, PostCss and more
- In-browser end-to-end testing with Nightwatch.js

## Setup and build

#### Yarn

- yarn install
- yarn build
- yarn watch

#### Webpack

Webpack is used for combining and bundling. We generate several files. Configuration includes settings for Scss, Less and PostCss. We're using linting rules from Airbnb and Google.

- app.version.min.css
- app.version.min.js
- sw.version.min.js
- server.version.min.js

## How it works



![](drmzn-2.png)





#### Part 1: Server Side

Step 1. Visitor types url in his browser url bar and sends a request to the web server.

Step 2. Web server receives the request and invokes Controller on Node Express Web Server via Nginx.

Step 3. Controller calls method with parameters, does the work and dispatches an action to the **Store**. **Store** generates the **Initial State** for our app.

Step 4. Render function on server combines the views with **Initial State** and generates the **response html**. Initial state is passed as global variable via response html as script tag. (**hydration**)

Step 5. Client-side (browser), receives the response from server and renders html on the screen.

Step 6. Service workers are installing. 

Step 7. The app is loaded asynchronously after the Browser has rendered the **response html**. The store is initialized with "preloaded state". (**de-hydration)**. Service workers are installed.

#### Part 2: Client side

Step 8. User does a interaction - example - clicks on native link - a href element, the **Event System** is intercepting the click. Via **route map** the according controller/method is invoked with specified parameters.

Step 9. Controller executes **business logic** and dispatches an action to store to update the state. Controller can access private methods, Utils, external resources, 3rd party APIs and can send multiple dispatch actions at once. Controllers are asyncronious and can dispatch multiple actions.

Step 10. Store receives dispatch action from controller and updates the state.

Step 11. On state change, render function is activated. Render function gets the latest state and compiled views and generates the full html code that should be rendered on the screen.

Step 12. Html code is parsed to DOM nodes and it's diffed against current DOM Tree. Diff changes are applied to current DOM Tree. Render is complete. Target render time < 16ms.

# Event

Event system is set of simple patterns for handling all events. We have browser events - `click`, `touch` and etc., we have navigation events - `onhashchange`, and we have custom events. The purpose of event system is to redirect every event to it's matching controller, passing the params. Other option is to dispatch an simple action to Redux Saga.

To solve the problem with attaching event listeners on render, we're using **event delegation pattern**.  Attaching one event listener to document.body once and reusing it for all other browser events.

#### Navigation events

To map routes to controllers, use `route-table.js`

#### Browser and Custom events

To map browser and custom events you can use event delegation system in `events.js`.

# Controller

Controllers are IIFE with public and private methods. They are responsible for all **business logic** and theirs output is data object. The controllers are dispatching actions with updated data objects.

Controllers for server side and client side are the same, but some controllers can be client or server side only.

#### Business logic

What is business logic and what exactly controllers do? BL is any logic that is specific to our app. In most cases, all logic stays in Controllers. In some cases you might dispatch actions from action-reducers directly from events, bypassing Controllers (not recommended). From events you should dispatch simple actions (without state change) for redux-saga async flow.

Controllers deal with data and data only, theirs only output can be a dispatch action. The main job of controller is to **get**, **reduce** and **dispatch** the data.

- get data - access any kind of remote service (asynchronously). 
- reduce data - filter, modify and transform data - combine, sort, search, paginate, modifiers and etc.
- dispatch data - send Redux dispatch action to Store with data

Controllers can perform asynchronous operations and dispatch multiple actions over time. They are meant to pure functions, easy to test in isolation, completely independent from the views. Controller should not know anything about the views of the application.

#### Client side controllers

In some cases, you might need to access `window.document object` at the client browser. Usually those controllers should't be needed on the server side and you can skip them, but if you need them on server side also, make sure to guard `window` variable.

Manipulating the global space is not allowed. Make sure `window` is clean and nothing is leaked from our app.

#### Server side controllers

Usually all controllers are shared, but it's possible to have controllers only for server side and vice-verse. Server side controllers should always return **Promise**.

# State

For our model - we're using Redux. State = Model. In original MVC the view should observe the model for changes and render accordingly. Redux fits this pattern perfectly and we can consider the state tree as our Model.

#### Redux Store

Redux Store holds our **state**. It's initialized on startup and it's passed to controllers. Render is subscribed to store.

#### State

State is nested object. It have tree like structure and represents the data model of our app. It cannot be mutated and can be updated only with dispatch action.

#### Actions, Reducers and action-reducers

Redux provides us with actions and reducers. Actions and reducers are meant to be separated, so reducers can be reused and be composable.

However, sometimes is more suitable to combine them at one place.

We are using **object-path-immutable** in place of reducer function in order to make things much simple.

To combine actions and reducers at one place, we introduce **action-reducer**.

In order to use **action-reducer**, you can create a namespace (shortcut for IIFE) in `actions.ts`. You can have many **action-reducers** in same `actions.ts` file.

##### Action-reducer

```typescript
export namespace sampleActionReducer {
    export const type = 'TEST_TYPE';
    export const dispatch(store, data) {
        store.dispatch({
            type,
            data
        }); 
    }
    export const reduce(state, action) => immutable(state)
        .set('Test.action.test.subsection.testvalue', true)
        .set('Settings.data.profile', action.data)
        .value();
}
```

##### How to dispatch an action

```typescript
actions.mySimpleAction.dispatch(store, payload)
```

To dispatch and action, you need to pass the **initialized store object** as first variable and your data object as payload.

#### State Observers

State observers are functions that observe specific state **branch** for specific state **transition** and can execute function in response. They can be implemented via Redux Sagas.

# View

Views of our application should be completely independent from Controllers and Events. We should be able to choose different rendering method and different template system, with only providing different Render function, while using the same Events, Controllers and State.

We support React and Mustache but adding Vue or Handlebars should be easy.

## React

Stateless functional React components are following the architecture principles of immutability and separation of concerns.

The main rule is not to put the business logic in React Components. We should put business logic in Controllers and use *presentational components* as views. We use the Event delegation system instead of React event system.

## Mustache

Alternative to React components are mustache logic-less templates.

**Variable from state tree**

```handlebars
{{ State.object.data.path.var }}
```

**If exist**

```handlebars
{{#State.object.data}}
	{{ path.var }}
{{/State.object.data}}
```

**If not exist**

```handlebars
{{^State.object.data}}
	empty
{{/State.object.data}}
```

**Loop**

```handlebars
{{#State.object.data.something}}
	{{ title }}
	{{ desc }}
{{/State.object.data.something}}
```

**Partials - Include template**

```handlebars
{{>templateName}}
```

Read more at official mustache docs

#### Components

Components are organized in `components` directory. Components can have multiple template files and can have `events.ts`, `actions.ts` and `.scss` files. All templates are partials and can be included in any other template. Filename of the template are used as partial name. Directory names are ignored. Be careful with file naming.

Components must be wrapped in single html tag, in same fashion as React components. Adding `id` to main view elements is a good practice and helps the render.

To manage the component functionality you can create a Controller and re-use template files.

#### Dynamic Partials

All templates are partials and can be included in any other template via their name. Dynamic partials allow us to store the name of the template in state tree and change it dynamically via dispatch action.

In order to use dynamic partials, you must register them in `partials.js` in `config/`.

#### Lambdas

Lambdas are functions that can be added to render method, so mustache can be extended. Example would be rendering markdown documents.

## Render

Render function is invoked on every state change, via Redux subscribe method. For DOM diffing we're using Morphdom or React. Render function is de-bounced and if multiple state changes happen in same stack call, render function will be invoked once, after the last state change.

# Server

Server.js contains the code of our Node Express web server. It's meant to be served via Nginx and pm2. Server will create a endpoint for every route in route table, but you can add additional routes manually.

Nginx server serves `public/` directory, where are the app `dist` files.

To start node server in development use: `node server/server.js`

## Service Workers

Offline support via Workbox. We can use the help of Workbox to setup caching and offline support for our app.

#### Workbox

Caching, network requests and more.

## Web Sockets

Real-time connection - analytics, data sync and more.

## IndexDB

Storage and cache, Real-Time search and more.

## GraphQl

#### Server and Queries

GraphQl server should be separate Node.js instance. Queries should remain on server, while from client side we can send the parameters only.

## Security

We need to take care for security of our application and prevent XSS attacks. There are some rules we need to follow in order to achieve that:

- use helmet on server
- validate/sanitize user input
- validate forms server-side, use nonce
- never store sensitive information in local storages

## Testing

#### Test Driven Development (TDD)

TDD is useful practice, master it and you will write much better code, faster. Test the event system, controllers and the views of the app.

- Events, routes, custom events - Test if events are calling right controllers and passing correct data.
- Controllers - test output data object of controller, that should be dispatched to store.
- Views - test views with mockup state object.

#### Behavior Driven Development (BDD)

We can use nightwatch.js to test End-to-End functionality and practice BDD in same time.

## Opinions and restrictions

### State

- The state tree is deep nested (Redux) object and can contain arrays. You have full access.

- Do not mutate the state. Use **object-path-immutable** to update the state.
- Use a action-reducer for easy development.
- Reducer functions can access any branch of the state tree.

### Data

- State is data, but data is not state. We may store data as separate instance.

### Rendering

- Rendering on state change.
- Do not mutate the DOM. Don't do external DOM modifications, like jQuery, ads or etc. Emmbed 3rd party code with `norend` class.
- Html on screen is always a function from templates and state. Any external modification on DOM (except `norend`), will be discarded on next render.

### React

- Use presentational components, do not store business logic in React.
- Use stateless functional components, they are so pretty.

### Mustache templates

- Templates are logic-less html mustache templates, compiled with hogan.js on build time via Webpack. No if else statements. No business logic in templates.
- Templates are imported automatically.
- All templates are partials and any template can be reused and included in any other template.
- We support dynamic partial names. The value of partial (name of the template) and the name of partial sits on state tree.
- You must register dynamic partials in config/partials.
- Templates don't have own state or props like React components.
- In templates, we have access to whole state tree via dot notation.

### Generic

- Events are separated from the templates and logic. All events are in events file.
- The **business logic** stays in controllers. Controllers must be able to run on node. No `window` object on server side controllers.
- Controller can call another controller, but only one hop is allowed.

### Server-side rendering

- Reuse the code on server-side. One source tree to rule them all.
- The method of controllers, exposed to node, should always return **Promise**.

### Principles

Avoid premature optimization - try to delay every decision to the last possible moment, until you cannot delay anymore. Do not make decisions, until you have all the information.

- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)
- SGDD

### Testing

- Do TDD with karma/mocha unit tests and be cool.
- Do BDD with nightwatch.js. Test functionality, user stories, use cases and etc.

## FAQ

**Why Typescript?**

Typescript provides us with easy access to latest Javascript features, awesome tooling and great type system.

**Why using React instead of mustache?**

- React is much faster for complex rendering.
- JSX components are powerful.
- React have great support.

**Why using mustache instead of React?**

- Mustache templates are much simple to develop, compared to React components. Templates are pure html files.
- Mustache templates are logic-less. This forces developers to put the logic in their controllers.
- Mustache templates, we can render our views in any program language.

**Why Redux?**

Redux is very simple, but powerful tool for managing state, time-travel debug, debug state tree and more. It is the **Model** for our app.

**Why event delegations?**

Event delegation system allows us to have only one event listener, attached at app initialization. We don't need to add/remove another listeners after render.

**Why you didn't use X?**

I've selected the tools and tech stack to be as simple as possible, so I can understand it. Maybe there are better ways to do some of the things. Feel free to contribute.

## Open questions

#### What about the data?

All state is data, but not all data is state. We want all the data. We want it stored on local client storage. We want our data to be synched with the server. We want changes to occur first in local, then replicated on server or fail. We want changes on server to be sent to clients. We want full offline support - add to bag, checkout should be possible in offline mode. Once you're online, your order will be processed automatically. Possible solutions - PouchDB?

#### What about the state tree structure?

We need consistent and predictable state tree structure. Developers should know where to find/put the data and not invent random tree branches. Defining the state structure is essential.

#### What about cancellation of asynchronous events/controllers?

Our controllers are asynchronous and we need a mechanism to stop the execution, if they are not needed anymore. Example would be: while fetching some data, the visitor changes the page and request different set of data, but our first response is received and it's causing a undesired render. What would be the best way to cancel async controller execution? Can cancellation tokens help us here?

This problem can be solved very nicely with redux-saga pattern.

#### What about state pollution?

After visitor changes page, we might need to clear unused state branches associated with previous page. We can use state observers for that, but the question is when we should do it and what if we don't?

#### What about back button history?

How we gonna manage back-button functionality of our app? Should we execute methods again, or should we keep some static cache?

## Changelog

##### Version 2.0.0

- Change main view to React
- Hurray, we have a first released a package - [drmzn-redux](https://www.npmjs.com/package/drmzn-redux) - methods needed for our store.
- Hurray, we've released another package - [drmzn-react](https://www.npmjs.com/package/drmzn-react) - React render function
- Hurray, we've released yet another package - [drmzn-mustache](https://www.npmjs.com/package/drmzn-mustache) - Mustache render function

## Links

- [Robert C Martin - Clean Architecture and Design (video)](https://www.youtube.com/watch?v=Nsjsiz2A9mg)
- [Lee Byron - Immutable User Interfaces (video)](https://www.youtube.com/watch?v=pLvrZPSzHxo)
- [Robert C Martin - Functional Programming; What? Why? When? (video)](https://www.youtube.com/watch?v=7Zlp9rKHGD4)
- [John Ousterhout - A Philosophy of Software Design (video)](https://www.youtube.com/watch?v=bmSAYlu0NcY)
- [Martin Fowler - The Many Meanings of Event-Driven Architecture (video)](https://www.youtube.com/watch?v=STKCRSUsyP0)
- [Mike G. Miller - Professional Software Development (book)](https://mixmastamyk.bitbucket.io/pro_soft_dev/index.html)
- [Addy Osmani - Learning JavaScript Design Patterns (book)](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript)
- [Robert C Martin - UncleBob Expecting Professionalism (video)](https://www.youtube.com/watch?v=BSaAMQVq01E)
- [Revealing Module Pattern Javascript Tutorial (video)](https://www.youtube.com/watch?v=pOfwp6VlnlM)
- [Michele Bertoli - setState Machine (video)](https://www.youtube.com/watch?v=sZg3DoTfHLQ)
- [Dan Abramov - The Redux Journey (video)](https://www.youtube.com/watch?v=uvAXVMwHJXU)
- [Pub/Sub Javascript Design Pattern Tutorial (video)](https://www.youtube.com/watch?v=nQRXi1SVOow)
- [Dan Abramov - React as a UI Runtime (blog)](https://overreacted.io/react-as-a-ui-runtime/)
- [Nicole Sullivan: Style Guide Driven Development (video)](https://www.youtube.com/watch?v=ldW7zVmqu5g)
- [What Does It Take To Be An Expert At Python? (video)](https://www.youtube.com/watch?v=7lmCu8wz8ro)
- [The Beauty Of Bad Code (video)](https://www.youtube.com/watch?v=y_XLqYQ8MDA)

## Process of development

- Define naming conventions
- Define all user input actions, events, routes/pages
- Define state tree with Interfaces
- Define controllers
- Define sagas
- Define action-reducers
- Define components
- Build controllers and sagas
- Build action-reducers
- Build tests
- Build components