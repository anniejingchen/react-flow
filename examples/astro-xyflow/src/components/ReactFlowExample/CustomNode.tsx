import { memo, type FC, type CSSProperties } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: 'auto',
};

const CustomNode: FC<NodeProps> = ({ data, positionAbsolute }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
          Label: <strong>{data.label}</strong>
        </div>
        <div>
          Position:{' '}
          <strong>
            {positionAbsolute.x.toFixed(2)},{positionAbsolute.y.toFixed(2)}
          </strong>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" style={sourceHandleStyleA} />
      <Handle type="source" position={Position.Bottom} id="b" style={sourceHandleStyleB} />
    </>
  );
};

export default memo(CustomNode);
