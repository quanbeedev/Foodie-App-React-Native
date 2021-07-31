import React from 'react'
import { Text,View,StyleSheet, SafeAreaView,Image } from 'react-native'
import { color } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons';
import MeterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import categoryData from '../../assets/data/cataegoryData';
import popularData from '../../assets/data/popularData';
import colors from '../../assets/colors'

const HomeScreen = () => {
    return (
        <View style = {styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                     source={require('../../assets/images/profile.png')} 
                    style={styles.profileImage}/>
                </View>
                <Feather name="menu" size={24} color={colors.textDark}/>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default HomeScreen;