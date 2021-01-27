import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function FitbitData(){
  
    let date = new Date();
    let todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const [isLoading, setLoding] = React.useState(true);
    const [data, setData] = React.useState('');

    let url = 'https://api.fitbit.com/1/user/-/activities.json';
    let accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkM3OEoiLCJzdWIiOiI5NzZTNFAiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNjExNzkxMTgwLCJpYXQiOjE2MTE3NjIzODB9.OrVi7Y8ujf4ha5czokR-LTTebeV_nPrPiI2A1-N0F68";
    if(isLoading){
      fetch(url, {
        "method": "GET",
        "headers": {
          "Authorization": "Bearer " + accessToken
        }
      })
      .then(response => response.json())
      .then(data=>{
        setData(data);
        setLoding(false);
      })
      .catch(err=>{
        console.log(err);
      })
      .finally(()=>
        setLoding(false)
      );
    }
    
    const activeData = Object.values(data);
    console.log(activeData[0]);
    return(
      <View>
        <Text>{todayDate} Hi</Text>
      </View>
    )
  
}

/*
https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22C78J&redirect_uri=http://localhost&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight
auth code = bcdfa626461a4fd7ffa45c4ff2ac9cc4f5c65d65
*/