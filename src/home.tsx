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
            view:'Dashboard',
            ...obj
        })
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


        return (<div className={"container"} style={{ background: '#ECECEC',height:'100vh'}}>
      
      {
          (view === 'Search')?( <Row type="flex" justify="center" align="middle" style={{height:'inherit'}}>
           <Col span={16} >
           <Card style={{display:'flex',justifyContent:'center',alignItems:'center'}} bordered={false}>
            <Title > Ticker App </Title>
    
    <FormLayout switch={this.setDashBoardVal}/>
    </Card>
     </Col>
    </Row>
       ):(<Dashboard filings={filings} news={news} results={results}/>    )
    }
 </div>
        )
}
}

export default Home;
