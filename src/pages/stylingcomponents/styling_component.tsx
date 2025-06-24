import "./index.scss";
import React, { useReducer, useEffect } from "react";
import {
  colorReducer,
  initialState,
  Colorblue,
  Colorred,
  Colorgreen,
} from "../../redux/reduce/reduce";

const StylingComponent = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  useEffect(() => {
    dispatch({ type: Colorblue });
    dispatch({ type: Colorred });
    dispatch({ type: Colorgreen });
  }, []);

  return (
    <div className='guide-container'>
      <section className='section-content'>
        <h2>Getting started</h2>
        <p>
          To style Fluent UI React v9 components <code>makeStyles</code> is
          used. <code>makeStyles</code> comes from <a href='#'>Griffel</a>, a
          homegrown CSS-in-JS implementation which generates atomic CSS classes.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>{"{ makeStyles }"}</span> from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
        </div>
      </section>

      <section className='section-content'>
        <h2>Basic usage</h2>
        <p>
          To style a component, you need to call <code>makeStyles</code> in a
          module scope to create a React hook to be used inside a component.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>{"{ makeStyles }"}</span> from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            <span style={{ color: state.color }}>const useStyles</span> =
            makeStyles(&#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;root: &#123; color:{" "}
            <span style={{ color: state.colorred }}>'red'</span> &#125;,
          </p>
          <p style={{ color: state.colorblue }}>&#125;);</p>
          <p style={{ color: state.colorblue }}>function Component() &#123;</p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.colorblue }}>const classes</span>=
            useStyles();
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;return &lt;div className=&#123;classes.root&#125; /&gt;;
          </p>
          <p style={{ color: state.colorblue }}>&#125;</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>Merging component styles</h2>
        <p>
          There are cases where you need to merge classes from multiple{" "}
          <code>useStyles</code> calls.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>
              {"{ makeStyles, mergeClasses }"}
            </span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            <span style={{ color: state.color }}>const useStyles</span> =
            makeStyles(&#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;blueBold: &#123; color:{" "}
            <span style={{ color: state.colorred }}>'blue'</span>, fontWeight:{" "}
            <span style={{ color: state.colorred }}>'bold'</span> &#125;,
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;red: &#123; color:{" "}
            <span style={{ color: state.colorred }}>'red'</span> &#125;,
          </p>
          <p style={{ color: state.colorblue }}>&#125;);</p>
          <p style={{ color: state.colorblue }}>function Component() &#123;</p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.color }}>const classes</span> =
            useStyles();
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;<span style={{ color: state.color }}>const first</span>{" "}
            = mergeClasses(classes.blueBold, classes.red); // &#123; color:
            'red', fontWeight: 'bold' &#125;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;<span style={{ color: state.color }}>const second</span>{" "}
            = mergeClasses(classes.red, classes.blueBold); // &#123; color:
            'blue', fontWeight: 'bold' &#125;
          </p>
          <p style={{ color: state.colorblue }}>&#125;</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>Applying theme to styles</h2>
        <p>
          The only way to change the component styling is through theme tokens
          which can be used in style values.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>
              {"{ makeStyles, tokens }"}
            </span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            <span style={{ color: state.color }}>const useStyles</span> =
            makeStyles(&#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;root: &#123; display:{" "}
            <span style={{ color: state.colorred }}>'flex'</span> &#125;,
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;rootPrimary: &#123; color:{" "}
            <span style={{ color: state.colorred }}>
              tokens.colorNeutralForeground3
            </span>{" "}
            &#125;,
          </p>
          <p style={{ color: state.colorblue }}>&#125;);</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>Incorrect usages</h2>
        <p>
          This section shows and describes anti-patterns which should never be
          used.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>
              {"{ makeStyles, mergeClasses }"}
            </span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            <span style={{ color: state.color }}>const useStyles</span> =
            makeStyles(&#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;root: &#123; color:{" "}
            <span style={{ color: state.colorred }}>'red'</span> &#125;; // Do
            not use colors directly as those are not theme-able. Always use
            colors from a theme
          </p>
          <p style={{ color: state.colorblue }}>&#125;);</p>
          <p style={{ color: state.colorblue }}>
            function Component(props) &#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.color }}>const classes</span> =
            useStyles();
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.color }}>const wrongClasses</span> =
            classes.root + ' ' + props.className; // Never concatenate class
            strings, always use mergeClasses()
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.color }}>const wrongClasses2</span> =
            mergeClasses(props.className, classes.root); // Incorrect order of
            classes - as the latest wins, props.className should be last to
            override the component styles
          </p>
          <p style={{ color: state.colorblue }}>&#125;</p>
        </div>
      </section>

      <section className='section-content'>
        <h2>Overriding FUI component styles</h2>
        <p>
          To override an appearance of a FUI component, you use the exactly same
          approach - You call <code>makeStyles/useStyles</code> in your code and
          pass the resulting classes through <code>props</code>.
        </p>
        <div className='code-block'>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>
              {"{ makeStyles, tokens, shorthands }"}
            </span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-components'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            import{" "}
            <span style={{ color: state.color }}>{"{ CallEndRegular }"}</span>{" "}
            from{" "}
            <span style={{ color: state.colorred }}>
              '@fluentui/react-icons'
            </span>
            ;
          </p>
          <p style={{ color: state.colorblue }}>
            <span style={{ color: state.color }}>const useOverrides</span> =
            makeStyles(&#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;button: &#123; color:{" "}
            <span style={{ color: state.colorred }}>
              tokens.colorNeutralForeground3
            </span>{" "}
            &#125;,
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;buttonIcon: &#123; ...shorthands.border('1px', 'solid',
            tokens.colorNeutralStroke1) &#125;,
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;link: &#123; fontWeight:{" "}
            <span style={{ color: state.colorred }}>'bold'</span> &#125;,
          </p>
          <p style={{ color: state.colorblue }}>&#125;);</p>
          <p style={{ color: state.colorblue }}>
            function MyComponent() &#123;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;
            <span style={{ color: state.color }}>const overrides</span> =
            useOverrides();
          </p>
          <p style={{ color: state.colorblue }}>&nbsp;&nbsp;return (</p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Button
            className=&#123;overrides.button&#125; icon=&#123;&#123; className:
            overrides.buttonIcon, children: &lt;CallEndRegular /&gt;
            &#125;&#125; /&gt;
          </p>
          <p style={{ color: state.colorblue }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;Link
            className=&#123;overrides.link&#125; /&gt;
          </p>
          <p style={{ color: state.colorblue }}>&nbsp;&nbsp;);</p>
          <p style={{ color: state.colorblue }}>&#125;</p>
        </div>
      </section>
    </div>
  );
};

export default StylingComponent;
