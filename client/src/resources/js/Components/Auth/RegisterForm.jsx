import { useState } from "react";

const RegisterForm = ({
  handleSubmit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group p-2 m-3">
        <label htmlFor="exampleInputUsername">Username</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUsername"
          aria-describedby="UsernameHelp"
          placeholder="Enter username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <small id="textHelp" className="form-text text-muted">
          We'll never share your username with anyone else.
        </small>
      </div>

      <div className="form-group p-2 m-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group p-2 m-3">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
