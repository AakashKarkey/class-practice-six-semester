import DisplayName from "./DisplayName";

const DisplayInformation = (props) => {
  let { fullName, permanentAddress, mobileNumber, email } = props;

  return (
    <>
      <DisplayName username={fullName} />
      <h2>Your address is: {permanentAddress}</h2>
      <h2>Your mobile number is: {mobileNumber}</h2>
      <h2>Your email is: {email}</h2>
    </>
  );
};

export default DisplayInformation;
