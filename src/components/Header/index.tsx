import { useTransform, useViewportScroll } from 'framer-motion';
import { Container } from './styles';

function Header() {
    const { scrollYProgress } = useViewportScroll();
    const frameY = useTransform(scrollYProgress, 
        [0.188, 0.198],
        ['-0%', '-100%']
    )

    return (
        <Container style={{y: frameY}}>

        </Container>
    );
};

export default Header;
