import React, { Component } from 'react';
import List from './ListDictionaries'
import { connect } from 'react-redux';
import EditDictionaries from './EditDictionaries';
// import CreateDictionaries from './CreateDictionaries'
class AddDictionaries extends Component {

  render() {
    return (
      <div className="AddDictionaries container">
      <div class="card-panel">
        <h5 class="red-text text-lighten-2">List of Dictionaries</h5>
      </div>
      {this.props.posts.map((post) => (
  <div key={post.id}>
    {post.editing ? <EditDictionaries post={post} key={post.id} /> : <List post={post}
    key={post.id} />}
  </div>
))}
          
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
// class List extends Component{
//     render(){
//         return(
//             <div>
//               {this.props.domainprop}{this.props.rangeProp}
//             </div>
//         );
//     }
// }
export default connect(mapStateToProps)(AddDictionaries);
