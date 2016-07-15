import { bindActionCreators } from 'redux';
// state manager "connect"
import { connect } form 'react-redux';
// imports everything from actionCreators *
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
     return {
          posts: state.posts,
          comments: state.comments
     }
}

const App = connect(mapStateToProps, mapDispatchToProps);