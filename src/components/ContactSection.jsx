import { H3, Spacer, Row, A, SignatureFooterImage } from "../kit";
import { socials } from "../data/socials";
import signature from "../../images/signature.png";

/**
 * ContactSection component - Contact and social links
 */
const ContactSection = () => {
    return (
        <>
            <H3>Get in touch</H3>
            <Spacer size={8} />
            {socials.map((social, i) => (
                <Row key={i} $gap={"8px"}>
                    <A href={social.url}>
                        <Row $gap={"8px"}>
                            {social.icon}
                            {social.handle}
                        </Row>
                    </A>
                </Row>
            ))}
            <SignatureFooterImage src={signature} alt={"Harilala Princy"} />
        </>
    );
};

export default ContactSection;
