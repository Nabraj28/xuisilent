# xuisilent

A command line interface for adding components to your project

## Installation

Use the `npm i xuisilent` command to install the ui library that can be imported in your project to use the ui components

```bash
npm i xuisilent
```
## Usage

```bash
import { Button,Input,Label } from 'xuisilent'

const App = ()=>{
    
    <div>   
            <Label>Username:</Label>
            <Input placeholder="Enter username" border="gray" />
            <Label>Password:</Label>
            <Input placeholder="Enter password" border="gray" />
            <Button bgColor="primary" >
             Login
            </Button>
    </div>
}
```