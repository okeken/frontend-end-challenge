import { useId } from 'react'

interface Props {
  className?: string
  handleChange?: (e: any) => void
  title?: string
  options?: string[]
}
const Select = ({
  handleChange,
  className,
  title,
  options = [''],
  ...others
}: Props) => {
  const id = useId()
  return (
    <>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5"
      >
        <option defaultValue={title}>{title}</option>
        {options?.map((item, idx) => (
          <option key={`${id}-${idx}`} value={item.toLocaleLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
