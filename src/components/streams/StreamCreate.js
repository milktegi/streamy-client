import React from 'react';

//redux-form
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput = ({ input }) => {
    return <input {...input} />;
  };

  onSubmit = userInput => {
    // e.preventDefault();
    // 여기서 action creator 호출 
    console.log(userInput);
  }

  render() {
    // console.log(props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = userInput => {

const errors = {};

   if(!userInput.title){
// 유저 타이틀 미입력시에만 실행
    errors.title = '타이틀 입력해주세요';
   }
   if(!userInput.description){
     errors.description = '내용을 입력해주세요';
   }
   return errors;
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
