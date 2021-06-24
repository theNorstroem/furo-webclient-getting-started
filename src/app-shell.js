import { LitElement, html } from 'lit-element';

// ui5 components need the i18n stuff before they start.
import('./configs/ui5Init.js').then(async () => {
  import('./main-stage.js');
});

/**
 * `main-app`
 *
 * @customElement
 */
class AppShell extends LitElement {
  /**
   *
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html` <main-stage></main-stage> `;
  }
}

window.customElements.define('app-shell', AppShell);
