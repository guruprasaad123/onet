import React,{Component} from 'react';
import { Typography } from 'antd';
import { Input } from 'antd';
import { Row, Col,Card } from 'antd';
import FormLayout from './FormLayout';
import Dashboard from './dashboard';

const { Title } = Typography;
const Search = Input.Search;

interface Props{

}

interface State{
    [key:string]:any
}

class Home extends Component<Props>{

    state:State ={

    }
    constructor(props:Props)
    {
        super(props);
        this.state={
            view:'Search'
        }
    }

    setDashBoardVal =( obj : any)=>{
        this.setState({
            ...obj
        },
        ()=>{
            this.toggleView();
        })
    }

    toggleView = ()=>{
       if( this.state.view==='Search')
    {
        this.setState({
            view:'Dashboard'
        });
    }
    else{
        this.setState({
            view:'Search'
        });
    }
    }

    render()
    {
        const view:string = this.state.view;
        let filings:any , news:any , results : any;
        if(view === 'Dashboard')
        {
            filings = this.state.filings;
            news = this.state.news;
            results = this.state.results;
        } 


        return (<div className={"container"} style={{ background: '#ECECEC',minHeight:'100vh'}}>
      
      {
          (view === 'Search')?( <Row type="flex" justify="center" align="middle" style={{height:'inherit'}}>
           <Col span={16} >
           <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}} bordered={false}>
            <Title > Ticker App </Title>
    
    <FormLayout toggle={this.toggleView} switch={this.setDashBoardVal}/>
    </Card>
     </Col>
    </Row>
       ):(<Dashboard filings={filings} news={news} results={results} toggleView={this.toggleView}/>    )
    } 

 </div>
        )
}
}

export default Home;
