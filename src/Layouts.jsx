// import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import { useState } from 'react';
// const { Header, Content, Footer, Sider } = Layout;

// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
// const items = [

//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Files', '9', <FileOutlined />),
// ];

// const Layouts = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     return (
//         <Layout
//             style={{
//                 minHeight: '100vh',
//             }}
//         >
//             <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//                 <img
//                     className="logo"
//                     src="https://www.skysens.io/images/white-logo.png"
//                 />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//             </Sider>
//             <Layout className="site-layout">
//                 <Header
//                     className="site-layout-background"
//                     style={{
//                         padding: 0,
//                         backgroundColor: "blue"
//                     }}
//                 />
//                 <Content
//                     style={{
//                         margin: '0 16px',
//                     }}
//                 >
//                     <Breadcrumb
//                         style={{
//                             margin: '16px 0',
//                         }}
//                     >
//                         <Breadcrumb.Item>User</Breadcrumb.Item>
//                         <Breadcrumb.Item>Bill</Breadcrumb.Item>
//                     </Breadcrumb>
//                     <div
//                         className="site-layout-background"
//                         style={{
//                             padding: 24,
//                             minHeight: 360,
//                         }}
//                     >
//                         Bill is a cat.
//                     </div>
//                 </Content>
//                 <Footer
//                     style={{
//                         textAlign: 'center',
//                     }}
//                 >
//                     Ant Design ©2018 Created by Ant UED
//                 </Footer>
//             </Layout>
//         </Layout>
//     );
// };

// export default Layouts;