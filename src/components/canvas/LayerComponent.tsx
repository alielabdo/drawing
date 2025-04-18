import { useStorage } from "@liveblocks/react";
import { memo } from "react";
import { LayerType } from "~/types";
import Rectangle from "./Rectangle";
import Ellipse from './Ellipse';
import Text from "./Text";
import Path from "./Path";
import { colorToCss } from "~/utils";

const LayerComponent = memo(({id}: {id: string}) => {
  const layer = useStorage((root) => root.layers.get(id))
  if(!layer) {
    return null;
  }
  switch(layer.type) {
    case LayerType.Rectangle :
      return <Rectangle id={id} layer={layer}/>;
    case LayerType.Ellipse :
      return <Ellipse id={id} layer={layer} />;
    case LayerType.Text :
      return  <Text id={id} layer={layer}/>
    case LayerType.Path :
      return (
        <Path 
          points={layer.points} 
          x={layer.x} 
          y={layer.y} 
          fill={layer.fill ? colorToCss(layer.fill) : "#CCC"} 
          stroke={layer.stroke ? colorToCss(layer.stroke) : "#CCC"}
          opacity={layer.opacity}
        />
      )
    default :
      return null;
  }
})

LayerComponent.displayName = "LayerComponent"

export default LayerComponent;