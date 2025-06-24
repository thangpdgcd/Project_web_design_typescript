import "./index.scss";
import React, { useReducer, useEffect } from "react";
import { useTranslation } from "react-i18next"; // ✅ Thêm
import {
  colorReducer,
  initialState,
  Colorblue,
  Colorred,
  Colorgreen,
} from "../../redux/reduce/reduce";

const QuickStart = () => {
  const { t } = useTranslation(); // ✅ Sử dụng i18n
  const [state, dispatch] = useReducer(colorReducer, initialState);

  useEffect(() => {
    dispatch({ type: Colorblue });
    dispatch({ type: Colorred });
    dispatch({ type: Colorgreen });
  }, []);

  return (
    <div className='guide-container'>
      <section className='section-content'>
        <h2>{t("quickstart.install_title")}</h2>
        <p>{t("quickstart.install_desc")}</p>
        <div className='code-block'>
          <p className='yarn'>yarn add @fluentui/react-components</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>{t("quickstart.setup_title")}</h2>
        <p>{t("quickstart.setup_desc_1")}</p>
        <p>{t("quickstart.setup_desc_2")}</p>

        <h3>React 18</h3>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import <span style={{ color: state.color }}>react </span> from{" "}
            <span style={{ color: state.colorred }}>"react"</span>;
          </p>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>{"{ createRoot }"}</span> from{" "}
            <span style={{ color: state.colorred }}>"react-dom/client"</span>;
          </p>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>
              {"{ FluentProvider, webLightTheme }"}
            </span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              "@fluentui/react-components"
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            import <span style={{ color: state.color }}>App</span> from{" "}
            <span style={{ color: state.colorred }}>"./App"</span>;
          </p>
          <p style={{ color: state.colorblue }}>
            const <span style={{ color: state.color }}>root</span> ={" "}
            <span style={{ color: state.color }}>createRoot</span>(
            <span style={{ color: state.colorgreen }}>document.</span>
            getElementById(<span style={{ color: state.colorred }}>"root"</span>
            ) );
          </p>
          <p style={{ color: state.colorblue }}>root.render(</p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;&lt;
            <span style={{ color: state.colorgreen }}>FluentProvider</span>{" "}
            theme=&#123;
            <span style={{ color: state.colorred }}>webLightTheme</span>
            &#125;&gt;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;App /&gt;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;&lt;/FluentProvider&gt;
          </p>
          <p style={{ color: state.colorblue }}>);</p>
        </div>

        <h3>React 17</h3>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            {`import `}
            <span style={{ color: state.color }}>React</span>
            {` from "`}
            <span style={{ color: state.colorred }}>react</span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`import `}
            <span style={{ color: state.color }}>ReactDOM</span>
            {` from "`}
            <span style={{ color: state.colorred }}>react-dom</span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`import { `}
            <span style={{ color: state.color }}>
              FluentProvider, webLightTheme
            </span>
            {` } from "`}
            <span style={{ color: state.colorred }}>
              @fluentui/react-components
            </span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`import `}
            <span style={{ color: state.color }}>App</span>
            {` from "`}
            <span style={{ color: state.colorred }}>./App</span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>{`ReactDOM.render(`}</p>
          <p style={{ color: state.colorblue }}>
            {`  <`}
            <span style={{ color: state.colorgreen }}>FluentProvider</span>
            {` theme={`}
            <span style={{ color: state.colorred }}>webLightTheme</span>
            {`}>`}
          </p>
          <p style={{ color: state.colorblue }}>{`    <App />`}</p>
          <p style={{ color: state.colorblue }}>{`  </FluentProvider>,`}</p>
          <p style={{ color: state.colorblue }}>
            {`  `}
            <span style={{ color: state.colorgreen }}>
              document.getElementById(
            </span>
            <span style={{ color: state.colorred }}>"root"</span>
            {`)`}
          </p>
          <p style={{ color: state.colorblue }}>{`);`}</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>{t("quickstart.usage_title")}</h2>
        <p>{t("quickstart.usage_desc")}</p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            {`import `}
            <span style={{ color: state.color }}>React</span>
            {` from "`}
            <span style={{ color: state.colorred }}>react</span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`import { `}
            <span style={{ color: state.color }}>Button</span>
            {` } from "`}
            <span style={{ color: state.colorred }}>
              @fluentui/react-components
            </span>
            {`";`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`export const App = () => (`}
          </p>
          <p style={{ color: state.colorblue }}>
            {`  <`}
            <span style={{ color: state.colorgreen }}>Button</span>{" "}
            appearance="primary"{`>`}Click me{`</`}
            <span style={{ color: state.colorgreen }}>Button</span>
            {`>`}
          </p>
          <p style={{ color: state.colorblue }}>{`);`}</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>{t("quickstart.strict_mode_title")}</h2>
        <p>{t("quickstart.strict_mode_desc_1")}</p>
        <p>SSR and Next.js:</p>
        <p>{t("quickstart.strict_mode_desc_2")}</p>
        <div className='code-block'>
          <p style={{ color: state.color }}>{`module.exports = {`}</p>
          <p style={{ color: state.color }}>
            {`  `}
            <span style={{ color: state.colorgreen }}>
              reactStrictMode
            </span>: <span style={{ color: state.colorred }}>false</span>,
          </p>
          <p style={{ color: state.colorblue }}>{`};`}</p>
        </div>
      </section>
    </div>
  );
};

export default QuickStart;
