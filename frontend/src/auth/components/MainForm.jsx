import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 350,
        textAlign: 'center',
        margin: '0 auto'
    },
    wrapper: {
        marginTop: 100
    }
})


class MainForm extends React.Component {

    state = {
        action: 'register'
    }

    handleActionChange = (value) => (event) => {
        this.setState({ action : value })
    }

    render () {
        const { classes } = this.props // или const ttlk =this.props.classes
        // classes - словарь, где слову стоит название класса, который сгенерировал родительский компонент
        return (
            <div className={classes.wrapper}> 
                <Paper className={classes.root} elevation={1}>
                    {
                        this.state.action === 'login' ?
                        <LoginForm 
                            switchAction={this.handleActionChange}
                        />
                        :
                        <RegisterForm 
                            switchAction={this.handleActionChange}
                        />
                    }
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(MainForm)
// export default MainForm экспортировал класс и могу получить только rander

