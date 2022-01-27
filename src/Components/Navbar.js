import React,{useState}  from 'react'
import { Link ,useLocation} from "react-router-dom";

const Navbar=(props)=>{
    let location = useLocation();
  React.useEffect(() => {
    //console.log([location.pathname]);
  }, [location]); 
        return (
            <div>
                
                <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode} `}>
                    <Link className="navbar-brand active" to="/">NewsFeed</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className={`nav-link ${location.pathname=="/"?"active":""}`} to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/business"?"active":""}`} to="/business">Business </Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/general"?"active":""}`} to="/general">General</Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/health"?"active":""}`} to="/health">Health</Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/science"?"active":""}`} to="/science">Science</Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/sports"?"active":""}`} to="/sports">Sports</Link></li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname=="/technology"?"active":""}`} to="/technology">Technology</Link></li>
                        
                            <div className={`custom-control custom-switch form-inline my-2 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                                <input type="checkbox" className="custom-control-input mx-1" id="customSwitch1"/>
                                <label className="custom-control-label" htmlFor="customSwitch1" onClick={props.handleClick}>Dark Mode</label>
                            </div>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
        </nav>
            </div>
        )
    
}

export default Navbar
