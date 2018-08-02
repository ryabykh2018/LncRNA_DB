import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = "csrftoken"


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    }    
})



class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
        showPassword: false
    }

    handleChange = (field) => (event) => {
        this.setState({ [field] : event.target.value})
    }

    handleClickShowPassword = (event) => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    login = (event) => {
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        
        // add after login logic here
        axios.post('/users/login/', data)
            .then(function (response) {
                if (response.data.response === 'success'){
                    alert('LOGGED IN')
                    window.location = '/'
                } else {
                    alert('FAILED')
                }
            })
            .catch(function(error){
                console.log(error)
            })
    }

    render () {
        const {classes} = this.props
        return (
            <div>
                <FormControl className={classes.textField}>
                    <InputLabel>Username</InputLabel>
                    <Input
                        type={'text'}
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                    />
                </FormControl>
                <FormControl className={classes.textField}>
                    <InputLabel>Password</InputLabel>
                    <Input
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={this.handleClickShowPassword}
                            >
                            {this.state.showPassword ? 
                            <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                <br />
                <Button
                    className={classes.button}
                    onClick={this.props.switchAction('register')}
                    variant="contained"
                    color="primary"
                >
                    Switch to Register
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.login}
                >
                    Login
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(LoginForm)