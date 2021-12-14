import ListOfResult from "../reusableComponent/ListOfResult";
import {
  StyleSheet,
  ScrollView,
  View,
  Text  
} from "react-native";
import React, { useState } from "react";
import SearchComponent from "../reusableComponent/SearchComponent";
import userResults from "../resultData/userResults";

const HomeScreen = ({ navigation }) => {
  const [givenWord, setword] = useState("");
  const [searchApi, resData, errorInfo] = userResults();

  const FilterRes = (price) => {
    return (
      resData &&
      resData.filter((obj) => {
        return obj.price === price;
      })
    );
  };

  return (
    <View>
      <SearchComponent        
        word={givenWord}
        onWordChange={setword}
        style={{ flex: 1 }}
        onWordSubmit={() => searchApi(givenWord)}
      />
      {errorInfo ? <Text> {errorInfo} </Text> : null}      
      {/* <Text>we have found {resData && resData.length} resultsData </Text> */}
      <ScrollView style={{ padding: 20 }}>
        <ListOfResult          
          titleData="Cheaper"
          resultsData={resData}
        />
        {/* <ListOfResult resultsData={FilterRes("$$$")} titleData="pastas" />
        <ListOfResult
          resultsData={FilterRes("$$")}
          titleData="bit picher"
        /> */}        
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
