import React from "react";
import "./LoginRegister.scss";
import FormInput from "./FormInput";
import CustomButton from "../customButton/CustomButton";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "michael123@gmail.com",
      password: "michael123",
    };
  }
  close = () => {
    document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
    setTimeout(
      () =>
        (document.getElementsByClassName("logreg-container")[0].style.display =
          "none"),
      300
    );
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };
  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  <FormInput
                    value={this.state.email}
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    label="Email"
                  />

                  <span className="underline" />
                </td>
              </tr>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  {" "}
                  <FormInput
                    value={this.state.password}
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    label="Password"
                  />
                  <span className="underline" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                {/* colspan="2" */}
                <td>
                  <CustomButton className="SIGNIN" type="submit">
                    SIGN IN{" "}
                  </CustomButton>
                </td>
              </tr>
              <tr>
                {/* colspan="2" */}
                <td>
                  <CustomButton
                    className="SIGNINGOOGLE"
                    //* chúng ta muốn click vào chạy thay vì enter
                    type="button"
                    onClick={googleSignInStart}
                  >
                    SIGN IN WITH GOOGLE{" "}
                  </CustomButton>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
