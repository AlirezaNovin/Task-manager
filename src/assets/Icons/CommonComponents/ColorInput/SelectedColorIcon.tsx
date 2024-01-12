interface IIconProps {
  ColorCode: string | undefined;
}

export const SelectedColorIcon: React.FC<IIconProps> = ({ ColorCode }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="12" fill={ColorCode} />
      <rect x="8" y="8" width="12" height="12" rx="6" fill="white" />
    </svg>
  );
};
