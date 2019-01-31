import React from 'react';

//redux-form
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderError({ error, touched }){
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }



  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = `field ${
      meta.error && meta.touched ?
      'error'  
      : ''
    }`;
    return (
      <div className={className} autoComplete="off">
        <label>{label}</label>
        <input {...input}/>
        <div>
          {this.renderError(meta)}
        </div>
      </div>
    )
  };

  onSubmit = userInput => {
    // e.preventDefault();
    // 여기서 action creator 호출 
    console.log(userInput);
  }

  render() {
    // console.log(props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
      className="ui form error">
        <Field 
        label="제목"
        name="title" component={this.renderInput} />
        <Field 
        label="내용"
        name="description" component={this.renderInput} />
      <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = userInput => {

const errors = {};

   if(!userInput.title){
// 유저 타이틀 미입력시에만 실행
    errors.title = '타이틀을 입력해주세요 😮';
   }
   if(!userInput.description){
     errors.description = '내용을 입력해주세요 🤔';
   }
   return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);
