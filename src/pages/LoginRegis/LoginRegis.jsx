import React from "react";

import "./LoginRegis.scss";
import Register from "../../components/LoginRegis/Register";
import Login from "../../components/LoginRegis/Login";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/userActions";

function close() {
  document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
  setTimeout(
    () =>
      (document.getElementsByClassName("logreg-container")[0].style.display =
        "none"),
    500
  );
}

class LoginRegis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeForm: true,
    };
  }
  handleChangeForm = (evt) => {
    const logregChangeForm = document.getElementsByClassName(
      "logreg-changeForm"
    );
    for (let i = 0; i < logregChangeForm.length; i++) {
      logregChangeForm[i].className = logregChangeForm[i].className.replace(
        "logreg-changeForm-active",
        ""
      );
    }
    evt.target.className += " logreg-changeForm-active";
    this.setState({
      changeForm: !this.state.changeForm,
    });
  };

  render() {
    const { signOutStart } = this.props;
    return (
      <div className="logreg-container">
        <div className="logreg">
          {this.props.currentUser ? (
            <div className="block-signout">
              <h2>Hello {this.props.currentUser.displayName}</h2>
              <span className="option" onClick={signOutStart}>
                SIGN OUT
              </span>
            </div>
          ) : (
            <div>
              <h2>
                {" "}
                <span
                  className="logreg-changeForm logreg-changeForm-active"
                  onClick={this.handleChangeForm}
                >
                  Login
                </span>{" "}
                |{" "}
                <span
                  className="logreg-changeForm"
                  onClick={this.handleChangeForm}
                >
                  Register
                </span>
              </h2>
              {this.state.changeForm ? <Login /> : <Register />}
            </div>
          )}
        </div>
        <div className="close-block" onClick={this.close}>
          <i className="fas fa-times"></i>
        </div>
        <div className="override-logreg" onClick={close} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginRegis);
