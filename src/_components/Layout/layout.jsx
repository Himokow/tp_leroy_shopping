import React from 'react';
import Header from "./header";
import {Layout} from "antd";

const { Content } = Layout;

const CustomLayout = ({children}) => {
    return (
        <Layout>
            <Header/>
            <Content>
                {children}
            </Content>
        </Layout>
    )
}

export default CustomLayout;