import { Component } from 'react'

interface IState {
    counter: number
}

export default class State extends Component<any, IState>{
    constructor(props: any) {
        super(props)
        // 初始化
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        // state 的更新是异步的 不能直接调用this.state更新
        for (let i = 0; i < 100; i++) {
            this.setState((state, props) => ({
                counter: state.counter + 1
            }))
        }
    }

    render() {
        return (
            <>
                {this.state.counter}
            </>
        )
    }
}