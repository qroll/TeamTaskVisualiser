import { connect } from "react-redux";

import NavHeader from "../components/NavHeader";

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const NavHeaderContainer = connect(mapStateToProps, null)(NavHeader);

export default NavHeaderContainer;
