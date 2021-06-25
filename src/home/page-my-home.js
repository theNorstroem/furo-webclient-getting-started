import { LitElement, html, css } from 'lit-element';
import { FBP } from '@furo/fbp';

import '@furo/route/src/furo-app-flow.js';
import '@furo/data/src/furo-reverse-deep-link.js';
import '@furo/layout/src/furo-vertical-scroller.js';
import '@furo/ui5/src/furo-ui5-button.js';

/**
 * `page-my-home`
 * Implementation of the home page.
 *
 * @summary home page impl
 * @customElement
 * @appliesMixin FBP
 */
class PageMyHome extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    /**
     * furo flow based wire hook
     */
    this._FBPAddWireHook('--btnClicked', () => {
      window.alert('Congratulation! Furo flow based programming is active.');
    });
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          padding: 1rem 2rem;
        }

        :host([hidden]) {
          display: none;
        }

        furo-vertical-scroller {
          padding-bottom: 1rem;
          box-sizing: border-box;
        }
      `,
    ];
  }

  /**
   *
   * @param query
   */
  updateQuery(query) {
    this._FBPTriggerWire('--queryUpdated', query);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-scroller>
        <furo-ui5-button design="Emphasized" @-click="--btnClicked"
        >Hello Furo meets SAP Fiori!</furo-ui5-button
      </furo-vertical-scroller>
    `;
  }
}

window.customElements.define('page-my-home', PageMyHome);
