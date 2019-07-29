import React from 'react';
import { Form, Row, Col, Button, Notify, Input, Checkbox } from 'uiw';
import { connect } from 'react-redux';
import logo from '../../assets/logo-dark.svg';
import styles from './index.module.less';

class Login extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col span="4">
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <Form
            resetOnSubmit={false}
            onSubmit={({ current }) => {
              const errorObj = {};
              if (!current.username) errorObj.username = '用户名不能为空！';
              if (!current.password) errorObj.password = '密码不能为空！';
              if (Object.keys(errorObj).length > 0) {
                const err = new Error();
                err.filed = errorObj;
                throw err;
              }
              this.props.submit(current);
            }}
            onSubmitError={(error) => {
              if (error.filed) {
                return { ...error.filed };
              }
              return null;
            }}
            fields={{
              username: {
                labelClassName: 'fieldLabel',
                labelStyle: { width: 60 },
                labelFor: 'username',
                children: <Input disabled={loading} preIcon="user" id="username" placeholder="用户名: admin" />,
              },
              password: {
                labelClassName: 'fieldLabel',
                labelStyle: { width: 60 },
                labelFor: 'password',
                children: <Input disabled={loading} preIcon="lock" id="password" type="password" placeholder="密码: uiw" />,
              },
              terms: {
                style: { margin: 0 },
                validator: currentValue => !currentValue && '必须统一服务条款',
                children: <Checkbox disabled={loading} value="1">已阅读并同意</Checkbox>,
              },
            }}
          >
            {({ fields, canSubmit }) => {
              return (
                <>
                  <Row>
                    <Col>{fields.username}</Col>
                  </Row>
                  <Row>
                    <Col>{fields.password}</Col>
                  </Row>
                  <Row style={{ marginBottom: 10 }}>
                    <Col align="middle">{fields.terms}</Col>
                    <Col><a href="#">服务条款</a></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button loading={loading} disabled={!canSubmit()} block type="dark" htmlType="submit">登录</Button>
                    </Col>
                  </Row>
                </>
              );
            }}
          </Form>
          <div className={styles.footer}>Copyright © 2018 <a href="https://github.com/uiwjs/uiw">@uiw</a> 团队出品</div>
        </Col>
      </Row>
    );
  }
}

export default connect(({ login, loading }) => ({
  loading: loading.effects.login.submit,
  account: login.account,
}), ({ login }) => ({
  submit: login.submit,
}))(Login);
