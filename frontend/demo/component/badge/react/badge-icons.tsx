import '@vaadin/icons';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import React from 'react';
import { HorizontalLayout, Icon, VerticalLayout } from '@vaadin/react-components';

function Example() {
  return (
    // tag::snippet[]
    <VerticalLayout theme="spacing">
      <HorizontalLayout theme="spacing">
        <span {...{ theme: 'badge' }}>
          <Icon icon="vaadin:clock" style={{ padding: 'var(--lumo-space-xs)' }} />
          <span>Pending</span>
        </span>
        <span {...{ theme: 'badge success' }}>
          <Icon icon="vaadin:check" style={{ padding: 'var(--lumo-space-xs)' }} />
          <span>Confirmed</span>
        </span>
        <span {...{ theme: 'badge error' }}>
          <Icon icon="vaadin:exclamation-circle-o" style={{ padding: 'var(--lumo-space-xs)' }} />
          <span>Denied</span>
        </span>
        <span {...{ theme: 'badge contrast' }}>
          <Icon icon="vaadin:hand" style={{ padding: 'var(--lumo-space-xs)' }} />
          <span>On hold</span>
        </span>
      </HorizontalLayout>
      <HorizontalLayout theme="spacing">
        <span {...{ theme: 'badge' }}>
          <span>Pending</span>
          <Icon icon="vaadin:clock" style={{ padding: 'var(--lumo-space-xs)' }} />
        </span>
        <span {...{ theme: 'badge success' }}>
          <span>Confirmed</span>
          <Icon icon="vaadin:check" style={{ padding: 'var(--lumo-space-xs)' }} />
        </span>
        <span {...{ theme: 'badge error' }}>
          <span>Denied</span>
          <Icon icon="vaadin:exclamation-circle-o" style={{ padding: 'var(--lumo-space-xs)' }} />
        </span>
        <span {...{ theme: 'badge contrast' }}>
          <span>On hold</span>
          <Icon icon="vaadin:hand" style={{ padding: 'var(--lumo-space-xs)' }} />
        </span>
      </HorizontalLayout>
    </VerticalLayout>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
