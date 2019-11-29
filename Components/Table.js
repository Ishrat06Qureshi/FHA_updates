import * as React from "react";
import { Text , View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";


 export default  class Table  extends React.Component{
     
    
    render() {
        const { tableData} = this.props
        console.log( "tableData", tableData )
        return( 
            <View>
                { Object.keys( tableData  ).map(( entry , index ) => {
                    return(  <Grid style = {{ marginLeft:25}} key = { index}>
                        <Col style = {{ paddingTop:25}}> 
                        <Text> { entry } </Text>
                         </Col>
                        <Col style = {{ paddingTop:25}}> 
                        <Text> { tableData[ entry ]} </Text>
                        </Col>
                       
                    </Grid>)
                })}
            </View>
   
        
        )
    }    
}

