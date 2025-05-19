const BasicSetup = () => {
  const webLightTheme = `  
   <RendererProvider renderer={renderer}>
              <SSRProvider>
                <FluentProvider theme={webLightTheme}>
                  <App />
                </FluentProvider>
              </SSRProvider>
            </RendererProvider>`;
  return (
    <>
      <div
        style={{
          background: "#fff",
          color: "#000",
          minHeight: "100vh",
          fontFamily: "Segoe UI, Arial, sans-serif",
          padding: "32px",
        }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "16px" }}>
          Server-Side Rendering
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
          Fluent UI React v9 supports Server-Side Rendering.
        </p>
        <strong style={{ fontSize: "1rem" }}>Basic setup</strong>
        <p style={{ margin: "16px 0 8px 0" }}>
          Add{" "}
          <code
            style={{
              background: "#f3f3f3",
              color: "#000",
              padding: "2px 6px",
              borderRadius: "4px",
            }}>
            @fluentui/react-components
          </code>{" "}
          dependency:
        </p>
        <div
          style={{
            background: "#f3f3f3",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            color: "#222",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "24px",
            fontFamily: "Consolas, monospace",
            fontSize: "1rem",
          }}>
          <span style={{ color: "#22863a" }}># Using Yarn</span>
          <br />
          yarn add @fluentui/react-components
          <br />
          <br />
          <span style={{ color: "#22863a" }}># Using NPM</span>
          <br />
          npm install @fluentui/react-components
        </div>
        <p>
          For any setup using SSR, you need to provide a&nbsp;
          <code
            style={{
              background: "#f3f3f3",
              color: "#000",
              padding: "2px 6px",
              borderRadius: "4px",
            }}>
            RendererProvider
          </code>
          ,&nbsp;
          <code
            style={{
              background: "#f3f3f3",
              color: "#000",
              padding: "2px 6px",
              borderRadius: "4px",
            }}>
            SSRProvider
          </code>{" "}
          and&nbsp;
          <code
            style={{
              background: "#f3f3f3",
              color: "#000",
              padding: "2px 6px",
              borderRadius: "4px",
            }}>
            FluentProvider
          </code>
          &nbsp;in the root of your app. If these providers are not added, there
          will be issues when hydrating. See the following example:
        </p>
        <div
          style={{
            marginTop: "32px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            color: "#222",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "24px",
            fontFamily: "Consolas, monospace",
            fontSize: "1rem",
          }}>
          <pre
            style={{
              background: "#f6f8fa",
              padding: "16px",
              borderRadius: "6px",
              fontFamily: "Consolas, monospace",
              fontSize: "14px",
              overflow: "auto",
            }}>
            <span style={{ color: "#22863a" }}>import</span> React{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>"react"</span>;
            <br />
            <span style={{ color: "#22863a" }}>import</span> ReactDOM{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>"react-dom"</span>;
            <br />
            <span style={{ color: "#22863a" }}>import</span>{" "}
            {<span style={{ color: "#005cc5" }}>createServerRenderer</span>}{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>
              "@fluentui/react-components"
            </span>
            ;
            <br />
            <span style={{ color: "#22863a" }}>import</span>{" "}
            {<span style={{ color: "#005cc5" }}>SSRProvider</span>}{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>
              "@fluentui/react-components/ssr"
            </span>
            ;
            <br />
            <span style={{ color: "#22863a" }}>import</span>{" "}
            {<span style={{ color: "#005cc5" }}>FluentProvider</span>}{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>
              "@fluentui/react-components"
            </span>
            ;
            <br />
            <span style={{ color: "#22863a" }}>import</span>{" "}
            <span style={{ color: "#005cc5" }}>App</span>{" "}
            <span style={{ color: "#000" }}>from</span>{" "}
            <span style={{ color: "#032f62" }}>"./App"</span>;
            <br />
            <span style={{ color: "#22863a" }}>import</span>{" "}
            <span style={{ color: "#032f62" }}>"./index.css"</span>;
            <br />
            <span style={{ color: "#22863a" }}>const</span>{" "}
            <span style={{ color: "#005cc5" }}>renderer</span> ={" "}
            <span style={{ color: "#005cc5" }}>createServerRenderer()</span>;
            <br />
            <span style={{ color: "#22863a" }}>const</span>{" "}
            <span style={{ color: "#005cc5" }}>root</span> ={" "}
            <span style={{ color: "#005cc5" }}>document.getElementById(</span>
            <span style={{ color: "#032f62" }}>"root"</span>
            <span style={{ color: "#005cc5" }}>)</span>;
            <br />
            <span style={{ color: "#22863a" }}>const</span>{" "}
            <span style={{ color: "#005cc5" }}>app</span> = ...
          </pre>
        </div>
      </div>
    </>
  );
};
export default BasicSetup;
