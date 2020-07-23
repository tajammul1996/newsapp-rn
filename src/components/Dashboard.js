import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, FlatList, ActivityIndicator } from 'react-native';
import NewsCard from "./NewsCard";

export default function Dashboard(props) {
    const [articles, setArticles] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=242d96e64f34477ca3077bed18b69ddd");
        const data = await response.json();
        setArticles(data.articles);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const renderList = () => {
        if (articles.length > 0) {
            return (
                <FlatList
                    data={articles}
                    renderItem={({ item }) => <NewsCard data={item} navigation={props.navigation} />}
                    keyExtractor={(item, index) => item.publishedAt}
                    initialNumToRender={5}
                />
            )
        }
        return <ActivityIndicator size="large" />
    }

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            {renderList()}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        paddingTop: Platform.OS == "android" ? 25 : 0
    }
})