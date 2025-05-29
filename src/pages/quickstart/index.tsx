import "./index.scss";

const QuickStart = () => {
  return (
    <>
      <div className='guide-container'>
        <section>
          <h2>Install</h2>
          <p>
            Fluent UI should be installed as a <code>dependency</code> of your
            app.
          </p>
          <div className='code-block'>
            <code>yarn add @fluentui/react-components</code>
          </div>
        </section>

        <section>
          <h2>Setup</h2>
          <p>
            Fluent UI components are styled using CSS in JS. This technique
            requires a style renderer which inserts CSS into DOM when needed.
            React context is used to provide the style renderer.
          </p>
          <p>
            Place a <code>&lt;FluentProvider /&gt;</code> at the root of your
            app and pass theme as a prop.
          </p>

          <h3>React 18</h3>
          <div className='code-block'>
            <code>{`import React from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);`}</code>
          </div>

          <h3>React 17</h3>
          <div className='code-block'>
            <code>{`import React from "react";
import ReactDOM from "react-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import App from "./App";

ReactDOM.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>,
  document.getElementById("root")
);`}</code>
          </div>
        </section>

        <section>
          <h2>Usage</h2>
          <p>That is it. You can now use Fluent UI components in your app.</p>
          <div className='code-block'>
            <code>{`import React from "react";
import { Button } from "@fluentui/react-components";

export const App = () => (
  <Button appearance="primary">Click me</Button>
);`}</code>
          </div>
        </section>

        <section>
          <h2>Strict mode</h2>
          <p>
            We are aware of some strict mode bugs when using Fluent UI in React
            18. These bugs only show up in strict mode, and they will not stop
            the rest of your app from running. You can{" "}
            <a
              href='https://github.com/microsoft/fluentui/issues'
              target='_blank'
              rel='noreferrer'>
              find the bugs on GitHub
            </a>{" "}
            and learn how they will affect your application.
          </p>
          <p>SSR and Next.js:</p>
          <p>
            To avoid strict mode hydration issues, you can disable strict mode
            in your Next.js app by adding the following configuration to your{" "}
            <code>next.config.js</code> file:
          </p>
          <div className='code-block'>
            <code>{`module.exports = {
  reactStrictMode: false,
};`}</code>
          </div>
        </section>
      </div>
    </>
  );
};
export default QuickStart;
