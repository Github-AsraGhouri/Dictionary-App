import React, { Component } from 'react';
import {connect} from 'react-redux';
class EditDictionaries extends Component {
     handleEdit = (e) => {
  e.preventDefault();
  const newDomain = this.getTitle.value;
  const newRange = this.getMessage.value;
  const data = {
    newDomain,
    newRange
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}

    render() {
        return (
            <div className="CreateDictionaries" >
                <div className="container">
                    <div class="card-panel">
                        <h5 class="red-text text-lighten-2">Edit Dictionaries</h5>
                    </div>
                    <div class="row"  key={this.props.post.id} >
                        <form onSubmit={this.handleEdit} class="col s12">
                            <div class="row">
                                <div class="input-field col s5">
                                    <input id="domain" ref={(input) => this.getDomain = input}
                         defaultValue={this.props.post.domain}  type="text" data-length="10" />
                                    <label for="input_text">Write Domain here</label>
                                </div>
                                <div class="input-field col s5">
                                    <input id="range" type="text" ref={(input) => this.getRange = input}
    defaultValue={this.props.post.range}  data-length="10" />
                                    <label for="input_text">Write Range here</label>
                                </div>
                                <div className="col s2">
                                    <a class="btn-floating btn-medium red lighten-2 "><i class="material-icons">close</i></a>
                                </div>
                            </div>
                            <div className="row">
                                <button class="red lighten-2 btn col s10">submit</button>
                                <div className="col s2">
                                    <a class="btn-floating btn-medium red lighten-2 "><i class="material-icons">add</i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default connect()(EditDictionaries);