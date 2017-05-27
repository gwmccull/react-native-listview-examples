import {
	Dimensions,
	StyleSheet,
	Text,
	View
} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = {
	pager: {
		width,
		top: 20,
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	listViewHeader: {
		fontSize: 22,
	},
	listView: {
		paddingHorizontal: 10,
	},
};
