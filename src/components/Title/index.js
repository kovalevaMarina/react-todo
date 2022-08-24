import "./main.css";

function Title(props) {
  return <h1 className={props.className}>Hello, {props.titleTxt}!</h1>;
}

export default Title;
