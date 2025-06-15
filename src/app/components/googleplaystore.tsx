import MobileStoreButton from 'react-mobile-store-button';
import React from 'react';

////

export default class MyComponent extends React.Component {
	render() {
		const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
		return (
			<div>
				<MobileStoreButton
				  store="ios"
				  url={iOSUrl}
				  linkProps={{ title: 'iOS Store Button' }}
				/>
			</div>
		);
	}
}

