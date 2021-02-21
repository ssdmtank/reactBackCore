import { Component } from 'react'
import '../home.css'
import { Button } from 'antd'

export default class Home extends Component<any, any>{
    render() {
        return (
            <>
                <div
                    className='title'
                    style={{ backgroundColor: 'red' }}
                >
                    Home
                </div>
                <Button type="primary">change</Button>
            </>
        )
    }
}