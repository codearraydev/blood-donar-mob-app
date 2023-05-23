import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SvgBackArrow, SvgSend } from '../../components/svg'
import { getUserAsyncData } from '../../shared/core/DataStore' 
import AutoScroll from "react-native-auto-scroll";
const ChatScreen = (props) => {
    const [chatts, setChatts] = useState([])
    const [userid,setUserid] = useState('')
    const Array = [
        { reciverId: "a", senderId: "b", message: "Hiii Osama" }, 
        { reciverId: "b", senderId: "a", message: "Hiii Nayab" }
    ]
    const [message, setmessage] = useState()
    const getChats = () => {

        getUserAsyncData().then((res => {


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "reciverId": props.route.params.id,
                "senderId": res.id
            });
            
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            console.log("GETT ", raw)
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getChats", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setChatts(result.data)
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        }))
    }

    const SendMessage = () => {
        getUserAsyncData().then((res => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "reciverId": props.route.params.id,
                "senderId": res.id,
                "message": message
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            console.log("SENDDD ", raw)
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/sendChat", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (result.status == 1) {
                        getChats()
                        setmessage('')
                    }
                })
                .catch(error => console.log('error', error));
        }))
    }
    useEffect(() => {
        getChats()
        getUserAsyncData().then((res => {
            setUserid(res.id)
        }))
    }, [])
    return (
        <View style={styles.Mview}>

            <View style={styles.top}>
                <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
                    <SvgBackArrow />
                </TouchableOpacity>
                <Text style={styles.headtxt}></Text>
            </View>
            <FlatList
                style={{ width: '100%'}}
                data={chatts}
                renderItem={({ item }) =>
                <>
                {(item.senderId == userid) ?
                    <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-end'}}>
                       
                            <View style={styles.sender}>
                            <TouchableOpacity>
                            <Text  style={styles.senderText}>{item.message}</Text>
                            </TouchableOpacity>
                            
                            
                             
                             
                             </View>
                        
                    </View> :
                    <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start'}}>
                     <View style={styles.receiver}>
                     <TouchableOpacity>
                     <Text  style={styles.receiverText}>{item.message}</Text>
                     </TouchableOpacity>
                     
                     </View>
                
            </View>

                }
                </>

                }
                keyExtractor={item => Math.random().toString()}
            />

            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, right: 0, left: 0, width: '100%', margin: 5 }}>
                <TextInput style={styles.tinput}
                    placeholder="Enter your email"
                    placeholderTextColor={'grey'}
                    value={message}
                    onChangeText={(value) => setmessage(value)}

                />
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginLeft: 5, backgroundColor: '#FF478C', borderRadius: 30, height: 45, width: 45, }} onPress={() => SendMessage()}>
                    <SvgSend/>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    Mview: {
        alignItems: 'center',
        flex: 1,
        marginRight:5,
        marginLeft:5
    },
    top: {
        width: '90%',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headtxt: {
        color: '#363636',
        fontSize: 18,
        marginLeft: 80
    },
    tinput: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        height: 40,
        borderRadius: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF',
        width: '80%',
    },
    sender: {
        padding: 10,
        backgroundColor: "#ec9f4b",
        alignSelf: 'center',
        		borderRadius: 20,
		marginRight: 15,
		marginBottom: 20,
		maxWidth: "80%",
		position: "relative",
        marginLeft:"19%",
        marginTop:15,
	},
    senderText: {
		color: "#000",
		fontWeight: "500",
		marginLeft: 10,
        fontSize:13,
        fontFamily: "sans-serif",
	},
    receiver: {
        padding: 10,
        backgroundColor: "#fff",
        alignSelf: 'center',
        		borderRadius: 20,
		marginRight: '15%',
		marginBottom: 20,
		maxWidth: "80%",
		position: "relative",
       
        marginTop:2,
	},
    receiverText: {
		color: "#000",
		fontWeight: "500",
		marginLeft: 10,
	
        fontSize:13,
        fontFamily: "sans-serif",
	},
})