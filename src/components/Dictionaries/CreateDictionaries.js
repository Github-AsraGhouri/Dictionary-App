import React, { Component } from 'react';
import AddDictionaries from './AddDictionaries';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class CreateDictionaries extends Component {
    // constructor(props){
    //     super(props);
    //     this.state= {
    //         domain :  '',
    //         range: ''
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // }
      handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/AddDictionaries/')
    const domain = this.getDomain.value;
    const range =  this.getRange.value;
    const data = {
      id: new Date(),
      domain,
      range
    }
        this.props.dispatch({
      type:'ADD_POST',
      data});
    this.getDomain.value = '';
    this.getRange.value = '';
  }
    // handleChange = (e) => {
    //     this.setState({
    //         // domain: e.target.value
    //         [e.target.id]: e.target.value
    //     })
    // }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
      
    // }
    render() {
        return (
            <div className="CreateDictionaries">
                <div className="container">
                    <div class="card-panel">
                        <h5 class="red-text text-lighten-2">Create Dictionaries</h5>
                    </div>
                    <div class="row">
                        <form onSubmit={this.handleSubmit} class="col s12">
                            <div class="row">
                                <div class="input-field col s5">
                                    <input id="domain" ref={(input)=>this.getDomain = input}  type="number" data-length="10" />
                                    <label for="input_text">Write Domain here</label>
                                </div>
                                <div class="input-field col s5">
                                    <input id="range" type="number" ref={(input)=>this.getRange = input} data-length="10" />
                                    <label for="input_text">Write Range here</label>
                                </div>
                                <div className="col s2">
                                    <a class="btn-floating btn-medium red lighten-2 "><i class="material-icons">close</i></a>
                                </div>
                            </div>
                            <div className="row">
                                <button class="red lighten-2 btn col s10">Create</button>
                                <div className="col s2">
                                    <a class="btn-floating btn-medium red lighten-2 "><i class="material-icons">add</i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            {/* {this.state.domain}
            {this.state.range} */}
           {/* <AddDictionaries domainprop={this.state.domain} rangeProp={this.state.range}/> */}
            </div>
        );
    }
}

export default connect()(CreateDictionaries);