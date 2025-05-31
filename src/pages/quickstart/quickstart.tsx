import "./quickstart.scss";
import React, { useReducer, useEffect } from "react";
import {
  colorReducer,
  initialState,
  Colorblue,
  Colorred,
  Colorgreen,
} from "../../redux/reduce/reduce";

const QuickStart = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  // Tự động đổi màu thành "red" khi component mount
  useEffect(() => {
    dispatch({
      type: Colorblue,
    });
    dispatch({
      type: Colorred,
    });
    dispatch({
      type: Colorgreen,
    });
  }, []);

  return (
    <>
      <div className='guide-container'>
        {/* Nút đổi màu đã bỏ */}

        {/* Tiêu đề lớn */}

        <section className='section-content'>
          <h2>Install</h2>
          <p>
            Fluent UI should be installed as a <code>dependency</code> of your
            app.
          </p>
          <div className='code-block'>
            <p className='yarn'>yarn add @fluentui/react-components</p>
          </div>
        </section>

        <section className='section-content'>
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
            <p style={{ color: state.colorblue }}>
              import&nbsp;{" "}
              <span style={{ color: state.color }}>react&nbsp; </span>{" "}
              from&nbsp; <span style={{ color: state.colorred }}> "react"</span>
              ;
            </p>
            <div className='code-block'>
              <p style={{ color: state.colorblue }}>
                import&nbsp;
                <span style={{ color: state.color }}>{"{ createRoot }"}</span>
                &nbsp;from&nbsp;
                <span style={{ color: state.colorred }}>
                  "react-dom/client"
                </span>
                ;
              </p>

              <p style={{ color: state.colorblue }}>
                import&nbsp;
                <span style={{ color: state.color }}>
                  {"{ FluentProvider, webLightTheme }"}
                </span>
                &nbsp;from&nbsp;
                <span style={{ color: state.colorred }}>
                  "@fluentui/react-components"
                </span>
                ;
              </p>

              <p style={{ color: state.colorblue }}>
                import&nbsp;
                <span style={{ color: state.color }}>App</span>
                &nbsp;from&nbsp;
                <span style={{ color: state.colorred }}>"./App"</span>;
              </p>

              <p style={{ color: state.colorblue }}>
                const&nbsp;
                <span style={{ color: state.color }}>root</span>
                &nbsp;=&nbsp;
                <span style={{ color: state.color }}>createRoot</span>
                <span style={{ color: state.colorgreen }}>(document.</span>
                <span style={{ color: state.color }}>getElementById</span> (
                <span style={{ color: state.colorred }}>"root"</span>));
              </p>

              <p style={{ color: state.colorblue }}>root.render(</p>

              <p style={{ color: state.colorblue }}>
                &nbsp;&nbsp;&lt;
                <span style={{ color: state.colorgreen }}>FluentProvider</span>
                &nbsp;<span style={{ color: state.colorred }}>theme</span>
                =&nbsp;&#123;
                <span style={{ color: state.colorred }}>webLightTheme</span>
                &#125;&gt;
              </p>

              <p style={{ color: state.colorblue }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                <span style={{ color: state.color }}>App</span> /&gt;
              </p>

              <p style={{ color: state.colorblue }}>
                &nbsp;&nbsp;&lt;/
                <span style={{ color: state.color }}>FluentProvider</span>&gt;
              </p>

              <p style={{ color: state.colorblue }}>);</p>
            </div>
          </div>

          <h3>React 17</h3>
          <div className='code-block'>
            <p>{`import React from "react";`}</p>
            <p>{`import ReactDOM from "react-dom";`}</p>
            <p>{`import { FluentProvider, webLightTheme } from "@fluentui/react-components";`}</p>
            <p>{`import App from "./App";`}</p>
            <p>{`ReactDOM.render(`}</p>
            <p>{`  <FluentProvider theme={webLightTheme}>`}</p>
            <p>{`    <App />`}</p>
            <p>{`  </FluentProvider>,`}</p>
            <p>{`  document.getElementById("root")`}</p>
            <p>{`);`}</p>
          </div>
        </section>

        <section className='section-content'>
          <h2>Usage</h2>
          <p>That is it. You can now use Fluent UI components in your app.</p>
          <div className='code-block'>
            <p>{`import React from "react";`}</p>
            <p>{`import { Button } from "@fluentui/react-components";`}</p>
            <p>{``}</p>
            <p>{`export const App = () => (`}</p>
            <p>{`  <Button appearance="primary">Click me</Button>`}</p>
            <p>{`);`}</p>
          </div>
        </section>

        <section className='section-content'>
          <h2>Strict mode</h2>
          <p>
            We are aware of some strict mode bugs when using Fluent UI in React
            18. These bugs only show up in strict mode, and they will not stop
            the rest of your app from running. You can{" "}
            <a
              href='https://github.com/microsoft/fluentui/issues'
              target='_blank'
              rel='noreferrer'
              className='underline'>
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
            <p>{`module.exports = {`}</p>
            <p>{`  reactStrictMode: false,`}</p>
            <p>{`};`}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuickStart;
