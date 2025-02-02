import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/accordion';
import '@vaadin/text-field';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('accordion-basic')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-accordion>
        <vaadin-accordion-panel summary="Personal information">
          <vaadin-vertical-layout>
            <span>Sophia Williams</span>
            <span>sophia.williams@company.com</span>
            <span>(501) 555-9128</span>
          </vaadin-vertical-layout>
        </vaadin-accordion-panel>
        <!-- end::snippet[] -->

        <vaadin-accordion-panel summary="Billing address">
          <vaadin-vertical-layout>
            <span>4027 Amber Lake Canyon</span>
            <span>72333-5884 Cozy Nook</span>
            <span>Arkansas</span>
          </vaadin-vertical-layout>
        </vaadin-accordion-panel>

        <vaadin-accordion-panel summary="Payment">
          <vaadin-vertical-layout>
            <span>MasterCard</span>
            <span>1234 5678 9012 3456</span>
            <span>Expires 06/21</span>
          </vaadin-vertical-layout>
        </vaadin-accordion-panel>
        <!-- tag::snippet[] -->
      </vaadin-accordion>
      <!-- end::snippet[] -->
    `;
  }
}
