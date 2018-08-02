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

class RegisterForm extends React.Component {

    state = {
        username: '',
        email: '',
        city: '',
        password1: '',
        password2: '',
        showPassword: false
    }

    handlePasswordVisibility = () => {
        this.setState({ showPassword : !this.state.showPassword})
    }

    handleChange = (field) => (event) => {
        this.setState({ [field.toLowerCase() ] : event.target.value })
    }

    register = (event) => {
        if (this.state.password1 != this.state.password2) {
            alert('PASSWORDS MUST BE ETHE SAME')
        } else {
            let data = {
                username: this.state.username,
                password: this.state.password1,
                email: this.state.email
            }

            console.log(data)

            axios.post('/users/register/', data)
                .then(function(response){
                    if (response.data.response === 'success') {
                        alert('SUCCESFULLY REGISERED')
                        window.location = '/'
                    } else {
                        alert('FAILED')
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
        }
    }

    render () {
        const { classes } = this.props
        const nonPassFields = ['Username', 'Email']
        const passFields = ['Password1', 'Password2']
        return (
            <div>
                {
                    nonPassFields.map((field, i) => {
                        return (
                            <FormControl className={classes.textField} key={i}>
                                <InputLabel>{field}</InputLabel>
                                <Input
                                    type={'text'}
                                    value={this.state[field]}
                                    onChange={this.handleChange(field)}
                                />
                            </FormControl>
                        )
                    })
                }
                {
                    passFields.map((field, i) => {
                        return (
                            <FormControl className={classes.textField} key={i}>
                                <InputLabel>{field}</InputLabel>
                                <Input
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state[field]}
                                    onChange={this.handleChange(field)}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={this.handlePasswordVisibility}
                                        >
                                        {this.state.showPassword ? 
                                        <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        )
                    })
                }
                <br />
                <Button
                    className={classes.button}
                    onClick={this.props.switchAction('login')}
                    variant="contained"
                    color="primary"
                >
                    Switch to login
                </Button>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.register}
                >
                    Register
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(RegisterForm) 
// вернет classes в this.props