import React, {ReactNode} from 'react'
import {EmblaOptionsType} from 'embla-carousel'
import './styles/carouselBase.scss';
import './styles/embla.scss';
import useEmblaCarousel from 'embla-carousel-react'


type PropType = {
    options?: EmblaOptionsType;
    children: ReactNode
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {options, children} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
