import React, { Component } from 'react';
import { connect } from 'react-redux';
import SteramForm from './StreamForm';
import { createStream } from '../../actions';
class StreamCreate extends Component {
 
    onSubmit = ( formValues ) => {
        this.props.createStream( formValues );
    }
    render (){
      
        return (
            <div>
                 <h3>Create Form </h3>
                <SteramForm onSubmit={ this.onSubmit } />
            </div>
        );
    }
}
export default connect(null,{ createStream })(StreamCreate);