import { HomeOutlined, FolderOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <Header style={{ background: 'white' }}>
                <Row justify="space-between">
                    <Col flex="auto">
                        <Menu mode="horizontal">
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                                Home
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2" icon={<FolderOutlined />}>
                                MSSQL
                                <Link to="/mssql" />
                            </Menu.Item>
                            <Menu.Item key="3" icon={<FolderOutlined />}>
                                MongoDB
                                <Link to="/mongodb" />
                            </Menu.Item>
                            <Menu.Item key="4" icon={<FolderOutlined />}>
                                Neo4j
                                <Link to="/neo4j" />
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row >
            </Header >
        </>
    )
}

export default NavigationBar;