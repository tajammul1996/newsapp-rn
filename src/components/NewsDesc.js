import React from "react";
import { Text } from "react-native";

const NewsDesc = ({ navigation, route }) => {
    console.log(route.params);
    return (
        <Text>News description goes here!!!</Text>
    );
}

export default NewsDesc;