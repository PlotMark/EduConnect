import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await AsyncStorage.getItem("token").then((value) => {
          setUserId(value);
        });
        
        // console.log("16");
        console.log(userId);
        const response = await fetch(`http://172.18.18.113:4000/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${userId}`,
          },
        });
        console.log(response);

        if (response.error) {
          const errorData = await response.json();
          setErrmsg(errorData.error);
        } else {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    fetchData();
  });
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style = {{padding:10,width:'100%',backgroundColor:'#000',height:200}}>
        </View>
        <View style={{alignItems:'center'}}>
          <Image source={require('../../assets/logo1.jpg')} style={{width:140,height:140,borderRadius:100,marginTop:-70}}></Image>
          <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>Earth Venus</Text>
          <Text style={{fontSize:15,fontWeight:'bold',color:'gray'}}>21, Male</Text>
        </View>
        <View style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
        }}>
          <Image source={require('../../assets/email.png')}
          style={{width:'11%',height:26}}></Image>
          <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>linkmorali@gmail.com</Text>
        </View>
        <View style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
        }}>
          <Image source={require('../../assets/location.png')}
          style={{width:'11%',height:30}}></Image>
          <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>Rudrapur, Uttarakhand</Text>
        </View>
        <View style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#fff',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
        }}>
          <Image source={require('../../assets/phone.png')}
          style={{width:'11%',height:30}}></Image>
          <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10}}>+91-8791386640</Text>
        </View>
        <TouchableOpacity style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#000',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
        }}>
          <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}>Check Availability</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#000',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20
        }}>
          <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}>My Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          alignSelf:'center',
          flexDirection:'row',
          justifyContent:'center',
          backgroundColor:'#000',
          width:'90%',
          padding:20,
          paddingBottom:22,
          borderRadius:10,
          shadowOpacity:80,
          elevation:15,
          marginTop:20,
          marginBottom:80
        }}>
          <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',marginLeft:10}}>LogOut</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});