import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
 
// const styles = StyleSheet.create({
//   container: {

//   },
// });
 
const LandingScreen = ({ navigation }) => {
    const buttons = ['Hello', 'World', 'Buttons']
    return (
        <ScrollView >
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Image 
                    source={require('../AwesomeProject/universe1.jpg')} 
                    style={{
                        height: 135,
                        width: '100%',
                        resizeMode: 'stretch'
                    }}
                />
                <Text>Protected Home Screen</Text>
                <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Home')
                }
                />
            </Card>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Image 
                    source={require('../AwesomeProject/universe1.jpg')} 
                    style={{
                        height: 135,
                        width: '100%',
                        resizeMode: 'stretch'
                    }}
                />
                <Text>Protected Home Screen</Text>
                <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Home')
                }
                />
            </Card>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Image 
                    source={require('../AwesomeProject/universe1.jpg')} 
                    style={{
                        height: 135,
                        width: '100%',
                        resizeMode: 'stretch'
                    }}
                />
                <Text>Protected Home Screen</Text>
                <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Home')
                }
                />
            </Card>
        </ScrollView >
    );
};
 
export default LandingScreen;