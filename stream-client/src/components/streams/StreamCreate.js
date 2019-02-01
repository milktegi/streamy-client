import React from 'react';

//redux-form
import { Field, reduxForm } from 'redux-form';

//actions
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../streams/StreamForm'

class StreamCreate extends React.Component {

  onSubmit = userInput => {
    // e.preventDefault();
    // 여기서 action creator 호출 
    console.log(userInput);
    this.props.createStream(userInput);
  }

  render() {
    // console.log(props);
    return (
      <div>
        <h3>새 스트림 만들기</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}




export default connect(null, { createStream })(StreamCreate);
