const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            55OVER34, LLC | { year } &#169; | All Rights Reserved
        </footer>
    );
}
export default Footer;