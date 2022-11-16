import React from "react";
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './style.css';

import AppContext from "../contexts/AppContext";
import { useContext } from "react";


export default function Searchbar(){
  const {searchbarhold} = useContext(AppContext);
console.log("header context:",searchbarhold);

  function onSearchbar(searching){
   searchbarhold(searching.target.value)
   
   }
    return(
      <>
    
        <InputGroup className='searchbox'>
      <DropdownButton id="dropdown-basic-button"  variant="secondary" title="All" className='drp'>
        <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Electronics</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gift card</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Beauty</Dropdown.Item>
        <Dropdown.Item href="#/action-5">jewellry</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Apps</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Toys</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Furniture</Dropdown.Item>
    </DropdownButton>
      <Form className='searchbar '>
      <Form.Control 
      aria-label='searchText'
      aria-describedby='basic-addon1' onChange={onSearchbar}
      placeholder="search here.. "
       />
       </Form>

   <Button  >
    <img className="searchimg"
     src ="https://th.bing.com/th/id/OIP.XTslyvDKLh-4Dmh5aM95ZQHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7"
     />
     </Button>
     
     </InputGroup>
<InputGroup>
    <DropdownButton id="dropdown-basic-button"  variant="dark"  title={<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIANgBIAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQGBQMC/9oACAEBAAAAALsAAAAACQAAAAAAAAAAAAAAAAAIAAAAACQAAAAAIAAAAACYAAAAACYAAAAAB2QAIHi9hIAAAAo5yyraK+AAAAHhldRMRmdRYAAAAGc6Xtz46HxydKAAAAMnpafHjsXsxrQAAABm+p6c50fnj6YAAAAV8vppMzprIAAAAUM5dUtD0QAAAAFVZkAAY6AAAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//EABkBAQEBAQEBAAAAAAAAAAAAAAABAwQCBf/aAAoCAhADEAAAAPl/RAAAAAAAAAAAAAAAAAAAAAAADq5wAAAAA6uYADSeh5Z0AAAA2kUY0AAAA2ninuY0AAAArWGVgADi4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8QAMBAAAQMDAgQDBwUBAAAAAAAAAQIDEQAEUQUSEyExMiJAchVBUGNxosEzNICBgrH/2gAIAQEAAT8A/iqu5tUd9w0DgqpF1ar7H2ifUPgN7fNWSJVzWe1FLe1PUpgLKMI5JpOguctz6KVoS5Ox9MUhepabBIWEYVzTVjfs3qcLHVHnrl9Fsw48rokVasPaldl16SifGqkNoabKGUbSgzsorT4iDyWyVj/NBYGwk8kMBaj9aWhDrWx5E8Qzsq8tndOug8zIRMoVVrcJumEOp9/UYPndfeI4DP1XVkwLW1Q2tcHrPSJp1SkgLJjb2vIEgeoU4/8AkxjeIMHBpt/8GM7BAppSiCtPOe55QhP0QKumBd2zjSHJUecxPStBehb7Jxv87rf75GOGim/0kcEI4e0bOvSntoXy4IX8sr3fZT+/x7e6md8I3900zBXz4JX80r3ffSuxfF2BG07/AE++tGj2idvTYvzuvsmWHvqirR8Xdq24tBxEzMU4lcBBHd2soMbvUact/wDpTIEDwCTAwKbt/wACSJA3iRIwabSQkpA7e5lZmPScVcvJtbVx1CDI5bZiJrQGjvfewNnnbq3TdMLaV7+hwasrl3TrosvSESd6aQtDrZcaWFFfILotgEgDkhkpH+qCE+AESFsBCv6pakIb3vLCS3A31f3Tl/chhglTcjYKtLZNrboaH9nJ89fWDV4nDg6Lo+0tMlMrSjI5ppGvcxvt/XBo69i29EmgdT1KEStSPtqw05qzE9zh6q+ArsbRZlVu3SLGzQZFu3QEeRk5NScmpOTUnJqTk1Jyak5NScmpOTUnJqTk1Jyak5NScmpOTUnJqTk1Jyak5NScmpOTUnJqTk1Jyak5NScmpOTUnJqTk1Jyak5NScmpOTUnJqTk1Jyf4Q//xAAiEQABBAICAgMBAAAAAAAAAAABAAIUYhGhAzITMCEiMWD/2gAIAQIBAT8A/iI19KNfSjX0o19KNfSjX0o19KNfSi20ottKNfSjX0o19KNfSjX0o19KNfSjX16GMBy53ULyn8aAAvK78cAQnsAw5vU+93xxsCY3Ke3CZ88fIPePvx4HZqBwico/TjwezveCQcgryMd3YvIxvViJJOT/AEX/xAAdEQADAQEAAgMAAAAAAAAAAAAAFGKhETBgQEFQ/9oACAEDAQE/APSGJ0YnRidGJ0YnRidGJ0YnRidGJ0YnRidGJ0YnRidGJ0YnRid8PDnwPv8AF4c9j//Z "className={"flag"} />}>
    <Dropdown.Item href="#action/1">English</Dropdown.Item>
    <Dropdown.Item href="#action/2">Hindi</Dropdown.Item>
    <Dropdown.Item href="#action/3">Tamil</Dropdown.Item>
    <Dropdown.Item href="#action/4">Bangali</Dropdown.Item>
    <Dropdown.Item href="#action/5">Telgu</Dropdown.Item>
    <Dropdown.Item href="#action/6">Kannada</Dropdown.Item>
    <Dropdown.Item href="#action/7">Mlayalam</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
  </>
    )
}