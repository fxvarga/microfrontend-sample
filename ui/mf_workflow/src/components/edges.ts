import { Edge } from 'reactflow';

export const edges: Edge[] = [
  { id: 'e1', source: 'start', target: 'instance', type: 'smoothstep' },
  { id: 'e2', source: 'instance', target: 'review', type: 'smoothstep' },
  {
    id: 'e3',
    source: 'review',
    target: 'step-submitted',
    type: 'smoothstep',
    label: 'Path 1',
  },
  {
    id: 'e4',
    source: 'review',
    target: 'approved',
    type: 'smoothstep',
    label: 'Path 2',
  },
];
