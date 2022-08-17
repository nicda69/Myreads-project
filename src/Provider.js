import { createContext, Component } from "react";

export const MyContext = createContext();

export default class provider extends Component {
    constructor() {
        super();
        this.state = {
            books:[],
            currentReading:[],
            wantToRead:[],
            read:[]
        }
    }
    render() {
        return(
        <MyContext.Provider value={{...this.state}}>
            {this.props.children}
        </MyContext.Provider>)
    }
}