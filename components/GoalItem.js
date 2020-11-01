import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpactiy={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    color: '#9C27B0',
    width: '100%',
  },
});

export default GoalItem;
