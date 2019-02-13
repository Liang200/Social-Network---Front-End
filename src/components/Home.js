import React from 'react';

import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
    render() {
        const operations = <Button>Creat New Post</Button>;
        return (
            <Tabs className="main-tab" tabBarExtraContent={operations}>
                <TabPane tab="Image Post" key="1">Content of tab 1</TabPane>
                <TabPane tab="Video Post" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }
}