import cn from "./PageTree.module.scss";



import { Corusel } from './ui/Corusel/Corusel';


export const PageTree = () => {




    return (


        <div className={cn.block}>
            <h1 className={cn.title}>Крупные кейсы</h1>
           <Corusel />

        </div>

    )
}