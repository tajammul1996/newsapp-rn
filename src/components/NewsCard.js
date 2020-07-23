import React from "react";
import { ImageBackground, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const NewsCard = (props) => {
    return (
        <TouchableOpacity style={Styles.container}>
            <ImageBackground source={{ uri: props.data.urlToImage }} style={Styles.background} imageStyle={{ borderRadius: 10 }}>
                <Text style={Styles.source}>{props.data.source.name}</Text>
                <Text style={Styles.title}>{props.data.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 150,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        borderColor: "rgba(0,0,0,0)",
        marginVertical: 5
    },
    background: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between"
    },
    source: {
        fontSize: 16,
        fontWeight: "700",
        color: "white",
        padding: 5,
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: "white",
        padding: 5,
        alignSelf: "flex-start"
    }
})

export default NewsCard;