import cn from "./PageOne.module.scss";
import logo from "../../assets/logo.png";
import classNames from "classnames";


export const PageOne = () =>{


    return (

        <div className={cn.block}>

        <img src={logo} className={cn.logo}/>

        <h3 className={cn.title}>
            "Больше чем юридическое сопровождение,
            <br/>
            &nbsp;&nbsp;мы – ваши союзники в достижении целей"
        </h3>
        <div className={cn.arrowPage}>

            <div className={classNames(cn.arrow, cn.arrowFirst)}></div>
            <div className={classNames(cn.arrow, cn.arrowSecond)}></div>
        </div>
    </div>)
}