import './Sort.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Sort = (props) => {
  
  const handleSort = (ev) => {
    props.handleSort(ev.target.value)
  }

  return (
    <form className='sort-container' onSubmit={props.handleSubmit}>
      <label id="label">Sort by: </label>
      <Select className='sort'
        labelId="label"
        value="title-ascending"
        label="Sort by"
        onChange={handleSort}
      >
        <MenuItem
          className='option'
          value='title-ascending'>
          &nbsp; Title, A-Z &nbsp;
        </MenuItem>
        <MenuItem
          className='option'
          value='title-descending'>
          &nbsp; Title, Z-A &nbsp;
        </MenuItem>
        <MenuItem
          className='option'
          value='author-ascending'>
          &nbsp; Author, A-Z &nbsp;
        </MenuItem>
        <MenuItem
          className='option'
          value='author-descending'>
          &nbsp; Author, Z-A &nbsp;
        </MenuItem>
      </Select>
    </form>
  )
}

export default Sort