interface IconProps {
  color?: string;
  className?: string;
  img?: string;
  width?: number;
  height?: number;
}

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <img
      src={props.img}
      alt="icon"
      style={{
        width: props.width || 24,
        height: props.height || 24,
      }}
    />
  );
};
