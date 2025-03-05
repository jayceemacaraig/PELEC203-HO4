import React from 'react'
import {View, Image, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'



const App = () => {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>

  {/* ------------------------  PROFILE  ------------------------ */}
        <View style={styles.profileBar}>
          <View style={{flexDirection: 'row', gap: 15}}>
            <TouchableOpacity>
              <Image style={{width : 55, height : 55, borderRadius : 50, objectFit : 'cover'}} source={require('../assets/images/profile.jpg')}></Image>
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontFamily: 'Arial', fontSize: 14}}>Hello</Text>
              <Text style={{   fontFamily: 'Arial',
    fontWeight: 'bold', fontSize: 20}}>Jay Cee Macaraig</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.search}>
              <Image style={{width: 25, height: 25}} source={require('../assets/images/search.png')}></Image>
            </View> 
          </TouchableOpacity>
        </View>

  {/* ------------------------  CREDIT CARD  ------------------------ */}
        <View style={styles.creditContainer}>
            <Text style={{fontFamily:'Arial', fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Current Balance</Text>
              <Text style={{fontFamily: 'Arial', fontSize: 16, color: 'white'}}>
                1,000.00</Text>
            <Text style={{fontFamily: 'Arial Black', fontSize: 20, color: 'white', letterSpacing: 5}}>
              **** **** **** 0502</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'Arial', fontSize: 16, color: 'white'}}>Jay Cee Macaraig</Text>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontFamily: 'Arial',fontSize:11, color: 'white', fontStyle: 'italic'}}>Ex. Date</Text>
                <Text style={{fontFamily: 'Arial',fontSize:11, color: 'white', fontStyle: 'italic'}}>12/25</Text>
              </View>
            </View>
        </View>

  {/* ------------------------  SERVICES ------------------------ */}
        <View style={styles.serviceContainer}>
          <Text style={{fontFamily:'Arial', fontSize: 20, fontWeight: 'bold'}}>Services</Text>
          <View style={styles.serviceBox}>
            <TouchableOpacity>
              <View style={{alignItems: 'center', gap: 10}}>
                <View style={[styles.serviceCard,{backgroundColor: '#FF2252'}]}>
                  <Image style={{width: 40, height: 40}} source={require('../assets/images/wallet.png')}></Image>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16}}>Wallet</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', gap: 10}}>
                <View style={[styles.serviceCard,{backgroundColor: '#42CBE3'}]}>
                  <Image style={{width: 40, height: 40}} source={require('../assets/images/transfer.png')}></Image>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16}}>Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', gap: 10}}>
                <View style={[styles.serviceCard,{backgroundColor: '#FFBD00'}]}>
                  <Image style={{width: 40, height: 40}} source={require('../assets/images/pay.png')}></Image>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16}}>Pay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{alignItems: 'center', gap: 10}}>
                <View style={[styles.serviceCard,{backgroundColor: '#3EE51C'}]}>
                  <Image style={{width: 40, height: 40}} source={require('../assets/images/topup.png')}></Image>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 16}}>Topup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

  {/* ------------------------  RECENT TRANSACTIONS ------------------------ */}
        <View style={{width: '100%', padding: 10, gap: 5}}>
            <Text style={{fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold'}}>Recent Transactions</Text>
          <ScrollView style={{height: 280, padding: 20, borderWidth: 1, borderColor: '#9EA1A1', borderRadius: 16}}>
            <View style={styles.recentContainer}>
              <View style={styles.recentCard}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image style={{width: 45, height:45, borderRadius: 10}} source={require('../assets/images/transaction1.png')}></Image>
                  <View style={{gap: 5}}>
                    <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>Paymaya</Text>
                    <Text style={{fontFamily: 'Arial', fontSize: 13}}>Payment via wallet successful.</Text>
                  </View>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>$275</Text>
              </View>

              <View style={styles.recentCard}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image style={{width: 45, height:45, borderRadius: 10}} source={require('../assets/images/transaction2.png')}></Image>
                  <View style={{gap: 5}}>
                    <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>Gcash</Text>
                    <Text style={{fontFamily: 'Arial', fontSize: 13}}>You have received: 1,000.00.</Text>
                  </View>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>$1,000</Text>
              </View>

              <View style={styles.recentCard}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image style={{width: 45, height:45, borderRadius: 10}} source={require('../assets/images/transaction3.png')}></Image>
                  <View style={{gap: 5}}>
                    <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>Call of Duty Mobile</Text>
                    <Text style={{fontFamily: 'Arial', fontSize: 13}}>Topup Successful.</Text>
                  </View>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>$500</Text>
              </View>

              <View style={styles.recentCard}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image style={{width: 45, height:45, borderRadius: 10}} source={require('../assets/images/transaction4.png')}></Image>
                  <View style={{gap: 5}}>
                    <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>McDonald's</Text>
                    <Text style={{fontFamily: 'Arial', fontSize: 13}}>Order successfully paid.</Text>
                  </View>
                </View>
                <Text style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 15}}>$69</Text>
              </View>
            </View>
          </ScrollView>
          


        </View>

        
      </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 20,
    padding : 10,
    flexDirection : 'column',
    alignItems : 'center',
    gap: 30,
  },

  // ---------------- PROFILE SECTION ------------------
  profileBar : {
    width: '100%',
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  search : {
    justifyContent: 'center',
    alignItems : 'center',
    width: 35,
    height: 35,
    borderRadius : 10,
    boxShadow : '2px 5px 8px #888888'
  },

// ---------------- CREDIT CARD SECTION ------------------
  creditContainer : {
    backgroundColor : '#377BF1',
    width: '95%',
    borderRadius: 20,
    padding: 15,
    gap: 18,
    boxShadow : '2px 5px 8px #888888'
  },

// ---------------- SERVICES SECTION ------------------
  serviceContainer: {
    width: '100%',
    padding: 10,
    gap: 15
  },
  serviceBox : {
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-around'
  },
  serviceCard: {
    padding: 10,
    borderRadius: 10, 
    alignItems: 'center'
  },

  // ---------------- RECENT TRANSACTIONS SECTION ------------------
  recentContainer: {
    height: 200,
    marginBottom: 100,
    gap: 25,
  },
  recentCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 1,
    borderColor: '#9EA1A1',
    borderRadius: 8
  },

})

export default App
