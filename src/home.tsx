import React,{Component} from 'react';
import { Typography } from 'antd';
import { Input } from 'antd';

const { Title } = Typography;
const Search = Input.Search;

interface Props{

}

class Home extends Component<Props>{

    constructor(props:Props)
    {
        super(props);
    }

    render()
    {

        return (<div>
            <Title > Home </Title>
            <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
            </div>);
    }

}

export default Home;
