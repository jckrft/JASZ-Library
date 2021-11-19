import './Search.css'
import TextField from '@mui/material/TextField';

const Search = (props) => {
    return (
        <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <TextField
                className="search-input"
                id="outlined-search"
                value={props.value}
                onChange={(e) => props.handleSearch(e)}
                name="Search"
                placeholder="Search"
                type="search"
                autoFocus
            />
        </form>
    )
}

export default Search