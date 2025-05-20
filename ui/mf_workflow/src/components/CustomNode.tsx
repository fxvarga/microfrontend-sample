// CustomNode.tsx
import { NodeProps, Handle, Position } from 'reactflow';
import { FiZap, FiList } from 'react-icons/fi';
import './CustomNode.css';

export default function CustomNode({ data, id }: NodeProps) {

  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} className="node-handle" />

      <div className="node-content">
        <div className="node-icon">
          <FiZap size={18} />
        </div>
        <div className="node-text">
          <div className="node-title">{data.label}</div>
          <div className="node-subtitle">{data.subtitle}</div>
        </div>
        <div className="node-actions">
          <FiList
            className="node-action-icon"
            onClick={() => data?.onDetailsClick?.(id)} // ✅ click sends node ID to host
          />
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="node-handle" />
    </div>
  );
}
