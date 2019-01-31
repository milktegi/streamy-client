import React from 'react';

//redux-form
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput = ({ input }) => {
    return <input {...input} />;
  };

  onSubmit = formValues => {
    // e.preventDefault();
    console.log(formValues);
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

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
