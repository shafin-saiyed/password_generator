import React,{useState,useEffect} from 'react'
import { CopyOutlined,ReloadOutlined } from '@ant-design/icons';
import { message,Tooltip,Button,Slider,Card } from 'antd';
import 'antd/dist/antd.css';
import "../App.css";
import AdSense from 'react-adsense';

function PasswordGenerator() {
    //const url = 'https://passwordinator.herokuapp.com/generate?num=true&caps=true&char=true&len=8';
    const [password, setPassword] = useState("");
    const [passwordLen, setPasswordLen] = useState("10");
    useEffect(() =>{
        generatePassword();
    },[passwordLen]);
    const generatePassword = async () => {
        console.log(passwordLen)
        const url = 'https://passwordinator.herokuapp.com/generate?'+'len='+passwordLen;
        await fetch(url).then(
            response => response.json()
            .then(
                data => {
                    console.log(data);
                    setPassword(data.data);
                }
            )
        )
    
        //const randomPassword =
          //Math.random().toString(36).slice(2);
    
        //setPassword(randomPassword);
      };
      const copyPassWord = async() =>{
        try {
            await navigator.clipboard.writeText(password);
            message.success("Password copied to your clipboard");
        } catch {
            message.error("Error copying password to clipboard");
        }
      }
      const lengthHandler = async (value) => {
        console.log('onChange: ', value);
        setPasswordLen(value);
        console.log(passwordLen)
        //generatePassword();
      }

    return (
        <div>
            <div className="background">
            <div className="site-card-border-less-wrapper">
                <Card bordered={false} style={{ width: 1000 }}>
                <div className="password">
                        <span>{password}</span>
                        &nbsp;
                        <span onClick={copyPassWord} style={{cursor:'pointer','color': 'darkred'}}><Tooltip title="Copy"><CopyOutlined /></Tooltip></span>
                        &nbsp;
                        <span onClick={generatePassword} style={{cursor:'pointer','color': 'darkred'}}><Tooltip title="New"><ReloadOutlined /></Tooltip></span>
                </div>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper">
                <Card bordered={false} style={{ width: 1000 }}>
                    <span style={{ width: 500 }}>
                <Slider defaultValue={passwordLen} 
                        tooltipVisible
                        min={1}
                        max={20}
                        onChange={lengthHandler} />
                    </span>
                <Button shape="round" size="large" onClick={copyPassWord}><CopyOutlined /> Copy password</Button>
                </Card>
                </div>
            </div>
            <AdSense.Google
            client='ca-pub-8776734790123994'
            slot='5119667375'
            />
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
    );
}

export default PasswordGenerator
