import React from "react";

function Form({ userRegistered }) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{userRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
