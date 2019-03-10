import React, { Component } from 'react';

class EditPost extends Component {
  state = {
    tip: {
      tipId: this.props.tip._id,
      text: this.props.tip.text,
      title: this.props.tip.title
    }
  }

  onChange = (event) => {
    this.setState({
      tip: {
        tipId: this.props.tip._id,
        text: event.target.value,
        title:event.target.value
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let tip = this.state.tip;

    this.props.updateTip(tip._id, tip);
    this.setState({ 
      tip: {
        tipId: this.props.tip._id,
        title: " ",
        text: " "
      } 
    });
  }

  render() {
    return (
      <div>
        <div className="updateTipForm">
          <form  onSubmit={ this.onSubmit }>
            <input 
            className="updateTipFormInput"
              type="text"
              onChange={ this.onChange }
              placeholder="update this tip here"
              value={(this.state && this.state.tip.text) || ''} />
            <button className= "save" type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPost;
