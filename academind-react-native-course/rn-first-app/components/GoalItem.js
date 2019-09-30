import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function GoalItem(props) {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.goalKey)}>
			<View style={styles.listItem}>
					<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ddd',
		borderColor: 'black',
		borderWidth: 1
	}
});