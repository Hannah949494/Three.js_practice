import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"

const Box = () => {

    const TestBox = (props : any) => {
        const ref = useRef(null);
        const [hovered, setHovered] = useState(false)

        useEffect(() => {
        },[hovered])

        useFrame(() => {
            if(ref !== null){
                ref.current.rotation.y += 0.01
            }
        })
        return (
            <>
            <mesh onPointerOver={(e) => setHovered(true)} onPointerOut={(e)=> setHovered(false)} ref={ref} {...props} scale={hovered ? 3 : 1.5}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={hovered === true ? "pink" : "orange"}/>
            </mesh>
            </>
        );
    }

    return (
        <>
        <h1>Hello this is my very first THREE JS application</h1>
        <Canvas style={{width: "100%", height: "100vh"}} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10,10,10]} angle={0.5} penumbra={1}/>
            <pointLight position={[-10,-10,-10]} />
            <TestBox position={[-1.5,0,0]}/>
            <TestBox position={[1.5,0,0]}/>
        </Canvas>
        </>
    )
}

export default Box