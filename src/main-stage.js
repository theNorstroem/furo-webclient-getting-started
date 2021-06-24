import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';

import '@furo/ui5/src/furo-ui5-card.js';
import '@furo/ui5/src/furo-ui5-button.js';

/**
 * `main-stage`
 *
 * @customElement
 * @appliesMixin FBP
 */
class MainStage extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * furo flow based wire hook
     */
    this._FBPAddWireHook('--btnClicked', () => {
      window.alert('Congratulation! Furo flow based programming is active.');
    });
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-card
        heading="FURO webclient getting started"
        subheading="branch:feature/ui5-integration"
      >
        <furo-ui5-button slot="action" design="Emphasized" @-click="--btnClicked"
          >Hello Furo Ui5!</furo-ui5-button
        >
      </furo-ui5-card>
    `;
  }
}

window.customElements.define('main-stage', MainStage);
