import React, { Component } from 'react'
import { Layout, Menu, Icon, Avatar } from 'antd'
import './frame.less'
import { adminRoutes } from '../../routes'
import { withRouter } from 'react-router-dom'


const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

const menu = adminRoutes.filter(item => item.isNav === true)
@withRouter
class Frame extends Component {

    state = {
        collapsed: false,
    }
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider collapsible collapsed={this.state.collapsed}>
                    <div className="logo forest-logo">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size={64}/>
                        <span>senlinren_admin</span>
                        <span>超级管理员</span>
                    </div>
                    <Menu 
                        theme="dark" 
                        mode="inline" 
                        defaultSelectedKeys={['1']}
                        onClick={this.onMenuClick}
                        selectedKeys={[this.props.location.pathname]}
                    >
                        {
                            menu.map(item => {
                                return (
                                    <SubMenu
                                        key={item.pathname}
                                        onTitleClick={this.onMenuClick}
                                        title={
                                        <span>
                                            <Icon type={item.icon} />
                                            {item.title}
                                        </span>
                                        }
                                    >
                                        {   item.children
                                            ?
                                            item.children.map(element => {
                                                return (
                                                    <Menu.Item 
                                                        key={element.pathname}
                                                        
                                                    >{element.title}</Menu.Item>
                                                )
                                            })
                                            :
                                            null
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, display: 'flex',justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <h1>森林环保服务平台</h1>
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff'
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Frame
