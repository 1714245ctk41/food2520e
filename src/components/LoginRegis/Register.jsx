import React from "react";
import "./LoginRegister.scss";
import FormInput from "./FormInput";
import { signUpStart } from "../../redux/user/userActions";
import { connect } from "react-redux";
import CustomButton from "../customButton/CustomButton";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  // close = () => {
  //   document.getElementsByClassName("logreg-container")[0].style.opacity = 0;
  //   setTimeout(
  //     () =>
  //       (document.getElementsByClassName("logreg-container")[0].style.display =
  //         "none"),
  //     300
  //   );
  // };
  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });
    //   //* Khi chạy xong thì chạy lệnh this.setState, empty form
    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  handleChange = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  <FormInput
                    value={displayName}
                    name="displayName"
                    type="text"
                    handleChange={this.handleChange}
                    label="Display Name"
                    required
                  />
                  <span className="underline" />
                </td>
              </tr>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  {" "}
                  <FormInput
                    value={email}
                    name="email"
                    type="email"
                    handleChange={this.handleChange}
                    label="Email"
                    required
                  />
                  <span className="underline" />
                </td>
              </tr>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  {" "}
                  <FormInput
                    value={password}
                    name="password"
                    type="password"
                    handleChange={this.handleChange}
                    label="Password"
                    required
                  />
                  <span className="underline" />
                </td>
              </tr>
              <tr>
                <td className="logreg-input-container" colSpan="2">
                  {" "}
                  <FormInput
                    value={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    handleChange={this.handleChange}
                    label="Conform Password"
                    required
                  />
                  <span className="underline" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                {/* colspan="2" */}
                <td>
                  <CustomButton className="SIGNUP" type="submit">
                    Sign up{" "}
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
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Register);
