import React from 'react';

import { Tabs, Button, Spin } from 'antd';
import { GEO_OPTIONS , POS_KEY } from '../constants';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {

    state = {
        isLoadingGeoLocation: false,
        error: '',
        isLoadingPosts: false,
        posts: [],
    }
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
            this.setState({error: 'geoLocation is not supported.'});
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem(POS_KEY, JSON.stringify({ lat: latitude, lon: longitude }));
        this.setState({ isLoadingGeoLocation: false });

    }

    onFailedLoadGeoLocation = (error) => {
        this.setState({ isLoadingGeoLocation: false, error: 'Failed to load geolocation : ' + error.message });
    }

    getImagePosts = () => {
        const {error , isLoadingGeoLocation} = this.state;
        if (error) {
            return <div>{error}</div>
        } else if (isLoadingGeoLocation) {
            return <Spin tip = "loading geoLocation..."/>
        } else {
            return <div>nothing shows up</div>
        }
    }
    render() {
        const operations = <Button>Creat New Post</Button>;

        return (

            <Tabs className="main-tab" tabBarExtraContent={operations}>

                <TabPane tab="Image Posts" key="1">
                    {this.getImagePosts()}
                </TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }
}