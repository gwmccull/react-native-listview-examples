import Expo from 'expo';
import React from 'react';
import {
	ListView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const header = 'An Array of Heroes';
const data = [
	'Mr. Nice',
	'Narco',
	'Bombasto',
	'Celeritas',
	'Magneta',
	'RubberMan',
	'Dynama',
	'Dr IQ',
	'Magma',
	'Tornado',
];

class ListViewArray extends React.Component {
	constructor(props) {
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});
		this.state = {
			dataSource: ds.cloneWithRows(data),
		};
	}

	static displayName = 'ListViewArray';

	_renderHeader = () => {
		return <Text style={styles.listViewHeader}>{header}</Text>;
	};

	_renderRow = (data, sectionId, rowId) => {
		return <Text key={rowId}>{data}</Text>;
	};

	render() {
		return (
			<ListView
				automaticallyAdjustContentInsets={false}
				dataSource={this.state.dataSource}
				renderFooter={this._renderFooter}
				renderHeader={this._renderHeader}
				renderRow={this._renderRow}
				style={styles.listView}
			/>
		);
	}
}

export default ListViewArray;
