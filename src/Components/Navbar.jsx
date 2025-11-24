const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Magazine</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
    
        <li className="nav-item">
          {/* 💡 Added nav-link-hover class */}
          <a className="nav-link nav-link-hover" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        
        <li className="nav-item">
          {/* 💡 Added nav-link-hover class */}
          <a className="nav-link nav-link-hover" onClick={()=>setCategory("business")} >Business</a>
        </li>

        <li className="nav-item">
          {/* 💡 Added nav-link-hover class */}
          <a className="nav-link nav-link-hover" onClick={()=>setCategory("health")}>Health</a>
        </li>

        <li className="nav-item">
          {/* 💡 Added nav-link-hover class */}
          <a className="nav-link nav-link-hover" onClick={()=>setCategory("sports")}>Sports</a>
        </li>

        <li className="nav-item">
          {/* 💡 Added nav-link-hover class */}
          <a className="nav-link nav-link-hover" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;