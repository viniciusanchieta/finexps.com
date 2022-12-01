import type { ButtonProps } from './interfaces';

function ButtonComponent({
	label,
	onClick,
	backgroundTransparent,
	disabled,
	icon,
	variant
}: ButtonProps) {
	const handleVariant = () => {
		const variants = {
			small: 'w-54px h-54px text-8px',
			medium: 'text-16px w-152px h-54px',
			large: 'py-16px px-32px text-16px'
		}[variant];

		return variants;
	};

	const handleBackground = () => {
		const backgroundTransparentIsTrue = backgroundTransparent;
		if (backgroundTransparentIsTrue) {
			return 'bg-transparent border-1px border-greenLight text-greenLight hover:bg-green hover:border-green hover:text-white [&>svg]:fill-greenLight';
		}

		return 'bg-greenDark text-white hover:bg-greenLight text-white [&>svg]:fill-white';
	};

	return (
		<button
			type='button'
			className={`
				rounded-6px 
				duration-150 
				font-bold
			 hover:duration-150
			 flex
			 justify-center
			 gap-12px
			 items-center	
			 ${handleBackground()}
			 ${handleVariant()}`}
			aria-label={`Botão ${label}`}
			onClick={onClick}
			data-testid='button'
			disabled={disabled}
		>
			{icon}
			{label}
		</button>
	);
}

export default ButtonComponent;
