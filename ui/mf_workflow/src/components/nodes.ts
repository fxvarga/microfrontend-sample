import { Node } from 'reactflow';

export const nodes: Node[] = [
  {
    id: 'start',
    type: 'custom',
    position: { x: 400, y: 0 },
    data: { label: 'Search Actors' },
  },
  {
    id: 'instance',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: { label: 'Match with Genre' },
  },
  {
    id: 'review',
    type: 'custom',
    position: { x: 400, y: 200 },
    data: { label: 'Split A/B Testing' },
  },
  {
    id: 'step-submitted',
    type: 'custom',
    position: { x: 200, y: 350 },
    data: { label: 'Above 5 rating' },
  },
  {
    id: 'approved',
    type: 'custom',
    position: { x: 600, y: 350 },
    data: { label: 'Below 5 rating' },
  },
];
