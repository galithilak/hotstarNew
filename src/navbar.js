import Home from "./home";

const Navbar = () => {
    let nav=[
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Favour", path:"/favourites"},
        {link:"Singnup", path:"/addfavs"}
    ]

    return(
        <div className="navbar">
            <div className="options">
                <a href="">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div>

            <div ClassName="Logo">
                <img width="170" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="No Internet" />
            </div>

            <div className="links">
                {nav.map((nte)=>{
                    return(
                        <a href={nte.path}>{nte.link}</a>
                    )
                })}
            </div>
        </div>
    );
}
export default Navbar;