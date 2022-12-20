import React from 'react'
import { View , Text , StyleSheet , FlatList } from 'react-native';
import { colors } from '../utils/colors'
import { fontSize , spacing } from '../utils/size'


export const FocusHistory = ({ history }) => {

const renderItem = ({ item }) => <Text style={styles.item}>- {item} </Text>
  
 if(!history || !history.length) return  <Text style={styles.title}>You Have not focused on anything yet. </Text>;

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Things we've focused on: </Text>
    <FlatList 
    data={history}
    renderItem={renderItem}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    flex: 1
  },
  title: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: 'bold',
    paddingTop: spacing.sm
  },
  item:{
    color: colors.white,
    paddingTop: spacing.sm
  }
})