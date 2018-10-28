import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Header from '../containers/header/Header';

class Layout extends PureComponent {
  render() {
    const { isLoading, children } = this.props;
    return isLoading ? (
      <div>
        <Header />
        <Loader className="" type="Oval" color="#2196f3" height={80} width={80} />
      </div>
    ) : (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  null,
)(Layout);
