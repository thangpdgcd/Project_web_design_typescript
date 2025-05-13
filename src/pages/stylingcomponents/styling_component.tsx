import "./index.scss";
import React from "react";

const styles = {
  container: "container",
  codeBlock: "codeBlock",
  copyButton: "copyButton",
  warning: "warning",
};

const StylingComponent = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const codeSample1 = `import { makeStyles } from '@fluentui/react-components';`;

  const codeSample2 = `import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: { color: 'red' },
});

function Component() {
  const classes = useStyles();

  return <div className={classes.root} />;
}`;

  const codeSample3 = `import { makeStyles, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
  blueBold: {
    color: 'blue',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
});

function Component() {
  const classes = useStyles();

  const first = mergeClasses(classes.blueBold, classes.red);   // { color: 'red', fontWeight: 'bold' }
  const second = mergeClasses(classes.red, classes.blueBold);  // { color: 'blue', fontWeight: 'bold' }
}`;

  const codeSample4 = `import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: { color: 'red' },
  rootPrimary: { color: 'blue' },
});

function Component(props) {
  const classes = useStyles();

  return <div className={mergeClasses('ui-component', classes.root, props.primary && classes.rootPrimary)} />;
}`;
  const codeApplying = `import { mergeClasses } from '@fluentui/react-components';

function Component(props) {
  const classes = useStyles();

  return <div className={mergeClasses(classes.root, props.className /* these definitions have higher precedence */)} />;
}
`;
  const codeApplyingtheme = `import { makeStyles, tokens } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: { display: 'flex' },
  rootPrimary: { color: tokens.colorNeutralForeground3 },
});
`;
  const codeincorrect = `import { makeStyles, mergeClasses } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: { color: 'red' }, // Do not use colors directly as those are not theme-able. Always use colors from a theme
});

function Component(props) {
  const classes = useStyles();

  const wrongClasses = classes.root + ' ' + props.className; // Never concatenate class strings, always use mergeClasses()
  const wrongClasses2 = mergeClasses(props.className, classes.root); // Incorrect order of classes - as the latest wins, props.className should be last to override the component styles
}

`;
  const codeoverriding = `import { makeStyles, tokens, shorthands } from '@fluentui/react-components';
import { CallEndRegular } from '@fluentui/react-icons';

const useOverrides = makeStyles({
  button: { color: tokens.colorNeutralForeground3 },
  buttonIcon: {
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke1),
  },
  link: { fontWeight: 'bold' },
});

function MyComponent() {
  const overrides = useOverrides();

  return (
    <>
      <Button className={overrides.button} icon={{ className: overrides.buttonIcon, children: <CallEndRegular /> }} />
      <Link className={overrides.link} />
    </>
  );
}

`;

  return (
    <div className={styles.container}>
      <h1>Styling components</h1>
      <p>
        Visit the <a href='#'>Styling handbook</a> for a comprehensive styling
        guide, as this article only introduces basics to get you started
        quickly.
      </p>
      <h2>Getting started</h2>
      <p>
        To style Fluent UI React v9 components <code>makeStyles</code> is used.{" "}
        <code>makeStyles</code> comes from <a href='#'>Griffel</a>, a homegrown
        CSS-in-JS implementation which generates atomic CSS classes.
      </p>
      <p>Get started by simply importing:</p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeSample1}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeSample1)}>
          Copy
        </button>
      </div>
      <p>
        To style a component, you need to call <code>makeStyles</code> in a
        module scope to create a React hook to be used inside a component.
      </p>
      <p>
        The <code>makeStyles</code> call accepts an object of items where each
        key is a unique identifier and each value is an object with styles. The
        call returns an object with classes mapped to these unique identifiers.
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeSample2}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeSample2)}>
          Copy
        </button>
      </div>
      <h2>Merging component styles</h2>
      <p>
        There are cases where you need to merge classes from multiple{" "}
        <code>useStyles</code> calls.
      </p>
      <div className={styles.warning}>
        ⚠ It is not possible to simply concatenate <code>useStyles</code>{" "}
        classes.
      </div>
      <p>
        To properly merge the classes, you need to use{" "}
        <code>mergeClasses()</code> function, which performs merge and
        deduplication of atomic classes generated by <code>makeStyles()</code>.
      </p>
      <p>
        When <code>mergeClasses()</code> is called, it merges all classes from
        first to last – the latter argument overwrites the previous ones
        (similar to <code>Object.assign()</code>).
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeSample3}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeSample3)}>
          Copy
        </button>
      </div>
      <h2>Mapping props and state to styles</h2>
      <p>
        Both <code>makeStyles</code> and <code>mergeClasses</code> are simple.
        They are unaware of component state and props. Developers should merge
        and apply appropriate parts of the <code>useStyles</code> call based on
        their requirements.
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeSample4}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeSample4)}>
          Copy
        </button>
      </div>
      <h2>Applying classes passed from parent</h2>
      <p>
        The same approach is used to apply classes passed from parent component.
        Again, you need to use<code>mergeClasses()</code> and to properly merge
        and deduplicate the classes. Note again, that the order of application
        is important in
        <code>mergeClasses()</code> so that parent classes overwrite component
        classes.
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeApplying}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeApplying)}>
          Copy
        </button>
      </div>
      <h2>Applying theme to styles</h2>
      <p>
        No matter what theme is used, the component styles are always the same.
        The only way to change the component styling is through theme tokens
        which can be used in style values.
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeApplyingtheme}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeApplyingtheme)}>
          Copy
        </button>
      </div>
      <p>
        Those tokens are resolved to CSS variable usages. The{" "}
        <code>FluentProvider</code>
        component is responsible for setting the CSS variables in DOM and
        changing them when the theme changes. When the theme is switched, only
        the variables are changed, all styles remain the same.
      </p>
      <p>
        For more details on, see <a href='Theming'>Theming</a>.
      </p>
      <h3>Incorrect usages</h3>
      <p>
        This section shows and describes anti-patterns which should never be
        used.
      </p>
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeincorrect}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeincorrect)}>
          Copy
        </button>
      </div>
      <h3>Debugging styles</h3>
      <p>
        <a href='Griffel devtools chrome extension'>
          Griffel devtools chrome extension
        </a>{" "}
        can be used to debug style overrides. It shows all griffel styles
        applied on the currently selected DOM element, including the styles that
        are overridden in <code>mergeClasses</code> .
      </p>
      <h3>Limitations</h3>
      <p>
        Griffel's approach to styling comes with certain{" "}
        <a href='limitations'>limitations</a>. One of which is the lack of
        support for <a href='CSS'>CSS shorthand properties </a>. To work around
        this, Griffel{" "}
        <a href='provides a collection of shorthand functions '>
          provides a collection of shorthand functions{" "}
        </a>
        to write css shorthand. Their usage is demonstrated in the next example.
      </p>
      <h1>Overriding FUI component styles</h1>
      pTo override an appearance of a FUI component, you use the exactly same
      approach - You call <code> makeStyles/useStyles</code> in your code and
      pass the resulting classes through <code>props</code>.
      <div className={styles.codeBlock}>
        <pre>
          <code>{codeoverriding}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={() => handleCopy(codeoverriding)}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default StylingComponent;
