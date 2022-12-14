import { css } from 'lit'

export default css`
	:host {
		display: inline-block;
		position: relative;
		width: auto;
		cursor: pointer;
	}

	.button {
		display: inline-flex;
		align-items: stretch;
		justify-content: center;
		width: 100%;
		border-style: solid;
		border-width: 1px;
		font-family: sans-serif;
		font-weight: normal;
		text-decoration: none;
		user-select: none;
		white-space: nowrap;
		vertical-align: middle;
		padding: .5em;
		cursor: inherit;
		background-color: hsl(200 100% 50%);
		border-color: hsl(200 100% 50%);
		color: hsl(200 100% 94%);
	}
`
