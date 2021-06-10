import { LitElement, html } from 'lit-element';

import('./main-stage.js');

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
