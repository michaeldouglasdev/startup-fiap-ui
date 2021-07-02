
import styled, { css } from "styled-components";
import { shade } from "polished";
import { ButtonHTMLAttributes } from "react";

type TypeStyle = 'primary' | 'secondary' | 'success' | 'danger' | 'neutral' | 'blue-clean' | 'blue-classic';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	typeStyle: TypeStyle
	outline?: boolean;
	expanded?: boolean;
	rounded?: boolean
	borderWidth?: number;
}

interface ButtonTypeStyle {
	background: string;
	border: string;
	color: string;
	hover: {
		background: string;
		border: string;
		color: string;
	};
}

const handleType = (typeStyle: TypeStyle, outline?: boolean): ButtonTypeStyle => {
	switch (typeStyle) {
		case 'primary':
			return {
				background: !outline ? '#16a0bf' : 'transparent',
				border: '#16a0bf',
				color: !outline ? '#fff' : '#16a0bf',
				hover: {
					background: shade(0.2, '#16a0bf'),
					border: shade(0.2, '#16a0bf'),
					color: '#fff',
				}
			}

		case 'secondary':
			return {
				background: !outline ? '#025891' : 'transparent',
				border: '#025891',
				color: !outline ? '#fff' : '#025891',
				hover: {
					background: shade(0.2, '#025891'),
					border: shade(0.2, '#025891'),
					color: '#fff',
				}
			}

		case 'success':
			return {
				background: !outline ? '#51e47d' : 'transparent',
				border: '#47cc6f',
				color: !outline ? '#fff' : '#47cc6f',
				hover: {
					background: '#47cc6f',
					border: '#47cc6f',
					color: '#fff',
				}
			}

		case 'danger':
			return {
				background: !outline ? '' : 'transparent',
				border: '',
				color: !outline ? '' : '',
				hover: {
					background: '#51e47d',
					border: '#51e47d',
					color: '#fff',
				}
			}

		case 'neutral':
			return {
				background: !outline ? '#fff' : 'transparent',
				border: '#fff',
				color: !outline ? '#fff' : '',
				hover: {
					border: '#e47a1f',
					background: '#e47a1f',
					color: '#fff',
				}
			}

		case 'blue-clean':
			return {
				background: !outline ? '#8ebcf4' : 'transparent',
				border: '#8ebcf4',
				color: !outline ? '#fff' : '#8ebcf4',
				hover: {
					background: '#8ebcf4',
					border: '#8ebcf4',
					color: '#fff',
				}
			}

		case 'blue-classic':
			return {
				background: !outline ? '#1e94d2' : 'transparent',
				border: '#1e94d2',
				color: !outline ? '#fff' : '#1e94d2',
				hover: {
					background: shade(0.2, '#1e94d2'),
					border: shade(0.2, '#1e94d2'),
					color: '#fff',
				}
			}
	}
}
export const Container = styled.button<ButtonProps>`
	height: 46px;
	border-radius: 10px;
	border-width: ${({ borderWidth }) => borderWidth ? `${borderWidth}px` : '1px'};
	border-style: solid;
	${({ rounded }) => rounded && css`
		border-radius: 40px;
	`}
	${({ typeStyle, outline }) => {
		const type = handleType(typeStyle, outline);

		return css`
			border-color: ${type.border};
			background: ${type.background};
			color: ${type.color};
			&:hover {
				border-color: ${type.hover.border};
				background: ${type.hover.background};
				color: ${(outline) => !outline ? type.color : '#fff'}
			}
		`
	}};
	padding: 0 16px;
	align-self: baseline;
	width: ${({ expanded }) => expanded ? '100%' : 'auto'};
	font-weight: 500;
	margin-top: 16px;
	transition: background-color 0.2s;
`;