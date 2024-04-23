import React from 'react';
import './_footer.scss';
import Container from "@/shared/Container";
import Support from "@/widgets/footer/Support";
import NavInformation from "@/widgets/footer/NavInformation";
import Spacer from "@/shared/Spacer";
import LabelFooter from "@/widgets/footer/LabelFooter";
import Navbar from "@/widgets/navbar/Navbar";

const Footer = () => {
    return (
        <Container>
            <Support/>
            <Spacer height={'44px'}/>
            <NavInformation/>
            <Spacer height={'44px'}/>
            <LabelFooter/>
            <Spacer height={'44px'}/>
            <Navbar/>
            <Spacer height={'44px'}/>
        </Container>
    );
};

export default Footer;