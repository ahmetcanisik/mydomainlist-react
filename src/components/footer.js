import { Link, SocialLink, CustomIcon } from "./utils";

/*
* footer a eklenecekler
* copyright yazısı en sola
* github bağlantısı en sağa
* social media bağlantıları github bağlantısının sol yanına*/

function Footer() {
    return (
        <footer>
            <Link target="_blank" href="https://ahmetcanisik.com">&copy; ahmetcanisik</Link>
            <div className="social-links">
                <SocialLink href="https://github.com/ahmetcanisik/mydomainlist">
                    <CustomIcon icon="github" />
                </SocialLink>
                <SocialLink href="https://github.com/ahmetcanisik/mydomainlist">
                    <CustomIcon icon="twitter" />
                </SocialLink>
                <SocialLink href="https://github.com/ahmetcanisik/mydomainlist">
                    <CustomIcon icon="instagram" />
                </SocialLink>
                <SocialLink href="https://github.com/ahmetcanisik/mydomainlist">
                    <CustomIcon icon="bluesky" />
                </SocialLink>
            </div>
        </footer>
    );
}

export default Footer;