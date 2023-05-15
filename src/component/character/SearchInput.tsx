import { TextField } from '@mui/material'
import React from 'react'
import style from './index.module.css'

const SearchInput = ({name, handleNameQuery}:any) => {

  return (
    <div>
        <TextField
                id="search-bar"
                fullWidth
                className={style.searchBar}
                name={name}
                data-testid={name}

                style={{marginRight:''}}
                onChange={(e) => {
                    handleNameQuery("name", e.target.value)
                }}

                variant="outlined"
                placeholder="Search Character..."
                size="small"
            />
    </div>
  )
}

export default SearchInput