import React, {useEffect} from "react"
import Lights from "../../../Lights/Lights";
import { Perf } from 'r3f-perf/dist/r3f-perf.cjs.development.js';
import Floor from "../../../Floor/Floor";
import { OrbitControls } from "@react-three/drei";
import Camera from "../Camera/Camera";

const GameContents: React.FC = () => {

    return (
        <>
            <Camera/>
            <Lights/>
            <Floor/>
            <Perf />
        </>
    )
}

export default GameContents