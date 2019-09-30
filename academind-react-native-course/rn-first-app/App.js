import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Header, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);


	addGoalHandler = (enteredGoal) => {
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ key: Math.random().toString(), value: enteredGoal }
		]);
		setIsAddMode(false);
	}

	removeGoalHandler = (goalKey) => {
		setCourseGoals(currentGoals => currentGoals.filter(el => el.key !== goalKey));
	}
	cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Adicionar novo objetivo" onPress={() => setIsAddMode(true)}/>
			<GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler}/>
			<FlatList 
				// keyExtractor={(item, index) => item.key} react native supports both id and key.
				data = {courseGoals}
				renderItem = {itemData => (
					<GoalItem title={itemData.item.value}
						goalKey={itemData.item.key}
						onDelete={removeGoalHandler}/>	
				)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});