import { Component } from 'react';

interface IUser {
    age: number
}

interface IProps {
    name: string
    age?: number
    auth?: boolean
    user?: IUser
}


export default class Comp extends Component<IProps, any>{
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age}</h1>
                <h1>{this.props.user?.age}</h1>
            </>
        )
    }
}