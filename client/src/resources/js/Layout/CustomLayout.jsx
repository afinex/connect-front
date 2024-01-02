    import React from "react";
    import { Layout } from "antd";
    import SideNav from "../Components/SideNav";

    const { Header, Content, Footer } = Layout;

    const CustomLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: "100vh" }} hasSider>
        <SideNav />
        <Layout style={{ marginLeft: 200 }}>
            <Header style={{ padding: 0, background: "#F5F5F5" }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div style={{ padding: 24, textAlign: "center", flex: 1 }}>
                {children}
            </div>
            </Content>
            <Footer style={{ textAlign: "center", marginTop: "auto" }}>
            Connect© 2023 Developed by Fin
            </Footer>
        </Layout>
        </Layout>
    );
    };

    export default CustomLayout;
