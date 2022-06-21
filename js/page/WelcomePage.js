import React, { Component } from 'react';
import { Text } from 'react-native';


class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    async doLaunch() {
        const { navigation } = this.props;
        this.time = setTimeout(
            () => {
                //TODO: boarding ( user isLogin check )
                navigation.navigate('LoginPage', {});
            },
            200
        )
    }

    render() {
        return (
            <Text>
                WelcomePage
            </Text>
        );
    }
}

export default HomePage;