import { ContactShadows, PresentationControls, useGLTF } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { Canvas, useLoader } from "react-three-fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import '../../../../public/watch-vl.glb'

const ThreeDObject = () => {

    const Watch = (props : any) => {
        const ref = useRef(null)
        // const {nodes, materials} = useGLTF("watch-v1.glb")

        // const {nodes, materials} = useGLTF("Earth_Test_Scene.glb")
        const gltf = useLoader(GLTFLoader, 'Earth_Test_Scene.glb')

        
        // console.log(nodes)
        return (
            <>
            {/* <group ref={ref} {...props} dispose={null}> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry} material={materials.watch}></mesh> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Earth.geometry} material={materials.Earth}></mesh>
                <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Cube}></mesh>
                <mesh castShadow receiveShadow geometry={nodes.Camera_1.geometry} material={materials.Camera_1}></mesh> */}
                {/* <mesh castShadow receiveShadow geometry={nodes.Earth.geometry} material={materials.Earth}></mesh> */}
            {/* </group> */}
            <Suspense fallback={null}>
            <primitive object={gltf.scene} />
            </Suspense>
            </>
        )
    }

    return (
        <>
        <Canvas style={{height: "100vh", background : "#111"}}>
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1}/>
            <PresentationControls>
            <Watch position ={[1, 1, 1]} scale={10}/>
            </PresentationControls>
            {/* <ContactShadows rotation-X={Math.PI /2} position={[0, -1.4, 0]} opacity={0.75} height={10}/> */}
            
        </Canvas>
        </>
    )
}

export default ThreeDObject