import React from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { NAVS } from '../gql/allCharacters';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const IndexPage = () => {
	const { loading, error, data } = useQuery(NAVS);
	console.log('dataw 2', data)

	if (error) return <h1>Error</h1>;
	if (loading) return <h1>Loading...</h1>;
	

	return (
		<Layout home>
		<Head>
		  <title>{siteTitle}</title>
		</Head>
		<section className={utilStyles.headingMd}>
		  <p>[Your Self Introduction]</p>
		  <p>
			(This is a sample website - you’ll be building a site like this in{' '}
			<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
		  </p>
		</section>
	  </Layout>
	);
};

export default withApollo({ ssr: true })(IndexPage);

// {data.characters.results.map((data) => (
// 	<ul key={data.id}>
// 		<li>{data.name}</li>
// 	</ul>
// ))}