import 'Frontend/demo/init'; // hidden-source-line
import '@vaadin/horizontal-layout';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/vertical-layout';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('badge-icons')
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
      <vaadin-vertical-layout theme="spacing">
        <vaadin-horizontal-layout theme="spacing">
          <span theme="badge">
            <vaadin-icon icon="vaadin:clock" style="padding: var(--lumo-space-xs)"></vaadin-icon>
            <span>Pending</span>
          </span>
          <span theme="badge success">
            <vaadin-icon icon="vaadin:check" style="padding: var(--lumo-space-xs)"></vaadin-icon>
            <span>Confirmed</span>
          </span>
          <span theme="badge error">
            <vaadin-icon
              icon="vaadin:exclamation-circle-o"
              style="padding: var(--lumo-space-xs)"
            ></vaadin-icon>
            <span>Denied</span>
          </span>
          <span theme="badge contrast">
            <vaadin-icon icon="vaadin:hand" style="padding: var(--lumo-space-xs)"></vaadin-icon>
            <span>On hold</span>
          </span>
        </vaadin-horizontal-layout>
        <vaadin-horizontal-layout theme="spacing">
          <span theme="badge">
            <span>Pending</span>
            <vaadin-icon icon="vaadin:clock" style="padding: var(--lumo-space-xs)"></vaadin-icon>
          </span>
          <span theme="badge success">
            <span>Confirmed</span>
            <vaadin-icon icon="vaadin:check" style="padding: var(--lumo-space-xs)"></vaadin-icon>
          </span>
          <span theme="badge error">
            <span>Denied</span>
            <vaadin-icon
              icon="vaadin:exclamation-circle-o"
              style="padding: var(--lumo-space-xs)"
            ></vaadin-icon>
          </span>
          <span theme="badge contrast">
            <span>On hold</span>
            <vaadin-icon icon="vaadin:hand" style="padding: var(--lumo-space-xs)"></vaadin-icon>
          </span>
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
      <!-- end::snippet[] -->
    `;
  }
}
