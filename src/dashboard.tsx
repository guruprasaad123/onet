import React,{Component} from 'react';
import {Row , Col , List , Typography , Skeleton}from 'antd';
import axios from 'axios';

interface Props{
[key:string]:any
}

interface State{
 
    [key:string]:any
}
class Dashboard extends Component<Props>{

    state:State ={
        data:[],
        loading:true,
        filings:[],

    }

    constructor(props:Props)
    {
        super(props);
        this.state={
            data:[{'name': 'Asia Automotive Acquisition Corp', 'id': '1332552#f'}],
            loading:true,
            filings:[]
        }
    }




    componentDidMount()
    {
    
      

    }

    render()
    {
        const filings:any = this.props.filings, loading:boolean = this.state.loading;
        const news : any = this.props.news;
        const results: any= this.props.results;
        return (<div>
            <Row type="flex" justify="center" align="middle" style={{height:'inherit'}}>
           <Col span={12} >

           </Col>
           <Col span={12}>
  {        loading ? (<Skeleton/>) :(
       <div>
    <h3 style={{ marginBottom: 16 }}>Default Size</h3>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={filings}
      renderItem={item => (<List.Item><Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>)}
    />
    </div>
  )
    }
           </Col>
           </Row>
            </div>);
    }

}

export default Dashboard;
