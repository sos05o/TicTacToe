import { X as Icon } from 'react-feather';

interface CircleProps {
  isInFront: boolean
}

const Cross: React.FC<CircleProps> = ({ isInFront }) => {
  return (
    <Icon className={`w-12 h-12 ${isInFront ? 'stroke-rose-300' : 'stroke-rose-500'}`} />
  )
}

export default Cross;
