import PropTypes from 'prop-types'

function Button({onClick, click, label}) {
  return (
    <>
        <div>
        </div>
      <button onClick={onClick} label={label}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
        {click}
      </button>
    </>
  )
}
  Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

export default Button
