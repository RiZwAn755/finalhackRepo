import './navbar.css';

export default function Nav() {


  return (
    <div className="navBar">
      <div className="logo">
        <a href="/" className='logos'>
          <span style={{ color: "black" }}>Alumn</span>
          <span style={{ color: "#ff9100" }}>Connect</span>
        </a>
      </div>

      <div className="navLinks">
         
          <ul className="ull">
            <li><a>Home</a></li>
            <li><a>Hireworker</a></li>
            <li><a>Worker Registration</a></li>
            <li><a>About Us</a></li>
            <li>
              <a
                
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          </ul>
        
          <ul className="ull">
            <li><a>Login</a></li>
            <li><a>Signup</a></li>
          </ul>
        
      </div>
    </div>
  );
}
