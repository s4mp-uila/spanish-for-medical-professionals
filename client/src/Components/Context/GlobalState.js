import React, {Component} from "react"
const StateContext = React.createContext()

class StateContextProvider extends Component {
    state = {
        login: false
    }
    
    toggleLogin = () => {
        this.setState(prevState => {
            return {
                login: prevState.login === false ? true : false
            }
        })
    }
    
    render() {
        return (
            <StateContext.Provider value={{login: this.state.login, toggleLogin: this.toggleLogin}}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}

export {StateContextProvider, StateContext}