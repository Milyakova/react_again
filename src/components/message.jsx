import "./message.styles.css";
import React, { useState } from "react";

export const Message = ({ name, bold }) => {
  const [showForm, setForm] = useState(false);
  const toggleForm = (params) => {
    setForm((prevState) => (prevState === true ? false : true));
  };

  return (
    <>
      <h2 className={!bold ? " header" : ""}>{name} компонент</h2>
      <div className="flex">
        <button onClick={toggleForm} className="btn">
          show code
        </button>
        {showForm && (
          <div className="code-wrapper">
            <code className="code">
              function Welcome(props) {"{"}
              <br /> return Привет, {"{"}props.name{"}"}
              ;<br />
              {"}"}
              <br />
            </code>
          </div>
        )}
      </div>
    </>
  );
};

export class MessageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }
  render() {
    const { name, bold } = this.props;
    return (
      <>
        <h2 className={!bold ? " header" : ""}>{name} компонент</h2>
        <div className="flex">
          <button
            onClick={() => this.setState({ showForm: !this.state.showForm })}
            className="btn"
          >
            show code
          </button>
          {this.state.showForm && (
            <div className="code-wrapper">
              <code className="code">
                class Welcome extends React.Component {"{"}
                <br />
                render() {"{"}
                <br /> return Привет, {"{"}this.props.name{"}"}
                ;<br />
                {"}"}
                {"}"}
              </code>
            </div>
          )}
        </div>
      </>
    );
  }
}
