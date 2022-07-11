import {} from 'react'

interface Props {
  className?: string
  handleChange?: (e: any) => void
  placeholder?: string
  disabled:boolean
}
const Input = ({
  handleChange,
  className,
  placeholder = 'search your resources',
  disabled=false,
  ...others
}: Props) => {
  return (
    <>
      <input
        {...others}
        placeholder={placeholder}
        className="block w-full border p-3"
        onChange={handleChange}
      />
    </>
  )
}

export default Input
