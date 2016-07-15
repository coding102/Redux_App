import { bindActionCreators } from 'redux';
// state manager "connect"
import { connect } from 'react-redux';
// imports everything from actionCreators *
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
     return {
          posts: state.posts,
          comments: state.comments
     }
}

function mapDispatchToProps (dispatch) {
     return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;