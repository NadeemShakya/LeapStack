import React, { Component } from "react";

/**
 * Asynchronously imports the component for the routes.
 *
 * @param {Function} importComponent
 */
export default function asyncComponentImport(importComponent) {
  /**
   * <AsyncComponet/> component for asynchronous import of the
   * modules.
   */
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    /**
     * Renders the component.
     */
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
