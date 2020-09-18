const withIcon = (icon) => {
    const Icon = ({
      fill = 'none',
      stroke = 'currentColor',
      size = 24,
      width = 1,
    }) => (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    );
    return Icon;
  };
  
  export default withIcon;