import './login.css';

function login() {
    return (
      <div className="login-box">
        <h1>Login Here</h1>
        <form>
        <i class="fas fa-user"></i>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <i class="fas fa-lock"></i>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password"></input>
        <input type="submit" value="Log In"></input>
        <a href="#">Lost your Password?</a><br></br>
        <a href="#">Don't have An account?</a>
        </form>
      </div>
    );
  }

  export default login;