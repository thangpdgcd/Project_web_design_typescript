import banner from "../../assets/img/fluentui-wide-banner.png";
import bannercontent from "../../assets/img/banner.svg";
import bannercontenttokent from "../../assets/img/banner2.svg";
import bannercontenttassets from "../../assets/img/banner3.svg";
import "./introduction.scss";

const Introduction = () => {
  return (
    <>
      <div className='introduction-container'>
        <div className='header'>
          <p className='name'>Fluent UI React Components</p>
          <p className='version'>v9.64.0</p>
        </div>

        <div className='content'>
          <div className='banner'>
            <img className='img-banner' src={banner} alt='' />
          </div>
          <div className='between'>What's New</div>
          <div className='banner-content'>
            <img src={bannercontent} alt='' />
            <img src={bannercontenttokent} alt='' />
            <img src={bannercontenttassets} alt='' />
          </div>
          <div className='word'>
            <p>
              Lightweight components for smaller bundle size and faster
              performance.
            </p>
            <p>New tokens system for frictionless cohesion across OS themes.</p>
            <p>New assets to level up Teams add-ins and M365 experiences.</p>
          </div>
          <div className='footer-content'>
            <div className='overview'>Overview</div>
            <p className='overview-content'>
              Fluent UI React Components is a set of UI components and utilities
              resulting from an effort to converge the set of React based
              component libraries in production today: @fluentui/react and
              @fluentui/react-northstar.
            </p>
            <br />
            <p className='overview-content'>
              Each component is designed to adhere to the following standards:
            </p>
            <ul>
              <li>
                <strong>Customizable:</strong> Components styled with Fluent UI
                by default, but easy to customize with your own brand and theme.
              </li>
              <li>
                <strong>Performance:</strong> Optimized for high rendering
                performance.
              </li>
              <li>
                <strong>Bundle Size:</strong> Refactored and lightweight
                components that include only the packages and dependencies you
                need.
              </li>
              <li>
                <strong>Accessibility:</strong> Compliant with WCAG 2.1 and
                tested by trusted accessibility experts.
              </li>
              <li>
                <strong>Design to Code:</strong> Stay aligned with Fluent Design
                Language updates through Design Tokens.
              </li>
            </ul>
          </div>
          <div className='contact-section'>
            <h2>Questions?</h2>
            <p>
              Reach out to the Fluent UI React team on{" "}
              <a href='https://github.com/microsoft/fluentui' target='_blank'>
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    </>
  );
};
export default Introduction;
