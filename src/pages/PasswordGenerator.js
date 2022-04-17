import React,{useState,useEffect} from 'react'
import { CopyOutlined,ReloadOutlined } from '@ant-design/icons';
import { message } from 'antd';
import 'antd/dist/antd.css';
import "../App.css";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    useEffect(() =>{
        generatePassword();
    },[]);
    const generatePassword = () => {
        const randomPassword =
          Math.random().toString(36).slice(2);
    
        setPassword(randomPassword);
      };
      const copyPassWord = async() =>{
        try {
            await navigator.clipboard.writeText(password);
            message.success("Password copied to your clipboard");
        } catch {
            message.error("Error copying password to clipboard");
        }
      }
    return (
        <div>
            <div className="background">
                <h1 className="heading">Generate a random password</h1>
                <div className="wrapper">
                    <div className="password">
                        <span>{password}</span>
                        &nbsp;
                        <span onClick={copyPassWord} style={{cursor:'pointer'}}><CopyOutlined /></span>
                        &nbsp;
                        <span onClick={generatePassword} style={{cursor:'pointer'}}><ReloadOutlined /></span>
                    </div>
                    <button className="generate-password" onClick={copyPassWord} style={{cursor:'pointer'}}>Copy password</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator
