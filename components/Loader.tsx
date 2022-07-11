import { classNames } from '../utils'

interface Props {
  className?: string
}
const Loader = ({ className }: Props) => {
  return (
    <div className={classNames(className, 'flex justify-center items-center')}>
      <div className="loader p-5 flex space-x-3">
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Loader
