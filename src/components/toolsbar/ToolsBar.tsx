import { CanvasMode, CanvasState, LayerType } from "~/types";
import SelectionButton from "./SelectionButton";
import ShapesSelectionButton from "./ShapesSelectionButton";
import ZoomInButton from "./ZoomInButton";
import ZoomOutButton from "./ZoomOutButton";
import PencilButton from "./PencilButton";
import TextButton from "./TextButton";

export default function ToolsBar({
  canvasState,
  setCanvasState,
  zoomIn,
  zoomOut,
  canZoomIn,
  canZoomOut
} : {
  zoomIn: () => void,
  zoomOut: () => void,
  canZoomIn: boolean,
  canZoomOut: boolean,
  canvasState: CanvasState,
  setCanvasState: (newState: CanvasState) => void
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-lg bg-white p-1 shadow-[0_0_3px_rgba(0,0,0,0,18)]">
      <div className="flex justify-center items-center gap-3">
        <SelectionButton 
          isActive={canvasState.mode === CanvasMode.None || canvasState.mode === CanvasMode.Dragging}
          canvasMode={canvasState.mode} 
          onClick={(canvasMode) => setCanvasState(canvasMode === CanvasMode.Dragging ?
            {mode: canvasMode, origin: null} : {mode: canvasMode}
          )}
        />
        <ShapesSelectionButton 
          isActive={canvasState.mode === CanvasMode.Inserting && [LayerType.Rectangle, LayerType.Ellipse].includes(canvasState.layerType)}
          canvasState={canvasState}
          onClick={(layerType) => setCanvasState({mode: CanvasMode.Inserting, layerType})}
        />

        <PencilButton 
          isActive={canvasState.mode === CanvasMode.Pencil}
          onClick={() => setCanvasState({mode: CanvasMode.Pencil})}
        />

        <TextButton 
          isActive={
            canvasState.mode === CanvasMode.Inserting && 
            canvasState.layerType === LayerType.Text
          }
          onClick={() => setCanvasState({mode: CanvasMode.Inserting, layerType: LayerType.Text})}
        >

        </TextButton>

        <div className="w-[1px] self-stretch bg-black/10"/>
        <div className="flex items-center justify-center">
          <ZoomInButton onClick={zoomIn} disabled={!canZoomIn}/>
          <ZoomOutButton onClick={zoomOut} disabled={!canZoomOut}/>
        </div>
      </div>
    </div>
  )
}