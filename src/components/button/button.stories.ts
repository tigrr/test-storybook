import { StoryFn, Meta } from '@storybook/web-components'
import { html } from 'lit'
import './button'

export default {
	title: 'Button',
	component: 'my-button',
	parameters: {
		actions: {
			handles: ['click'],
		},
	},
} as Meta

export const Button: StoryFn = (args) => {
	return html`
		<my-button>
			${args.text}
		</my-button>
	`
}

Button.args = {
	text: 'Button',
}

Button.parameters = {
	controls: {
		include: ['text'],
	},
}
