import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/horizontal-layout';
import '@vaadin/icon';
import '@vaadin/icons';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('badge-icons-only')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
      <vaadin-horizontal-layout theme="spacing">
        <!-- tag::snippet[] -->
        <vaadin-icon
          aria-label="Confirmed"
          icon="vaadin:check"
          style="padding: var(--lumo-space-xs)"
          theme="badge success"
          title="Confirmed"
        ></vaadin-icon>
        <vaadin-icon
          aria-label="Cancelled"
          icon="vaadin:close-small"
          style="padding: var(--lumo-space-xs)"
          theme="badge error"
          title="Cancelled"
        ></vaadin-icon>
        <!-- end::snippet[] -->
      </vaadin-horizontal-layout>
    `;
  }
}
