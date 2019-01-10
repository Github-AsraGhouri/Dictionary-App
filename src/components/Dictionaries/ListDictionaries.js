import React, { Component } from 'react';
import { connect } from 'react-redux';
class List extends Component {
render() {
return (
<div className="List">
<ul class="collection with-header">
<li class="collection-header">
<div className="row">
<span className="col s5">Domain</span>
<span className="col s5">Range</span>
</div>
</li>
   <li class="collection-item row">
   <span className="col s5">{this.props.post.domain} </span>
   <span className="col s5">
   {this.props.post.range}
   </span>
  <button class="btn-floating btn-medium red lighten-2" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
  ><i class="material-icons">close</i>
    Delete</button>
    </li>
      <div className="row card-panel">
     <button className="red lighten-2 btn col s12"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Update</button>
    </div>
  </ul>
</div>
);
}
}
export default connect()(List);