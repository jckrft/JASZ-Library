import TextField from '@mui/material/TextField'
import './Search.css'

const Search = (props) => {
    return (
        <form className='search-form' onSubmit={(ev) => props.onSubmit(ev)}>
            <TextField
                className='search-input'
                id='outlined-search'
                value={props.value}
                onChange={(ev) => props.handleSearch(ev)}
                name='Search'
                placeholder='Search'
                type='search'
                autoFocus
            />
        </form>
    )
}

export default Search