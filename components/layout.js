import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const name = 'Company Logo in the header'
export const siteTitle = 'Next.js Sample Website'

export default function MainLayout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="City Compass"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Layout>
      <Header className="header">
        <img className="header-logo" src="/images/Geografia-Logos.png" />
      </Header>

      <Layout style={{ padding: '3rem' }}>
        <Sider width={255} className="site-layout-background">
          <p>something</p>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Menu mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>

    </div>
  )
}
