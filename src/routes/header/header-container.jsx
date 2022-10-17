import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_IS_CURRENCY_SWITCHER_OPEN } from "../../graphql/queries";

import Header from "./header-comp";

export class HeaderContainer extends Component {
  render() {
    return (
      <Query query={GET_IS_CURRENCY_SWITCHER_OPEN}>
        {({ data }) => <Header {...data} />}
      </Query>
    );
  }
}

export default HeaderContainer;