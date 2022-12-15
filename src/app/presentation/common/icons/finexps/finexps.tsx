interface FinexpsProps {
	width?: number;
	height?: number;
}

function Finexps({ width = 46, height = 46 }: FinexpsProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 46 46'
		>
			<path d='M0 7.475A7.475 7.475 0 017.475 0h18.4a7.475 7.475 0 017.475 7.475v5.175h5.175A7.475 7.475 0 0146 20.125v18.4A7.475 7.475 0 0138.525 46h-18.4a7.475 7.475 0 01-7.475-7.475V33.35H7.475A7.475 7.475 0 010 25.875v-18.4zm29.9 0a4.025 4.025 0 00-4.025-4.025h-18.4A4.025 4.025 0 003.45 7.475v18.4A4.025 4.025 0 007.475 29.9h5.175v-9.775a7.44 7.44 0 011.15-3.985 7.515 7.515 0 012.34-2.34 7.44 7.44 0 013.985-1.15H29.9V7.475zm2.3 22.385c-.041.066-.084.13-.127.194A7.515 7.515 0 0129.86 32.2a7.44 7.44 0 01-3.985 1.15H16.1v5.175a4.025 4.025 0 004.025 4.025h18.4a4.025 4.025 0 004.025-4.025v-18.4a4.025 4.025 0 00-4.025-4.025H33.35v9.775a7.44 7.44 0 01-1.15 3.985z'></path>
		</svg>
	);
}

export default Finexps;
