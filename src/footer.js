const Footer = () => {
    let footer_links = [
        {link:"About Disney+ Hotstar"},
        {link:"Terms Of Use"},
        {link:"Privacy Policy"},
        {link:"FAQ"},
        {link:"Feedback"},
        {link:"Careers"}
    ]
    return ( 
        <div className="footer">

            <div className="footer_logo">
                <img width="170" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
            </div>

            <div className="footer_links">
                {footer_links.map((date)=>{
                    return(
                        <a href="">{date.link}</a>
                    )
                })}
            </div>

            <div className="footer_desc">
                <p> 2022 STAB. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;