import "./Modal.css";
import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phone: "",
    };
  }
  handleChange = (event, stateName) => {
    this.setState({ [stateName]: event.target.value });
  };
  handleSubmit = () => {
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      phone: this.state.phone,
      id: Date.now(),
    };
    if (!!this.state.name && !!this.state.username && !!this.state.phone) {
      this.props.addUser(newUser);
      this.props.closeModal();
    } else {
      alert("Fill every gap propely!");
    }
  };
  closeConditional = (event) => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className="container" onClick={this.closeConditional}>
        <div className="inner-cont">
          <form action="#">
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(event) => this.handleChange(event, "name")}
            />
            <input
              type="text"
              id="surname"
              placeholder="Surname"
              onChange={(event) => this.handleChange(event, "username")}
            />
            <input
              type="number"
              id="telephone"
              placeholder="Telephone"
              onChange={(event) => this.handleChange(event, "phone")}
            />
          </form>
          <div className="btn-box">
            <button className="grn" onClick={this.handleSubmit}>
              Add
            </button>
            <button className="cls" onClick={this.props.closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
