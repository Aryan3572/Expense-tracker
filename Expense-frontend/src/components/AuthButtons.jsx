function AuthButtons({ isLoggedIn, setIsLoggedIn }) {

  return (
    <div className="auth-buttons">

      {isLoggedIn ? (

        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>

      ) : (

        <>
          <button
            className="login"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>

          <button className="signup">
            Sign Up
          </button>
        </>

      )}

    </div>
  );
}

export default AuthButtons;