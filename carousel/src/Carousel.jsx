import React, {Component} from 'react';
import  './ReactCarousel.css';

class ReactCarousel extends Component{
    constructor(){
        super();
        this.state = {
            imgs:[
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
                img:'./images/3.jpeg',
                text:'image three',
              },
                // './images/1.jpeg',
                // './images/2.jpeg',
                // './images/3.jpeg',
                // './images/4.jpeg',
                // './images/5.jpeg'
               ],   // 图片数组
          showIndex: 0, //显示第几个图片
          timer: null,  // 定时器

        }
    }
    render(){
      const _this = this
        return (
            <div className="ReactCarousel">
                <div className="contain" 
                     onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
                     onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
                >
                    <ul className="ul">
                        {
                            this.state.imgs.map(function(value, index){
                                return (
                                    <li className={index === _this.state.showIndex ? 'show' : ''} key={index} > 
                                        <img src={require(value.img + '').default} alt="轮播图" />
                                        <div className="text_area"><span>{value.text}</span></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* <ul className="dots" style={{width: this.state.imgs.length * 20 + 'px'}}> 
                        {
                            this.state.imgs.map((value, index) => {
                                return (
                                    <li key={index}  
                                        className={index === this.state.showIndex ? 'active' : ''} 
                                        onClick={()=>{this.change(index)}}>
                                    </li>)
                            })
                    </ul> */}
                    <div className="control">
                        <span className="left"  onClick={(e)=>{this.previous(e)}}><img src={require("./images/left_arrow.png").default} alt="left"/></span>
                        <span className="right" onClick={(e)=>{this.next(e)}}><img src={require("./images/right_arrow.png").default} alt="right"/></span>
                    </div>              
                </div>

                <div className="thumbnail" 
                    onMouseEnter={()=>{this.stop()}} //鼠标进入停止自动播放
                    onMouseLeave={()=>{this.start()}}  //鼠标退出自动播放
                     >
                      <ul className="ul">
                          {
                              this.state.imgs.map(function(value, index){
                                return (
                                  <li key={index}  
                                      className={index === _this.state.showIndex ? 'active' : ''} 
                                      onClick={()=>{_this.change(index);}} >
                                      <img src={require(value.img + '').default} alt="thumbnail" />
                                      <div className="thumbnail_text"><text>{value.text}</text></div>
                                  </li>)
                              })
                          }
                      </ul>
                    </div>
            </div>
        )
    }
    componentDidMount(){ //一开始自动播放
        this.start();
    }
    componentWillUnmount() { //销毁前清除定时器
        this.stop();
    }
    stop = () => { //暂停
        let {timer} = this.state;
        clearInterval(timer);
    }
    start = () => { //开始
        let {timer} = this.state;
        timer = setInterval(() => {
            this.next();
        }, 2000);
        this.setState({
            timer
        })
    }
   
    change = (index) => { //点击下面的按钮切换当前显示的图片
        let {showIndex} = this.state;
        showIndex = index;
        this.setState({
            showIndex
        })
    }
    previous = (e) => { //上一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex <= 0){
            showIndex = imgs.length - 1;
        }else{
            showIndex --;
        }
        this.setState({
            showIndex
        })
    }
    next = (e) => { //下一张
        let ev = e || window.event;
        let {showIndex, imgs} = this.state;
        if(showIndex >= imgs.length - 1){
            showIndex = 0;
        }else{
            showIndex ++;
        }
        this.setState({
            showIndex
        })
    }
}
export default ReactCarousel;
