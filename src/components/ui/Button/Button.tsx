import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & (
  | { scrollTo: string; type?: undefined; onClick?: undefined }
  | { scrollTo?: undefined; type?: 'button' | 'submit'; onClick?: () => void }
);

function Button({ children, variant = 'primary', className, ...action }: ButtonProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ');

  if (action.scrollTo) {
    const targetId = action.scrollTo;
    const handleScrollClick = () => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <button type="button" className={classes} onClick={handleScrollClick}>
        {children}
      </button>
    );
  }

  return (
    <button type={action.type ?? 'button'} onClick={action.onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
