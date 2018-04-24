import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
// import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'
import { fetchPosts } from "../../src/actions/postActions";

class RootContainer extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({

  // startup: () => dispatch(StartupActions.startup())
})
const mapStateToProps = state => {
  console.log(state)
  return {
    // posts: state.posts.items
  }
}
// export default connect(null, mapDispatchToProps)(RootContainer)
export default connect(mapStateToProps, { fetchPosts })(RootContainer);
