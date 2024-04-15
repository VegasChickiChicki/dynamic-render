type TProps = {
	template: string,
	styles?: string
}

type TEmits = {
	(event: 'update:model-value', value: { template: string, styles: string }): void
}

export type {
	TProps,
	TEmits
}
