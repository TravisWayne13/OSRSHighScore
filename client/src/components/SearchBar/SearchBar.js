import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const SearchBar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
  }))

  const classes = useStyles()

  return (
  <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
  >
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" />
    </form>
    <Button className="search" variant="outlined">Search</Button>    
  </Grid>
  )
}

export default SearchBar