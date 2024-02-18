/**
 * компонент отображает баннеры на сайте
 */

type TBanner = {
    img: string;
    alt: string;
    link?: string;
}

const Banner: React.FC<({ banner: TBanner })> = ({ banner }) => {
    // const handleClick = () => {
    //     if (banner.link) {
    //         window.open(linkUrl, "_blank");
    //     }
    // };

    return (
        <div className="banner">
            <img src={banner.img} alt={banner.alt} />
        </div>
        
    )
}

export default Banner;