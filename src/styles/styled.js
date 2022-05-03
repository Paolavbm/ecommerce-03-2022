import styled from "styled-components"


export const DivFooter = styled.div`
background-color:#242F3E ;
height: 60vh;


width: 100%;
color: white;
padding: 2em;
justify-content: center;
@media (max-width: 600px) {
   
height: 70em;
padding: 2em;
}
`

export const  DivContCol = styled.div`
display: flex ;
flex-direction: row;
justify-content: center;
line-height : 10px;


@media (max-width: 600px) {
   flex-direction: column;
   
}
`

export const  DivCols = styled.div`
margin-top: 3.5em;
margin-right: 4em ;

h6, img{
    cursor: pointer ;

}

h6{
    margin-bottom: 2em;
    font-weight: bold;
}
p{
    cursor: pointer;
}
`



export const DivInicio = styled.div`
justify-content: center;
text-align: center;

`

export const SubDiv = styled.div`
width: 30%;
margin: auto;
border:  solid 1px lightgray;
height: 70vh;
border-radius: 15px;
padding: 2em;
text-align: left;
line-height: 20px;
h3{
    margin-top: 1em;
    font-weight: normal;
}
label{
    font-weight: bold;
    
}
`

export const ButtonInicio = styled.button`
border-style: none;
border-radius: 5px;
border: 1px solid black;
width: 100%;
background-color: #F3D184;
height: 2em;
margin-top: 2em;
`
export const SubDiv2 = styled.div`
width: 30%;
margin: auto;
border:  solid 1px lightgray;
height: 75vh;
border-radius: 15px;
padding: 2em;
text-align: left;
line-height: 20px;
h3{
   
    font-weight: normal;
}
label{
    font-weight: bold;
    
}
`

export const SubDiv3 = styled.div`
width: 30%;
margin: auto;
border:  solid 1px lightgray;
height: 90vh;
border-radius: 15px;
padding: 1em;
text-align: left;
line-height: 20px;
h3{
   
    font-weight: normal;
}
label{
    font-weight: bold;
    
}
button{
    margin-top: 1em;
}


`