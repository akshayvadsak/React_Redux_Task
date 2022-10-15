import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth.thunk";
import { setCredentialsToState } from "../redux/login.slice";
import { isEmail, isPassword } from "../common/Validation";
import RedirectButton from "../common/RedirectButton";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: "",
      passwordError: "",
    };
  }

  onFieldValueChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      this.setState({ emailError: isEmail(value) });
    }
    if (name === "password") {
      this.setState({ passwordError: isPassword(value) });
    }
    this.props.setCredentialsToState({ [name]: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await this.props.loginUser({
      EMAIL: this.props.auth.credentials.email,
      PASSWORD: this.props.auth.credentials.password,
    });
    if (this.props.auth.status === "success") {
      alert(this.props.auth.msg);
    } else {
      alert(this.props.auth.msg);
    }
  };
  render() {
    let disabled = true;
    if (
      this.state.emailError === "" &&
      this.state.passwordError === "" &&
      this.props.auth.credentials.email !== "" &&
      this.props.auth.credentials.password !== ""
    ) {
      disabled = false;
    }
    return (
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form onSubmit={this.onSubmit}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            name="email"
                            value={this.props.auth.credentials.email}
                            onChange={this.onFieldValueChange}
                          />
                          <div className="text-red-700">
                            {this.state.emailError}
                          </div>
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name="password"
                            value={this.props.auth.credentials.password}
                            onChange={this.onFieldValueChange}
                          />
                          <div className="text-red-700">
                            {this.state.passwordError}
                          </div>
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            type="submit"
                            className="inline-block px-6 py-3 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593]"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            disabled={disabled}
                          >
                            Login
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>

                          <RedirectButton
                            buttonName="Register"
                            redirect={"/register"}
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-[#ee7724]  via-[#dd3675] to-[#b44593]">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
  setCredentialsToState,
};

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
