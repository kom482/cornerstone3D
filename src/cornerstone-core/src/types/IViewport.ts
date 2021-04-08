import ICamera from './ICamera'
import Point2 from './Point2'
import Point3 from './Point3'
import ViewportInputOptions from './ViewportInputOptions'

interface IViewport {
  uid: string
  sceneUID?: string
  renderingEngineUID: string
  type: string
  canvas: HTMLCanvasElement
  sx: number
  sy: number
  sWidth: number
  sHeight: number
  defaultOptions: any
  //
  canvasToWorld: (canvasPos: Point2) => Point3
  getCamera: () => ICamera
  getFrameOfReferenceUID: () => string
  getActors: () => any
  render: () => void
  setCamera: (cameraOptions: ICamera) => void
  worldToCanvas: (worldPos: Point3) => Point2
  //
  // These only exist on stack viewport, how do we handle this?
  getImageIds?: () => Array<string>
  getCurrentImageId?: () => string
  getCurrentImageIdIndex?: () => number
  setImageIdIndex?: (number) => void
}

/**
 * @type ViewportInput
 * This type defines the shape of input, so we can throw when it is incorrect.
 */
type PublicViewportInput = {
  canvas: HTMLCanvasElement
  sceneUID?: string
  viewportUID: string
  type: string
  defaultOptions: ViewportInputOptions
}

type ViewportInput = {
  uid: string
  sceneUID?: string
  renderingEngineUID: string
  type: string
  canvas: HTMLCanvasElement
  sx: number
  sy: number
  sWidth: number
  sHeight: number
  defaultOptions: any
}

export { ViewportInput, PublicViewportInput }

export default IViewport
