import "./AuthBtn.css";
function AuthBtn(props) {
  return (
    <button
      type={props.type}
      className={`btn_auth ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default AuthBtn;
