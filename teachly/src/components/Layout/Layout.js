import withClass from "../../hoc/withClass";

function Layout(props) {
  return (
    <>
      <div>{props.menu}</div>
      <div>{props.content}</div>
      <div>{props.footer}</div>
    </>
  );
}

export default withClass(Layout, "layout");
