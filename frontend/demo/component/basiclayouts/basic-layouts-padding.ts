import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/button';
import '@vaadin/horizontal-layout';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('basic-layouts-padding')
export class Example extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('basic-layouts-example');
  }

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-horizontal-layout theme="spacing" style="border: 0">
        <div style="width: 100%">
          <p>Vertical layout without padding:</p>
          <vaadin-vertical-layout theme="spacing" style="align-items: stretch">
            <vaadin-button>Button 1</vaadin-button>
            <vaadin-button>Button 2</vaadin-button>
            <vaadin-button>Button 3</vaadin-button>
          </vaadin-vertical-layout>
        </div>
        <div style="width: 100%">
          <p>Vertical layout with padding:</p>
          <!-- tag::snippet[] -->
          <vaadin-vertical-layout theme="padding spacing" style="align-items: stretch">
            <!-- end::snippet[] -->
            <vaadin-button>Button 1</vaadin-button>
            <vaadin-button>Button 2</vaadin-button>
            <vaadin-button>Button 3</vaadin-button>
            <!-- tag::snippet[] -->
          </vaadin-vertical-layout>
          <!-- end::snippet[] -->
        </div>
      </vaadin-horizontal-layout>
    `;
  }
}
