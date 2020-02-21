
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Events from './ events';

class DetailScreen extends React.Component {


    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItem: 'center',
            }}>

                <TouchableOpacity
                    onPress={() => {
                        Events.publish("UPDATE_COUNTER")
                    }}>

                    <Text style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: 16,
                        fontSize: 16
                    }}>Click Here</Text>
                </TouchableOpacity>
            </View>

        )
    }
}






export default DetailScreen;
