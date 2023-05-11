import "./Table.css";
import React from "react";
import ButtonDel from "../Buttons/ButtonDel";
import ButtonAdd from "../Buttons/ButtonAdd";
import Modal from "../Modal/Modal";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
      loading: true,
      isVisible: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          loading: false,
          users: json,
        })
      );
  }
  delete = (index) => {
    const newUsers = this.state.users.filter((item) => item.id !== index);
    this.setState({ users: newUsers });
  };
  closeModal = () => {
    this.setState({ isVisible: false });
  };
  addUser = (newUser) => {
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };
  render() {
    return this.state.loading ? (
      <div>Loading ...</div>
    ) : (
      <div className="box">
        <table>
          <tbody>
            {this.state.users.map((item) => {
              return (
                <tr key={item.id}>
                  <td key={`name-${item.id}`}>{item.name}</td>
                  <td key={`username-${item.id}`}>{item.username}</td>
                  <td key={`phone-${item.id}`}>{item.phone}</td>
                  <td>
                    <ButtonDel
                      text="Delete"
                      onClick={() => this.delete(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ButtonAdd
          className="green"
          text="Add contact"
          click={() => this.setState({ isVisible: true })}
        />
        {this.state.isVisible && (
          <Modal
            isVisible={this.state.isVisible}
            closeModal={this.closeModal}
            addUser={this.addUser}
          />
        )}
      </div>
    );
  }
}
export default Table;
