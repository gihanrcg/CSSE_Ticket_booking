import React from 'react';
import "./BusStyles.css";


class SeatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tdObjects: [{seatNo:1,smartCardId:'001'},{seatNo:2,smartCardId:''},{seatNo:3,smartCardId:'ass'},{seatNo:4,smartCardId:'ass'},{seatNo:5,smartCardId:''},{seatNo:6,smartCardId:''},{seatNo:7,smartCardId:''},{seatNo:8,smartCardId:''},{seatNo:9,smartCardId:''}]
        }
    }

    componentWillMount() {
        

    }

    getSmartCardId(){
        return '001';
    }

    onClickSeat(seatNo,smartCardId){
        console.log('seatNo',seatNo);
        let oldSeats=this.state.tdObjects;
        let seat=oldSeats.filter((seat)=>seat.smartCardId==smartCardId);
        let id=seat[0].smartCardId;

        if(id==''){
            id='001';
        }else{
            id='';
        }
        console.log(oldSeats);
        oldSeats[seatNo-1].smartCardId=id;
        console.log(oldSeats[seatNo-1]);

        this.setState({tdObjects:oldSeats});
        
    }
    test(seatNo,smartCardId){
        console.log('seatNo',seatNo);
        console.log('seatNo',seatNo);
        let oldSeats=this.state.tdObjects;
        let seat=oldSeats.filter((seat)=>seat.smartCardId==smartCardId);
        let id=seat[0].smartCardId;

        if(id!=''){
            id='001';
        }else{
            id='';
        }
        
        oldSeats[seatNo-1].smartCardId=id;
       
    }


    render() {


        return (
                <div style={{width:'290px'}}>
                    {this.state.tdObjects.map((seat)=>{
                        if(seat.smartCardId=="001")
                        return (<div style={{backgroundColor:'green',width:'50px',height:'50px',margin:'10px',float:'left'}} onClick={()=>this.onClickSeat(seat.seatNo,seat.smartCardId)}>
                        </div>)
                        
                        if(seat.smartCardId!="")
                        return (<div style={{backgroundColor:'red',width:'50px',height:'50px',margin:'10px',float:'left'}}>
                        </div>)
                        
                        if(seat.smartCardId=="")
                        return (<div style={{backgroundColor:'black',width:'50px',height:'50px',margin:'10px',float:'left'}} onClick={()=>this.onClickSeat(seat.seatNo,seat.smartCardId)}>
                        </div>)
                    })}
                </div>
                

        )
    }

   
}


export default SeatList;
