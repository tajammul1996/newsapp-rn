import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform } from 'react-native';
import NewsCard from "./src/components/NewsCard";

const data = {
  source: {
    id: null,
    name: "Global Times"
  },
  author: null,
  title: "US-led anti-China alliance set for all-out failure - Global Times",
  description: "The latest US attempt to build a “global anti-China alliance” is doomed to fail as Western countries don’t share its policy towards China. China needs to convince the rest of the world by enhancing opening-up and reform, and be more responsible on internatio…",
  url: "https://www.globaltimes.cn/content/1195351.shtml",
  urlToImage: "https://www.globaltimes.cn/Portals/0/attachment/2020/2020-07-22/05f8be82-0c4d-4966-ac0f-16a537fe966d.jpeg",
  publishedAt: "2020-07-22T14:00:49Z",
  content: "The latest US attempt to build a global anti-China alliance is doomed to fail as Western countries don't share its policy toward China. China needs to  convince the rest of the world by enhancing o… [+5507 chars]"
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Text>Hello world!</Text>
      <NewsCard data={data} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 25 : 0
  }
})