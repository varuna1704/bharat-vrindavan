import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function createDracoGltfLoader() {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)

  return gltfLoader
}

export const dracoCompressionCommand = 'npx gltf-pipeline -i model.glb -o model-draco.glb --draco.compressionLevel 10'
