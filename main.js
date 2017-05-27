import Expo from 'expo';
import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	View
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import ListViewArray from './src/ListViewArray';
import { styles } from './src/styles';

const pages = [
	<ListViewArray/>,
	<Text key="2">Test 2</Text>,
];

class App extends React.Component {
	state = {
		dataSource: new ViewPager.DataSource({
			pageHasChanged: (p1, p2) => p1 !== p2,
		}).cloneWithPages(pages),
	};

	_renderPage = (page, pageID) => {
		return (
			<View
				key={pageID}
				style={styles.pager}
			>
				<Text style={styles.header}>
					{page.type.displayName}
				</Text>
				{page}
			</View>
		);
	};

	render() {
		return (
			<ViewPager
				dataSource={this.state.dataSource}
				renderPage={this._renderPage}
				isLoop={true}
			/>
		);
	}
}

Expo.registerRootComponent(App);
