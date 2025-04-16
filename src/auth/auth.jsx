import "./auth.css"
import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { login, signup } from "./authActions"
import Row from "../common/layout/row"
import Grid from "../common/layout/grid"
import If from "../common/operator/if"
import Messages from "../common/msg/messages"
import Input from "../common/form/inputAuth"

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { loginMode: true }
  }

  toggleMode = () => {
    this.setState(prev => ({ loginMode: !prev.loginMode }))
  }

  handleFormSubmit = (values) => {
    const { login, signup } = this.props
    this.state.loginMode ? login(values) : signup(values)
  }

  render() {
    const { loginMode } = this.state
    const { handleSubmit } = this.props

    return (
      <div className="login-box">
        <div className="login-logo">
          <strong>Finanças</strong> Pessoais
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">
            {loginMode ? "Faça seu login" : "Crie sua conta"}
          </p>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <Field
              component={Input}
              type="text"
              name="name"
              placeholder="Digite seu nome"
              icon="user"
              hide={loginMode}
            />
            <Field
              component={Input}
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              icon="envelope"
            />
            <Field
              component={Input}
              type="password"
              name="password"
              placeholder="Sua senha"
              icon="lock"
            />
            <Field
              component={Input}
              type="password"
              name="confirm_password"
              placeholder="Confirme a senha"
              icon="lock"
              hide={loginMode}
            />
            <Row>
              <Grid cols="4">
                <button
                  type="submit"
                  className="btn btn-success btn-block btn-flat"
                >
                  {loginMode ? "Acessar" : "Cadastrar"}
                </button>
              </Grid>
            </Row>
          </form>
          <br />
          <a onClick={this.toggleMode}>
            {loginMode
              ? "Não tem conta? Cadastre-se!"
              : "Já possui uma conta? Entre aqui!"}
          </a>
        </div>
        <Messages />
      </div>
    )
  }
}

Auth = reduxForm({ form: "authForm" })(Auth)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ login, signup }, dispatch)

export default connect(null, mapDispatchToProps)(Auth)
