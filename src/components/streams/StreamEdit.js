import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Stream Edit</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(StreamEdit);
