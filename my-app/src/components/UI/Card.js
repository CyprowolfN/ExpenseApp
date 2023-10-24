import './Card.css';

const Card = (props) => {

  // This 'card ' className is concatenated with the props.children's props.className
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );
}
export default Card;