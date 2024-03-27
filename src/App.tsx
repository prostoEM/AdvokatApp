
import cn from './App.module.scss';

import video from './assets/video.mp4'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import classNames from "classnames";


import  {useState} from "react";
import {PageOne} from "./components/PageOne/PageOne";
import {PageTwo} from "./components/PageTwo/PageTwo";
import { PageTree } from './components/PageTree/PageTree';
import {PageFour} from "./components/PageFour/PageFour.tsx";

export function App() {


const [isVideoPlay, onChangeVideoPlay] = useState(false)

    return (
      <div

          className={cn.body}>
          <div className={ classNames(cn.overlay,isVideoPlay&& cn.overlayHide)}>

          </div>
          <video onCanPlay={()=>onChangeVideoPlay(true)} loop autoPlay muted className={cn.video}>
              <source src={video} type="video/mp4"/>
          </video>

          <Parallax pages={4}>
              <ParallaxLayer sticky={{start: 0, end: 1}}>

                <PageOne />

              </ParallaxLayer>

              <ParallaxLayer sticky={{start: 1, end: 1}}>
                  <PageTwo />

              </ParallaxLayer>
            <ParallaxLayer sticky={{start: 2, end:2 }}>
              <PageTree/>

            </ParallaxLayer>
            {/*<ParallaxLayer sticky={{start: 0, end:1 }}>*/}
            {/*  <PageFour />*/}

            {/*</ParallaxLayer>*/}
          </Parallax>
      </div>
  );
}

export default App;
