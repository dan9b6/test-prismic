const Grid = ({ cols, children }) => {
  return <div className={cols ? `grid grid--${cols}` : `grid`}>{children}</div>;
};

export default Grid;
