const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group p-2 m-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
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
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
