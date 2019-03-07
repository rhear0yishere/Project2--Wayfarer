import React, { Component } from 'react';

class EditPost extends Component {
  state = {
    tip: {
      _id: this.props.tip._id,
      body: this.props.tip.text,
    }
  }

  onChange = (event) => {
    this.setState({
      tip: {
        _id: this.props.tip._id,
        body: event.target.value
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let tip = this.state.tip;

    this.props.updateTodo(tip._id, tip);
    this.setState({ 
      tip: {
        _id: this.props.tip._id,
       body: ""
      } 
    });
  }

  render() {
    return (
      <div>
        <div className="updateTodoForm">
          <form onSubmit={ this.onSubmit }>
            <input 
              type="text"
              onChange={ this.onChange }
              placeholder="update this tip here"
              value={(this.state && this.state.tip.body) || ''} />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPost;
