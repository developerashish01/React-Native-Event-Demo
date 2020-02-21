
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Events from './ events';

class ListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            counter: 0
        }

        this.refreshEvent = Events.subscribe('UPDATE_COUNTER', () => {

            let counter = this.state.counter
            counter = counter + 1
            this.setState({
                counter: counter
            })

        });
    }

    removeMenuListener() {
        this.refreshEvent.remove()
    }

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItem: 'center',
            }}>

                <Text style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 16,
                    fontSize: 16
                }}>Counter: {this.state.counter}</Text>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('DetailScreen')
                    }}>

                    <Text style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: 16,
                        fontSize: 16
                    }}>Go to Next Screen</Text>
                </TouchableOpacity>
            </View>

        )
    }
}






export default ListScreen;
