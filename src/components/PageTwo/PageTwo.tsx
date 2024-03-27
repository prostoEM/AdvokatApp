import cn from "./PageTwo.module.scss";

import femida from './femida.png'
import React, {useState} from "react";
import {useScroll, animated} from "@react-spring/web";


export const PageTwo = () => {
    const containerRef = React.useRef<HTMLDivElement>(null!)
const [y, setY] =useState(0)

    const { scrollYProgress } = useScroll({
    onChange:({value:{scrollYProgress}})=>{
        setY(scrollYProgress)
    }
    })


    const arr = [
        'Защита вашего бизнеса на маркетплейсах',
        'Взыскание компенсации за нарушение Ваших интеллектуальных прав',
        'Регистрация Вашего товарного знака (бренда)',
        'Освобождение Вашего продукта от недобросовестного конкурента',
        'Сопровождение бизнеса',
        'Представление Ваших интересов / Ведения ваших дел в судах и в государственных органах',
        'Взыскание убытков и неустойки по спорам любой сложности и любой категории, а также эффективная защита от взыскания убытков и неустойки',
        'Взыскание договорной задолженности (поставка, аренда, подряд, услуги, заем и кредит и т.д.)',
    ]
    return (


        <div className={cn.block} ref={containerRef}>
            <h1 className={cn.title}>Услуги которые мы оказываем</h1>
            <div className={cn.cards}>
                {
                    arr.map((item) => {
                        return <div className={cn.card}>{item}</div>
                    })
                }

                <animated.div className={cn.cycle}
                     style={{
                         clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
                     }}
                />
                <img className={cn.femida} src={femida}/>
            </div>

        </div>

    )
}