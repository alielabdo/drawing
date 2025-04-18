export type Color = {
  r: number,
  g: number,
  b: number,
}

export type Camera = {
  x: number,
  y: number,
  zoom: number,
}

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
}

export type RectangleLayer = {
  type: LayerType.Rectangle,
  x: number,
  y: number,
  height: number,
  width: number,
  fill: Color,
  stroke: Color,
  opacity: number,
  cornerRadius?: number,
}

export type EllipseLayer = {
  type: LayerType.Ellipse,
  x: number,
  y: number,
  height: number,
  width: number,
  fill: Color,
  stroke: Color,
  opacity: number,
}

export type PathLayer = {
  type: LayerType.Path,
  x: number,
  y: number,
  height: number,
  width: number,
  fill: Color,
  stroke: Color,
  opacity: number,
  points: number[][],
}

export type TextLayer = {
  type: LayerType.Text,
  x: number,
  y: number,
  height: number,
  width: number,
  text: string,
  fontSize: number,
  fontWeight: number,
  fontFamily: string,
  fill: Color,
  stroke: Color,
  opacity: number,
}

export type Layer = RectangleLayer | EllipseLayer | PathLayer | TextLayer;

export type Point = {
  x: number,
  y: number,
}

export type CanvasState = {
  mode: CanvasMode.None
} | {
  mode: CanvasMode.Dragging
  origin: Point | null
} | {
  mode: CanvasMode.Inserting
  layerType: LayerType.Rectangle | LayerType.Ellipse | LayerType.Text
} | {
  mode: CanvasMode.Pencil
}

export enum CanvasMode {
  None,
  Dragging,
  Inserting,
  Pencil
}