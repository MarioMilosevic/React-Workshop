interface MarioProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Mario = ({ label, ...props }: MarioProps) => {
  return <button {...props}>{label}</button>;
};

export default Mario;
