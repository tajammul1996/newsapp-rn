import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, Platform, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import NewsCard from "./NewsCard";

export default function Dashboard(props) {
    console.log("dashboard props", props);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const URL = "PUT_YOUR_NEWS_API_URL";
        const response = await fetch(URL);
        const data = await response.json();
        setArticles(data.articles);
    }

    const renderArticles = () => {
        if (articles.length > 0) {
            return (<FlatList
                data={articles}
                renderItem={({ item }) => <NewsCard data={item} navigation={props.navigation} />}
                keyExtractor={(item) => item.publishedAt}
                initialNumToRender={5}
            />)
        }
        return <ActivityIndicator size="large" />
    }

    return (
        <SafeAreaView style={Styles.mainContainer}>
            {renderArticles()}
        </SafeAreaView>
    );
}


const Styles = StyleSheet.create({
    mainContainer: {
        marginTop: Platform.OS === 'android' ? 25 : 0
    }
})