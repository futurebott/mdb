import React from 'react'
import PropTypes from 'prop-types'

function SearchBox(props) {
    const {} = props

    return (
        <FormControl>
        <InputLabel>Search Box</InputLabel>
        <Input id="someIt" onKeyPress={handleKeyPress} onChange={handleChanghe}></Input>
        <Button type="submit"  onClick={handleSubmit}> click</Button>
        </FormControl>
    )
}


export default SearchBox
