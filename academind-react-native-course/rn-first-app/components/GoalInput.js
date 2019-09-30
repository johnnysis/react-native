import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import { doesSupportAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState('');
	function goalInputHandler(enteredText) {
    	setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
	<Modal visible={props.visible} animationType="slide">
		<View style={styles.inputContainer}>
			<TextInput value={enteredGoal} onChangeText={goalInputHandler}
				placeholder="Course Goal" style={styles.input}/>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button title="CANCEL" onPress={props.onCancel} color="red" />
				</View>
				<View style={styles.button}>
					<Button title="ADD" onPress={addGoalHandler}/>
				</View>
			</View>
		</View>
	</Modal>);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		width: '40%'
	},
	// button: {
		
	// 	marginRight: '10px'
	// },
	inputContainer: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '75%',
		borderBottomColor: 'blue',
		borderBottomWidth: 1,
		marginBottom: 10,
		padding: 10
	}
});
