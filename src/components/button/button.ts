import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from 'lit/static-html.js'
import styles from './button.styles'


@customElement('my-button')
export default class MyButton extends LitElement {
	static styles = styles

	render() {
		return html`
			<button class="button"><slot></slot></button>
		`
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'mg-button': MyButton
	}
}
