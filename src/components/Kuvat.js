import Tuotteet from './Tuotteet';
import { Typography } from '@mui/material';
function Kuvat (){



    return (

        
            <div 
      style={{
        display : "flex",
        flexWrap : "wrap",
        
        
      }}
      >
            {
                Tuotteet && Tuotteet.map (tuote=>{

                    return (

                        <div className='tuotelaatikko' style ={{
                          padding :"0.5em",
                          width:"23%",
                          display :"flex",
                          justifyContent :"center",
                          }}
                          key={tuote.id}
                          >
                            <div style={{
                              display : "flex",
                              flexDirection : "column",
                              textAlign : "center",
                            }}>
                            <img src={tuote.icon} alt="kuva"
                            style={{
            
                              width : "auto",
                              height : "13em",
                              objectFit :"scale-down",
                              
                              }}/>
                            < br/>
                    <Typography
                    key={tuote.id}
                    variant='subtitle1'
                    >{tuote.name}</Typography>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        
    );
}
export default Kuvat;