import React from 'react'
import{useState} from 'react'
import { Navbar,Nav,Container,Button,Row,Col,InputGroup,FormControl,Form,Table,Alert}from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
function Home() {
    const[row,setRow]= useState(0)
    const[item,setItem]= useState(0)
    const[remove,setRemove]= useState(0)
    const[addbtn,setAddbtn]= useState(false)
    const[removebtn,setRemovebtn]= useState(false)
    function addRow(){
        setItem(row)
        console.log("remove",row);
    }
    function removeRow(event){
        event.preventDefualt()
        let product_code= event.target.productcode.value
        let product_qnty= event.productqnty.value
        let index= products.findIndex(data=>data.product_code==product_code)
        alert("products removed!!!!")
        if(products[index].product_qnty<product_qnty){
            product_qnty=products[index].product_qnty
        }
        setProducts([...products,products[index].product_qnty-=product_qnty])
    }
    const removeItems=[]
    for(let i=1;i<=remove;i++){
        removeItems.push(
            <Form onSubmit={remove}>
                <Col lg={6} style={{marginLeft:"25%"}}>
                    <InputGroup>
                    <FormControl
                    placeholder="ENTER PRODUCT CODE"
                    aria-label="PRODUCT CODE"
                    name={"productcode"}
                    aria-describedby="basic-addon1"
                    />
                     <FormControl
                    placeholder="ENTER PRODUCT QUANTITY"
                    aria-label="PRODUCT QUANTITY"
                    name={"productqnty"}
                    aria-describedby="basic-addon1"
                    />
                <Button variant="danger" type="submit" style={{border:"1px solid black"}}>UPDATE</Button>
                    


                    </InputGroup>
                </Col>
            </Form>
        )
    }
    const items=[]
    for(let i=1;i<=item;i++){
        items.push(
            <Form onSubmit={add}>
                <Col lg={6} style={{marginLeft:"25%"}}>
                    <InputGroup>
                    <FormControl
                     placeholder=" ENTER PRODUCT CODE"
                     aria-label="PRODUCT CODE"
                     name={"productcode"}
                     aria-describedby="basic-addon1"
                 />
     
                 <FormControl
                     placeholder=" ENTER PRODUCT NAME"
                     aria-label="PRODUCT NAME"
                     name={"productname"}
                     aria-describedby="basic-addon1"
                 />

            <FormControl
                     placeholder=" ENTER PRODUCT QUANTITY"
                     aria-label="PRODUCT QUANTITY"
                     name={"productqnty"}
                     aria-describedby="basic-addon1"
                 />

                 <Button variant="warnindg" style={{border:"1px solid black"}}>ADD</Button>
                    </InputGroup>
                </Col>
            </Form>
               
            


        )
    }

    const[table,setTable]=useState(false)
    const[products,setProducts]=useState([])
    function add(event){
        event.preventDefualt()
        let product_code=event.target.productcode.value
        let product_name= event.target.productname.value
        let product_qnty=event.target.productqnty.value
            const prdct={product_code,product_name,product_qnty}
            if(product_code!=""& product_name!=""& product_qnty!=""){
                setProducts([...products,prdct])
                console.log("inside loop");
            }
            else{
                console.log("outside loop");
            }
        for(let data of products){
            console.log("prdctdata",data);
            if(product_code!=""& product_name!=""& product_qnty!=""){
                if(data.product_code==product_code){
                    let new_qnty =Number(data.product_qnty)+Number(product_qnty)
                    setProducts([...products,data.product_qnty=new_qnty])
                    console.log("Duplicate");
                }
            }
        }
        console.log("Arr",products);
        console.log(product_code,product_qnty);
    }

    return (
        <div>
           <Navbar bg='blue' expand='lg'>
               <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                    <Button variant='secondery' onClick={()=>{setAddbtn(!addbtn)
                        setAddbtn(false)
                        setTable(false)

                     }}>ADD Products </Button>{' '}

                    </Nav>
                    <Nav className='me-auto'>
                    <Button variant='secondery' onClick={()=>{setRemovebtn(!removebtn)
                        setAddbtn(false)
                        setTable(false)

                     }}>Remove Products </Button>
                     </Nav>
                     <Nav className='me-auto'>
                    <Button variant='secondery' onClick={()=>{setTable(!table)
                        setAddbtn(false)
                        setTable(false)

                     }}>List Products </Button>
                     </Nav>
                </Navbar.Collapse>


               </Container>
               
               </Navbar> 
               {addbtn?
               <Row>
                   <Col lg={4} style={{marginLeft:"30%",marginTop:"50px"}}>
                       <InputGroup className='mb-3'>
                           <FormControl
                           placeholder="NO OF ITEM REMOVED"
                           aria-label="itemremove"
                           aria-describedby="basic-addon1"
                           onChange={(e)=>setRow(e.target.value)}/>
                           <Button variant='danger' onClick={addRow}>ADD</Button>
                       </InputGroup>
                   </Col>
               </Row>
               :null}
               {removebtn?
               <Row>
               <Col lg={4} style={{marginLeft:"30%",marginTop:"50px"}}>
                       <InputGroup className='mb-3'>
                           <FormControl
                           placeholder="NO OF ITEM REMOVED"
                           aria-label="itemremove"
                           aria-describedby="basic-addon1"
                           onChange={(e)=>setRow(e.target.value)}/>
                           <Button variant='danger' onClick={removeRow}>Show Fields</Button>
                       </InputGroup>
                   </Col>
                   {removeItems}
                   </Row>:null}

               {(addbtn)?items:null}
               {(table)?<Col lg={6} style={{marginLeft:"25%",marginTop:"50%"}}>

<Table striped bordered hover variant='dark'>
    <thead>
        <tr>
            <th>PRODUCT CODE</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT QUANTITY</th>
        </tr>
    </thead>
    
    {
        products.map((item)=>
        item.product_code?
        <tr>
            <td>{item.product_code}</td>
            <td>{item.product_name}</td>
            <td>{item.product_qnty}</td>
        </tr>:null)
    }
    </Table> 


               </Col>:null}
        </div>
    )
}

export default Home
