import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="description" content="Description" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300;400;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
