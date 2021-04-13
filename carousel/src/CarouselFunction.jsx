import React,{useState,useEffect, useRef} from 'react';
import  './ReactCarousel.css';

function CarouselFunction(){
    const [imgs,setImgs] = useState([
        {
            img:'./images/1.jpeg',
            text:'image one',
          },
          {
            img:'./images/2.jpeg',
            text:'image two',
          },
          {
            img:'./images/3.jpeg',
            text:'image three',
          },
          {
            img:'./images/4.jpeg',
            text:'image four',
          },
          {
            img:'./images/5.jpeg',
            text:'image five',
          },
    ]);
    const [showIndex,setShowIndex] = useState(0);
    // const [timer,setTimer] = useState(null);
    // 因为页面的渲染不需要依赖timer的值，所以不需要用usetate来定义，用useRef()
    const timer = useRef(null)

    const start=()=>{
        timer.current = setInterval(()=>{
            next();
        },2000)
        // setTimer(timer)
    };
    const stop=()=>{
        clearInterval( timer.current );
    };
    const previous=(e)=>{
        if(showIndex <= 0){
            setShowIndex(imgs.length -1);
        }else{  
            setShowIndex( prev => prev -1);
        }
    };

    const next=(e)=>{
        if(showIndex >= imgs.length - 1){
            setShowIndex(0);
        }else{
            setShowIndex( next => next + 1);
        }
    };

    const change=(index)=>{
        setShowIndex(index);
    }

    useEffect(()=>{
        start();
        return ()=>{
            stop()
        }
    })
    return(
        <div className="ReactCarousel">
            <h2>I'm write by Function Component</h2>
            <div className="contain"
                onMouseEnter={()=>{stop()}}
                onMouseLeave={()=>{start()}}
            >
                <ul className="ul">
                    {
                        imgs.map(function(value,index){
                            return(
                                <li className={index === showIndex? "show":" "} key={index}>
                                    <img src={require(value.img + '').default} alt=""></img>
                                    <div className="text_area">{value.text}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="control">
                    <span className="left" onClick={(e)=>{previous(e)}}><img src={require("./images/left_arrow.png").default} alt="left"/></span>
                    <span className="right" onClick={(e)=>{next(e)}}><img src={require("./images/right_arrow.png").default} alt="right"/></span>
                </div>

            </div> 
            <div className="thumbnail" 
                onMouseEnter={()=>{stop()}} //鼠标进入停止自动播放
                onMouseLeave={()=>{start()}}  //鼠标退出自动播放
                >
                <ul className="ul">
                    {
                    imgs.map(function(value, index){
                        return (
                            <li key={index}  
                                className={index === showIndex ? 'active' : ''} 
                                onClick={()=>{change(index);}} >
                                <img src={require(value.img + '').default} alt="thumbnail"/>
                                <div className="thumbnail_text">{value.text}</div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>       
        </div>
    );
};

export default CarouselFunction;