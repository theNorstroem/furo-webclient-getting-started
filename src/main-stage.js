import { LitElement, html } from 'lit-element';
import { FBP } from '@furo/fbp/src/fbp.js';

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
    return html` <button @-click="--btnClicked">Hello Furo!</button> `;
  }
}

window.customElements.define('main-stage', MainStage);
