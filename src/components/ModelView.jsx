import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import Loader from "./Loader";

import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.8} />

      <PerspectiveCamera makeDefault position={[2, 0, 3]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.8}
        minPolarAngle={1.57079}
        maxPolarAngle={1.57079}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? 17 : 19} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
