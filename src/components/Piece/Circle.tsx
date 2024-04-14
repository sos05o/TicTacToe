import { Circle as Icon } from 'react-feather';

interface CircleProps {
  isInFront: boolean
}

const Circle: React.FC<CircleProps> = ({ isInFront }) => {
  return (
    <Icon className={`w-7 h-7 ${isInFront ? 'stroke-indigo-300' : 'stroke-indigo-500'}`} />
  )
}

export default Circle;
