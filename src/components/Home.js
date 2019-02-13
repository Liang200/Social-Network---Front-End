import React from 'react';

import { Tabs, Button } from 'antd';
import { GEO_OPTIONS } from '../constants';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
    componentDidMount() {
        // get location when render
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(
                this.onSuccessLoadGeoLocation,
                this.onFailedLoadGeoLocation,
                GEO_OPTIONS
            );

        } else {
            /* geolocation IS NOT available */
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        console.log('success' , position);
    }

    onFailedLoadGeoLocation = (position) => {
        console.log('error' , position);
    }
    render() {
        const operations = <Button>Creat New Post</Button>;

        return (

            <Tabs className="main-tab" tabBarExtraContent={operations}>
                <TabPane tab="Image Posts" key="1">Content of tab 1</TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }
}