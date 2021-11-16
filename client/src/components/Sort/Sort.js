import './Sort.css'

const Sort = (props) => {
  
  const handleSort = (ev) => {
    props.handleSort(ev.target.value)
  }

  return (
    <form className='sort-container' onSubmit={props.handleSubmit}>
      <label htmlFor='sort'>sort by:</label>
      <select className='sort' onChange={handleSort}>
        <option
          className='option'
          value='name-ascending'>
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option
          className='option'
          value='name-descending'>
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
      </select>
    </form>
  )
}

export default Sort