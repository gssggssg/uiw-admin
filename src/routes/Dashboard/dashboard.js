import React from 'react';
import { Avatar, Row, Col, Card } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './dashboard.module.less';

export default class Dashboard extends React.Component {
  render() {
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar size="large" src="https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png" />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            早安，热巴，祝你开心每一天！
          </div>
          <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时。</div>
        </div>
      </div>
    );
    const pageHeaderExtra = (
      <div className={styles.pageHeaderExtra}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>2<span> / 14</span></p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>1,235</p>
        </div>
      </div>
    );
    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={pageHeaderExtra}>
        <Row gutter={16} style={{ margin: '15px 7px' }}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 15 }}
              title="进行中的项目"
              bordered={false}
              extra={<a href="#">全部项目</a>}
              bodyStyle={{ padding: 0 }}
            >
              <span>dddd</span>
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
