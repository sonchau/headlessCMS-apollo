import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { NAVS } from '../gql/allCharacters';

const Navs = () => {
	const { loading, error, data } = useQuery(NAVS);
	console.log('dataw 2', data)

	if (error) return <h1>Error</h1>;
	if (loading) return <h1>Loading...</h1>;
	

	return (
		<p>Navs</p>
	);
};

export default withApollo({ ssr: true })(Navs);
