import React from 'react';
import { extend, ExtendedProps } from 'koot';
import classNames from 'classnames';

import Swiper, { SwiperOptions } from 'swiper';
import 'swiper/css/swiper.min.css';

import photos from '@data/photos';

import Icon from '@components/icon';

import styles from './index.module.less';

// ============================================================================

// interface ComponentProps {
//     customProps?: string;
// }
interface ComponentState {
    swiperMainInit: boolean;
    swiperThumbnailInit: boolean;
}

interface Slide {
    type: 'photo' | 'vlog';
    thumbnail: string;
    orig?: string;
}

const defaults: SwiperOptions = {
    spaceBetween: 10,
    lazy: true
};

const slides: Slide[] = [
    ...photos.map(({ orig, thumbnail }) => {
        const photo = { orig, thumbnail, type: 'photo' };
        return photo;
    })
];

// Functional Component =======================================================

@extend({
    styles
})
class Home extends React.Component<ExtendedProps, ComponentState> {
    MainContainerRef: React.RefObject<HTMLDivElement> = React.createRef();
    ThumbnailContainerRef: React.RefObject<HTMLDivElement> = React.createRef();
    PrevButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
    NextButtonRef: React.RefObject<HTMLButtonElement> = React.createRef();
    PaginationRef: React.RefObject<HTMLDivElement> = React.createRef();

    mounted = false;
    swiperMain?: Swiper;
    swiperThumbnail?: Swiper;

    constructor(props: ExtendedProps) {
        super(props);

        this.state = {
            swiperMainInit: false,
            swiperThumbnailInit: false
        };

        this.buttonOnClickBlur = this.buttonOnClickBlur.bind(this);
    }

    buttonOnClickBlur(
        evt: React.SyntheticEvent<HTMLButtonElement, MouseEvent>
    ): void {
        (evt.currentTarget as HTMLButtonElement).blur();
    }

    initSwiper(type: 'main' | 'thumbnail'): void {
        if (!Swiper) return;
        if (type === 'thumbnail' && this.state.swiperThumbnailInit) return;
        if (type === 'main' && this.state.swiperMainInit) return;
        if (type === 'main' && !this.swiperThumbnail) return;

        const options: SwiperOptions = { ...defaults };
        let Ref;

        if (type === 'thumbnail') {
            Object.assign(options, {
                slidesPerView: 'auto',
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true
            });
            Ref = this.ThumbnailContainerRef;
        } else if (type === 'main') {
            Object.assign(options, {
                navigation: {
                    prevEl: this.PrevButtonRef.current as HTMLButtonElement,
                    nextEl: this.NextButtonRef.current as HTMLButtonElement
                },
                pagination: {
                    el: this.PaginationRef.current as HTMLDivElement,
                    type: 'fraction'
                },
                thumbs: {
                    swiper: this.swiperThumbnail
                }
            });
            Ref = this.MainContainerRef;
        }
        if (__DEV__) console.warn(`swiper options`, type, options);

        if (!Ref) return;

        const thisSwiper = new Swiper(Ref.current as HTMLDivElement, options);

        if (type === 'thumbnail') {
            this.swiperThumbnail = thisSwiper;
            this.setState({
                swiperThumbnailInit: true
            });
        } else if (type === 'main') {
            this.swiperMain = thisSwiper;
            this.setState({
                swiperMainInit: true
            });
        }
    }

    componentDidMount(): void {
        this.mounted = true;

        this.initSwiper('thumbnail');
        this.initSwiper('main');
    }

    componentWillUnmount(): void {
        this.mounted = false;
        this.swiperMain = undefined;
        this.swiperThumbnail = undefined;
    }

    render(): React.ReactNode {
        const isInit =
            this.state.swiperMainInit && this.state.swiperThumbnailInit;
        return (
            <div
                className={classNames([
                    this.props.className,
                    {
                        'is-init': isInit,
                        'is-not-init': !isInit
                    }
                ])}
            >
                <div
                    className="swiper-container"
                    data-swiper-type="main"
                    ref={this.MainContainerRef}
                >
                    <div className="swiper-wrapper">
                        {slides.map((slide, index) => (
                            <Slide slide={slide} key={index} />
                        ))}
                    </div>
                    <div className="swiper-controls">
                        <button
                            className="swiper-button-prev"
                            ref={this.PrevButtonRef}
                            type="button"
                            onClick={this.buttonOnClickBlur}
                        >
                            <Icon className="icon" icon="arrow-left" />
                        </button>
                        <div
                            className="swiper-pagination"
                            ref={this.PaginationRef}
                        ></div>
                        <button
                            className="swiper-button-next"
                            ref={this.NextButtonRef}
                            type="button"
                            onClick={this.buttonOnClickBlur}
                        >
                            <Icon className="icon" icon="arrow-right" />
                        </button>
                    </div>
                </div>
                <div
                    className="swiper-container"
                    data-swiper-type="thumbnail"
                    ref={this.ThumbnailContainerRef}
                >
                    <div className="swiper-wrapper">
                        {slides.map(({ thumbnail }, index) => (
                            <div className="swiper-slide" key={index}>
                                <img
                                    data-src={thumbnail}
                                    className="thumbnail swiper-lazy"
                                    alt={`照片-${index + 1}`}
                                />
                                <div className="swiper-lazy-preloader"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

// ============================================================================

interface SlideProps {
    slide: Slide;
}
const Slide = React.memo(
    ({ slide }: SlideProps): JSX.Element => {
        let el;
        switch (slide.type) {
            case 'photo': {
                el = (
                    <img
                        data-src={slide.orig}
                        className="photo swiper-lazy"
                        alt="照片"
                    />
                );
                break;
            }
            case 'vlog': {
                break;
            }
            default: {
            }
        }
        return (
            <div className="swiper-slide">
                {el}
                <div className="swiper-lazy-preloader"></div>
            </div>
        );
    }
);
