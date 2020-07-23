import React from "react";
import { Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

const NewsCard = (props) => {
    const { data, navigation } = props;
    return (
        <TouchableOpacity style={Styles.container} onPress={() => navigation.navigate("NewsDesc", {
            data
        })}>
            <ImageBackground style={Styles.background} source={{ uri: data.urlToImage }} imageStyle={{ borderRadius: 10 }}>
                <Text style={Styles.source}>{data.source.name}</Text>
                <Text style={Styles.title}>{data.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: "white",
        fontWeight: "700",
        padding: 5
    },
    source: {
        fontSize: 16,
        color: "white",
        fontWeight: "700",
        padding: 5,
        alignSelf: "flex-end"
    },
    background: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between"
    },
    container: {
        width: "95%",
        height: 150,
        marginLeft: "2.5%",
        marginRight: "2.5%",
        marginVertical: 5
    }

})

export default NewsCard;