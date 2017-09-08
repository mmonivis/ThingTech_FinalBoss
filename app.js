import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

var Dimensions = require('Dimensions');

var API_URL = 'https://serene-scrubland-62943.herokuapp.com/api/places/';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            apiDataItem: []
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(API_URL)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
            this.setState({
                apiDataItem: responseData.data
            });
        })
        .done();
        console.log(this.state.apiDataItem)
    }

    render(){

        // console.log(this.state.apiDataItem)

        var apiItem = this.state.apiDataItem.map((item,index)=>{
            return (
                <View style={styles.itemContainer} key={index}>
                    <Image
                      style={styles.image}
                      source={{uri: item.image}}
                    />
                    <Text style={styles.title} key={index}>
                        {item.name}
                    </Text>
                    <Text style={styles.text}>
                        {item.description}
                    </Text>
                    <Text style={styles.text}>
                        {item.street}
                    </Text>
                    <Text style={styles.text}>
                        {item.city}, {item.state} {item.zip}
                    </Text>
                    <Text style={styles.text}>
                        {item.latitude}, {item.longitude}
                    </Text>
                </View>
            )
        })

        return (
            <ScrollView>
                <View style={styles.container}>
                    {apiItem}
                </View>
            </ScrollView>
        )
    }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        margin: 10,
      },
      itemContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        borderWidth: 2,
        borderColor: '#496568',
        backgroundColor: '#875685',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderColor: '#666',
        borderWidth: 2,
        backgroundColor: '#999',
        borderRadius: 50,
      },
      title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      text: {
        fontSize: 12,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 5,
      },
    });

export default App;