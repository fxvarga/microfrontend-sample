import ReactFlow, { Background, Controls, ReactFlowInstance } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import { nodes } from './nodes';
import { edges } from './edges';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import React from 'react';

const nodeTypes = {
  custom: CustomNode,
};
interface IWorkflowProps {
  id:string;
  onDetailsClick : (id:string)=>void
  panelOpen?:boolean
}

const Workflow = React.memo((props:IWorkflowProps)=> {
  const {onDetailsClick} = props;

  const flowRef = useRef<ReactFlowInstance | null>(null);

  const onInit = useCallback((instance: ReactFlowInstance) => {
    flowRef.current = instance;
    flowRef.current.fitView({
        duration: 300,
        padding:  0.7, // less padding on wide view
    });
  }, []);
  const memoizedNodes = useMemo(()=> {
    return nodes.map(n => ({
    ...n,
    data: {
      ...n.data,
      onDetailsClick,
    },
  }))
}, [onDetailsClick]);
  return (
      <ReactFlow
        nodes={memoizedNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        onInit={onInit}
      >
        <Background />
        <Controls />
      </ReactFlow>
  );
});
export default Workflow;
