import cn from './Card.module.scss';
import '../slider.scss';
import classNames from 'classnames';


export const Card = ({
                         text,
                         srcYoutube,
                         imgVc,
                         srcVc,
                         isActive
                     }: {
    text: string
    srcYoutube: string;
    imgVc: string,
    srcVc: string,
    isActive: boolean
}) => {

    return (

        <div className={classNames(cn.card, !isActive && cn.notActive)}>
            <div className={cn.container}>
                <h5 className={cn.title}>{text}</h5>
                <iframe className={cn.video} src={srcYoutube}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                </iframe>


                <a href={srcVc} className={cn.srcVc} target="_blank"><img src={imgVc} className={cn.imgVc}/></a>
            </div>
        </div>

    );
};