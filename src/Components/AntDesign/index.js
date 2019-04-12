import React from 'react';
import styled from 'styled-components';
import { DatePicker, message, Alert, Button, Icon, Menu, Dropdown, Drawer, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`margin: 2rem;`;
const SUl = styled.ul``;

const SLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SLink = styled.a`
  font-size: 1rem;
  display: inline-block;
  margin-left: 10px;
  color: #34495e;
`;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

class AntDesign extends React.Component {
  state = {
    date: null,
    visibleDrawer: false,
    visibleModal: false
  };

  handleDateChainge = (date) => {
    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    this.setState({ date });
  };

  showDrawer = () => {
    this.setState({
      visibleDrawer: true
    });
  };

  onCloseDrawer = () => {
    this.setState({
      visibleDrawer: false
    });
  };

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleModalOk = (e) => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };

  handleModalCancel = (e) => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };

  render() {
    const { date } = this.state;
    return (
      <Container>
        <SUl>
          <SLi>
            <Title>DatePicker</Title>
            <DatePicker onChange={this.handleDateChainge} />
            <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
          </SLi>
          <SLi>
            <Title>
              Button
              <SLink href="https://ant.design/components/button/">
                <FontAwesomeIcon icon={faLink} />
              </SLink>
            </Title>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
          </SLi>
          <SLi>
            <Title>
              Icons
              <SLink href="https://ant.design/components/icon/">
                <FontAwesomeIcon icon={faLink} />
              </SLink>
            </Title>
            <Icon type="rocket" style={{ fontSize: '2rem', color: 'black' }} />
            <Icon type="facebook" style={{ fontSize: '2rem', color: 'blue' }} />
          </SLi>
          <SLi>
            <Title>
              Dropdown
              <SLink href="https://ant.design/components/dropdown/">
                <FontAwesomeIcon icon={faLink} />
              </SLink>
            </Title>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menu} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter">
              <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
          </SLi>
          <SLi>
            <Title>
              Drawer
              <SLink href="https://ant.design/components/drawer/">
                <FontAwesomeIcon icon={faLink} />
              </SLink>
            </Title>
            <Button type="primary" onClick={this.showDrawer}>
              Open
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onCloseDrawer}
              visible={this.state.visibleDrawer}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </SLi>
          <SLi>
            <Title>
              Modal
              <SLink href="https://ant.design/components/modal/">
                <FontAwesomeIcon icon={faLink} />
              </SLink>
            </Title>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visibleModal}
              onOk={this.handleModalOk}
              onCancel={this.handleModalCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </SLi>
        </SUl>
      </Container>
    );
  }
}

export default AntDesign;
