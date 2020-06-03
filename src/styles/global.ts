import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		-webkit-font-smoothing: antialised;
	}

	body, input, button {
		/*font-family: 'Roboto Slab', serif;*/
		font-size: 16px;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 500;
	}

	button {
		cursor: pointer;
	}

	*::-webkit-scrollbar {
    background-color:#fff;
    width:12px;
	}

	*::-webkit-scrollbar-track {
		background-color:#fff;
	}

	*::-webkit-scrollbar-thumb {
		background-color:#babac0;
		border-radius:16px;
		border:3px solid #fff;
	}

	*-webkit-scrollbar-button {display:none}
`;
