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
      <div class="form-group p-2 m-3">
        <label for="exampleInputUsername">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputUsername"
          aria-describedby="UsernameHelp"
          placeholder="Enter username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <small id="textHelp" class="form-text text-muted">
          We'll never share your username with anyone else.
        </small>
      </div>

      <div class="form-group p-2 m-3">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div class="form-group p-2 m-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-primary m-3">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
