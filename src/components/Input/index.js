function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
}

export default Input;
