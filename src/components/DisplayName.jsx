const DisplayName = (props) => {
  let { username } = props;

  return (
    <>
      <h2>Hello, {username}</h2>
    </>
  );
};

export default DisplayName;
