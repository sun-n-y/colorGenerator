const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  return (
    <a
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </a>
  );
};
export default SingleColor;
